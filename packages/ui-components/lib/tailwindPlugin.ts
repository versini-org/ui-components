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
			// typography: {
			typography: ({ theme }: { theme: (arg0: string) => any }) => ({
				DEFAULT: {
					css: {
						"h1, h2, h3, h4, h5, h6": {
							fontFamily: "Open Sans",
						},
						p: {
							marginTop: 0,
							marginBottom: 0,
							fontSize: "1rem",
							lineHeight: "1.75rem",
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
							borderRadius: "0.5rem",
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
						"--tw-prose-pre-code": tokens.colors["copy-light"],
						"--tw-prose-pre-bg": tokens.colors["surface-dark"],
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
						"--tw-prose-pre-code": theme("colors.slate[100]"),
						"--tw-prose-pre-bg": theme("colors.slate[900]"),
						li: {
							color: tokens.colors["copy-dark"],
						},
					},
				},
				// light: {
				// 	css: {
				// 		"h1, h2, h3, h4, h5, h6": {
				// 			color: tokens.colors["copy-light"],
				// 			fontFamily: "Open Sans",
				// 		},
				// 		strong: {
				// 			color: tokens.colors["copy-lighter"],
				// 		},
				// 		p: {
				// 			color: tokens.colors["copy-lighter"],
				// 			marginTop: 0,
				// 			marginBottom: 0,
				// 			fontSize: "1.125rem",
				// 			lineHeight: "1.75rem",
				// 		},
				// 		blockquote: {
				// 			borderLeftColor: tokens.colors["border-light"],
				// 			borderLeftWidth: "6px",
				// 		},
				// 		"blockquote p": {
				// 			fontFamily: "Georgia, Cambria, Times New Roman, Times, serif",
				// 		},
				// 		li: {
				// 			color: tokens.colors["copy-lighter"],
				// 			fontSize: "1.125rem",
				// 		},
				// 		"ul > li::marker": {
				// 			color: tokens.colors["copy-lighter"],
				// 		},
				// 		pre: {
				// 			color: tokens.colors["copy-light"],
				// 			backgroundColor: tokens.colors["surface-dark"],
				// 			marginTop: "2rem",
				// 			marginBottom: "2rem",
				// 			borderRadius: "0.5rem",
				// 			fontSize: "0.875rem",
				// 			lineHeight: "1.25rem",
				// 		},
				// 		code: {
				// 			color: tokens.colors["copy-light"],
				// 			fontFamily:
				// 				'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
				// 		},
				// 	},
				// 	// },
				// },
			}),
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
