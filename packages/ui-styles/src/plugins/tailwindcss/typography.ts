/* c8 ignore start */

import dynamicColors from "./colors";
import tokens from "./tokens";

export default {
	theme: {
		extend: {
			colors: dynamicColors,
			typography: ({ theme }: { theme: (arg0: string) => any }) => ({
				DEFAULT: {
					css: {
						maxWidth: "inherit",
						"h1, h2, h3, h4, h5, h6": {
							fontFamily: "Open Sans, ui-sans-serif, system-ui, sans-serif",
							fontWeight: "400",
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
