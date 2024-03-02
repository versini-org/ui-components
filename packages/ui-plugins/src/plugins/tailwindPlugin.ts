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
			typography: ({ theme }: { theme: (arg0: string) => any }) => ({
				DEFAULT: {
					css: {
						maxWidth: "inherit",
						"h1, h2, h3, h4, h5, h6": {
							fontFamily: "Open Sans, ui-sans-serif, system-ui, sans-serif",
						},
						blockquote: {
							borderLeftWidth: "6px",
						},
						"blockquote p": {
							fontFamily: "Georgia, Cambria, Times New Roman, Times, serif",
						},
						li: {
							fontSize: "1rem",
						},
						pre: {
							marginTop: "2rem",
							marginBottom: "2rem",
							fontSize: "0.875rem",
							lineHeight: "1.25rem",
						},
						code: {
							fontFamily:
								'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
						},
					},
				},
				light: {
					css: {
						"--tw-prose-body": tokens.colors["copy-light"],
						"--tw-prose-headings": tokens.colors["copy-medium"],
						"--tw-prose-lead": tokens.colors["copy-light"],
						"--tw-prose-links": tokens.colors["copy-light"],
						"--tw-prose-bold": tokens.colors["copy-light"],
						"--tw-prose-counters": tokens.colors["copy-medium"],
						"--tw-prose-bullets": tokens.colors["copy-medium"],
						"--tw-prose-hr": tokens.colors["copy-medium"],
						"--tw-prose-quotes": tokens.colors["copy-light"],
						"--tw-prose-quote-borders": tokens.colors["copy-light"],
						"--tw-prose-captions": tokens.colors["copy-light"],
						"--tw-prose-code": tokens.colors["copy-light"],
						"--tw-prose-pre-code": tokens.colors["copy-lighter"],
						"--tw-prose-pre-bg": tokens.colors["surface-medium"],
						"--tw-prose-kbd": tokens.colors["copy-light"],
						li: {
							color: tokens.colors["copy-light"],
						},
					},
				},
				lighter: {
					css: {
						"--tw-prose-body": tokens.colors["copy-lighter"],
						"--tw-prose-headings": tokens.colors["copy-light"],
						"--tw-prose-lead": tokens.colors["copy-lighter"],
						"--tw-prose-links": tokens.colors["copy-lighter"],
						"--tw-prose-bold": tokens.colors["copy-lighter"],
						"--tw-prose-counters": tokens.colors["copy-light"],
						"--tw-prose-bullets": tokens.colors["copy-light"],
						"--tw-prose-hr": tokens.colors["copy-light"],
						"--tw-prose-quotes": tokens.colors["copy-lighter"],
						"--tw-prose-quote-borders": tokens.colors["copy-lighter"],
						"--tw-prose-captions": tokens.colors["copy-lighter"],
						"--tw-prose-code": tokens.colors["copy-lighter"],
						"--tw-prose-pre-code": tokens.colors["copy-lighter"],
						"--tw-prose-pre-bg": tokens.colors["surface-darker"],
						"--tw-prose-kbd": tokens.colors["copy-lighter"],
						li: {
							color: tokens.colors["copy-lighter"],
						},
					},
				},
				dark: {
					css: {
						"--tw-prose-body": theme("colors.slate[800]"),
						"--tw-prose-headings": theme("colors.slate[900]"),
						"--tw-prose-lead": theme("colors.slate[700]"),
						"--tw-prose-links": theme("colors.slate[900]"),
						"--tw-prose-bold": theme("colors.slate[900]"),
						"--tw-prose-counters": theme("colors.slate[600]"),
						"--tw-prose-bullets": theme("colors.slate[400]"),
						"--tw-prose-hr": theme("colors.slate[300]"),
						"--tw-prose-quotes": theme("colors.slate[900]"),
						"--tw-prose-quote-borders": theme("colors.slate[300]"),
						"--tw-prose-captions": theme("colors.slate[700]"),
						"--tw-prose-code": theme("colors.slate[900]"),

						"--tw-prose-pre-code": tokens.colors["copy-lighter"],
						"--tw-prose-pre-bg": tokens.colors["surface-medium"],

						// "--tw-prose-pre-code": theme("colors.slate[100]"),
						// "--tw-prose-pre-bg": theme("colors.slate[900]"),

						"--tw-prose-kbd": theme("colors.slate[800]"),
						li: {
							color: tokens.colors["copy-dark"],
						},
					},
				},
			}),
		},
	},
};

const tailwindContentPath = [
	(__dirname + "/**/*.{js,ts,jsx,tsx}").replace(
		"ui-plugins/dist",
		"ui-system/dist",
	),
	(__dirname + "/**/*.{js,ts,jsx,tsx}").replace(
		"ui-plugins/dist",
		"ui-components/dist",
	),
];

const tailwindPlugins = [
	typography,
	plugin(function ({ addUtilities }) {
		addUtilities(customCSS);
	}, myComponentLibraryConfig),
];

const tailwindSafelist = [...dynamicMargins()];

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
