/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";

import {
	dynamicColors,
	dynamicColorsClasses,
	dynamicMargins,
} from "./lib/twPlugin";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	safelist: [...dynamicMargins(), ...dynamicColorsClasses()],
	plugins: [typography],
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
