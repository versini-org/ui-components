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
						".av-header h1, .av-header h2, .av-header h3, .av-header h4, .av-header h5, .av-header h6":
							{
								margin: "0",
							},
						".av-header p": {
							margin: "0",
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
						"--tw-verse-body": tokens.colors["copy-light"],
						"--tw-verse-headings": tokens.colors["copy-medium"],
						"--tw-verse-lead": tokens.colors["copy-light"],
						"--tw-verse-links": tokens.colors["copy-light"],
						"--tw-verse-bold": tokens.colors["copy-light"],
						"--tw-verse-counters": tokens.colors["copy-medium"],
						"--tw-verse-bullets": tokens.colors["copy-medium"],
						"--tw-verse-hr": tokens.colors["copy-medium"],
						"--tw-verse-quotes": tokens.colors["copy-light"],
						"--tw-verse-quote-borders": tokens.colors["copy-light"],
						"--tw-verse-captions": tokens.colors["copy-light"],
						"--tw-verse-code": tokens.colors["copy-light"],
						"--tw-verse-pre-code": tokens.colors["copy-lighter"],
						"--tw-verse-pre-bg": tokens.colors["surface-medium"],
						"--tw-verse-kbd": tokens.colors["copy-light"],
						li: {
							color: tokens.colors["copy-light"],
						},
					},
				},
				lighter: {
					css: {
						"--tw-verse-body": tokens.colors["copy-lighter"],
						"--tw-verse-headings": tokens.colors["copy-light"],
						"--tw-verse-lead": tokens.colors["copy-lighter"],
						"--tw-verse-links": tokens.colors["copy-lighter"],
						"--tw-verse-bold": tokens.colors["copy-lighter"],
						"--tw-verse-counters": tokens.colors["copy-light"],
						"--tw-verse-bullets": tokens.colors["copy-light"],
						"--tw-verse-hr": tokens.colors["copy-light"],
						"--tw-verse-quotes": tokens.colors["copy-lighter"],
						"--tw-verse-quote-borders": tokens.colors["copy-lighter"],
						"--tw-verse-captions": tokens.colors["copy-lighter"],
						"--tw-verse-code": tokens.colors["copy-lighter"],
						"--tw-verse-pre-code": tokens.colors["copy-lighter"],
						"--tw-verse-pre-bg": tokens.colors["surface-darker"],
						"--tw-verse-kbd": tokens.colors["copy-lighter"],
						li: {
							color: tokens.colors["copy-lighter"],
						},
					},
				},
				dark: {
					css: {
						"--tw-verse-body": theme("colors.slate[800]"),
						"--tw-verse-headings": theme("colors.slate[900]"),
						"--tw-verse-lead": theme("colors.slate[700]"),
						"--tw-verse-links": theme("colors.slate[900]"),
						"--tw-verse-bold": theme("colors.slate[900]"),
						"--tw-verse-counters": theme("colors.slate[600]"),
						"--tw-verse-bullets": theme("colors.slate[400]"),
						"--tw-verse-hr": theme("colors.slate[300]"),
						"--tw-verse-quotes": theme("colors.slate[900]"),
						"--tw-verse-quote-borders": theme("colors.slate[300]"),
						"--tw-verse-captions": theme("colors.slate[700]"),
						"--tw-verse-code": theme("colors.slate[900]"),
						"--tw-verse-pre-code": tokens.colors["copy-lighter"],
						"--tw-verse-pre-bg": tokens.colors["surface-medium"],
						"--tw-verse-kbd": theme("colors.slate[800]"),
						li: {
							color: tokens.colors["copy-dark"],
						},
					},
				},
			}),
		},
	},
};
