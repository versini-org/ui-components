import typography from "@tailwindcss/typography";
import { converter } from "culori";
import plugin from "tailwindcss/plugin";

import { tokens } from "../../../../ui-components/lib/tokens";

const parse = converter("rgb");

const dynamicColors = () => {
	const result: { [key: string]: string } = {};
	Object.entries(tokens.colors).forEach(([name, color]) => {
		const rgb = parse(color);
		const variable = `--av-${name}`;
		const fallbackValue = rgb
			? `${rgb.r * 255} ${rgb.g * 255} ${rgb.b * 255}`
			: "0 0 0";
		result[name] = `var(${variable}, rgb(${fallbackValue} / <alpha-value>))`;
	});
	return result;
};

const dynamicColorsClasses = () => {
	const result: string[] = [];
	Object.entries(tokens.colors).forEach(([name]) => {
		if (name.startsWith("action-")) {
			result.push(`bg-${name}`);
			result.push(`hover:bg-${name}`);
			result.push(`active:bg-${name}`);
		}
		if (name.startsWith("surface-")) {
			result.push(`bg-${name}`);
		}
		if (name.startsWith("copy-")) {
			result.push(`text-${name}`);
			result.push(`hover:text-${name}`);
			result.push(`active:text-${name}`);
		}
		if (name.startsWith("border-")) {
			result.push(`border-${name}`);
		}
		if (name.startsWith("focus-")) {
			result.push(`ring-${name}`);
			result.push(`focus:ring-${name}`);
		}
	});

	return result;
};

const dynamicMargins = () => {
	const allowed = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44,
		48, 52, 56, 60, 64, 72, 80, 96,
	];
	const margins: string[] = [];
	allowed.forEach((num) => {
		margins.push(`mt-${num}`);
		margins.push(`mr-${num}`);
		margins.push(`mb-${num}`);
		margins.push(`ml-${num}`);
	});
	return margins;
};

const myComponentLibraryConfig = {
	theme: {
		extend: {
			colors: dynamicColors(),
			typography: {
				DEFAULT: {
					css: {
						blockquote: {
							borderLeftColor: "var(--tw-prose-blockquote-border-color)",
						},
						"ul > li::marker": {
							color: "var(--tw-prose-counter)",
						},
					},
				},
			},
		},
	},
};

const uiStyles = {
	[`.av-text-input-wrapper label[aria-hidden="true"],
		.av-text-area-wrapper label[aria-hidden="true"]`]: {
		/* move the label inline */
		transform: "translate(18px, 0) scale(1)",
		transformOrigin: "top left",
		transition: "var(--av-text-area-wrapper-transition, all 0.2s ease-out)",
	},
	'.av-text-input:focus + label[aria-hidden="true"],\n\t.av-text-input:not(:placeholder-shown) + label[aria-hidden="true"],\n\t.av-text-area:focus + label[aria-hidden="true"],\n\t.av-text-area:not(:placeholder-shown) + label[aria-hidden="true"]':
		{
			transform:
				"translate(18px, var(--av-text-area-label, -25px)) scale(0.75)",
		},
	".av-text-input-helper-text,\n\t.av-text-area-helper-text": {
		transform:
			"translate(18px, var(--av-text-area-helper-text, 32px))\n\t\t\tscale(0.75)",
		transformOrigin: "top left",
	},
	".av-text-input__control--right,\n\t.av-text-area__control--right": {
		right: "18px",
	},
	"@keyframes blink": { "50%": { fill: "transparent" } },
	".av-spinner__dot": { animation: "1s blink infinite" },
	".av-spinner__dot:nth-child(2)": { animationDelay: "250ms" },
	".av-spinner__dot:nth-child(3)": { animationDelay: "500ms" },
};

const contentPath = (__dirname + "/**/*.{js,ts,jsx,tsx}").replace(
	"ui-plugins",
	"ui-components",
);

export const uiComponents = {
	content: contentPath,
	safelist: [...dynamicMargins(), ...dynamicColorsClasses()],
	plugin: plugin(function ({ addUtilities }) {
		addUtilities(uiStyles);
	}, myComponentLibraryConfig),

	tailwindMerge: (config: any) => {
		const safelist = [...dynamicMargins(), ...dynamicColorsClasses()];
		const content = [contentPath];
		const plugins = [typography];

		if (config?.safelist?.length) {
			config.safelist.push(...safelist);
		} else {
			config.safelist = safelist;
		}

		if (config?.content?.length) {
			config.content.push(...content);
		} else {
			config.content = content;
		}

		if (config?.plugins?.length) {
			config.plugins.push(...plugins);
		} else {
			config.plugins = plugins;
		}

		return config;
	},
};
