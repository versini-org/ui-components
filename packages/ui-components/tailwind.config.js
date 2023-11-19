/** @type {import('tailwindcss').Config} */

import {
	dynamicColors,
	dynamicColorsClasses,
	dynamicMargins,
} from "./lib/twPlugin";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	safelist: [...dynamicMargins(), ...dynamicColorsClasses()],
	plugins: [],
	theme: {
		extend: {
			colors: dynamicColors(),
		},
	},
};
