import typography from "@tailwindcss/typography";
import { converter } from "culori";
import plugin from "tailwindcss/plugin";
import type { Config, OptionalConfig } from "tailwindcss/types/config";

import { customCSS } from "./customCSS";
import { tokens } from "./tokens";

type TailwindConfig = {
	content: string[];
} & OptionalConfig;

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

const tailwindContentPath = [
	(__dirname + "/**/*.{js,ts,jsx,tsx}").replace("ui-plugins", "ui-components"),
];

const tailwindPlugins = [
	typography,
	plugin(function ({ addUtilities }) {
		addUtilities(customCSS);
	}, myComponentLibraryConfig),
];

const tailwindSafelist = [...dynamicMargins(), ...dynamicColorsClasses()];

export const twPlugin = {
	content: tailwindContentPath,
	safelist: tailwindSafelist,
	plugins: tailwindPlugins,

	merge: (config: TailwindConfig) => {
		const safelist = tailwindSafelist;
		const content = tailwindContentPath;
		const plugins = tailwindPlugins;

		config.safelist = [...(config.safelist || []), ...safelist];
		config.content = [...(config.content || []), ...content];
		config.plugins = [...(config.plugins || []), ...plugins];

		return config as Config;
	},
};
