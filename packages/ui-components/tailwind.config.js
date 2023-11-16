/** @type {import('tailwindcss').Config} */

import hexRgb from "hex-rgb";
import colors from "tailwindcss/colors";

import { dynamicTwClasses } from "./lib/twPlugin";

/**
 * This function generates all the dynamic margins that are
 * potentially used with the "spacing" prop.
 * This is needed because tailwindcss doesn't support dynamic
 * margins out of the box -> if a mergin is not specifically
 * used, it will not be included in the final css file. This function,
 * used in conjunction with the safelist below, ensures that all
 * dynamic margins are included in the final css file.
 */
const generateDynamicMargins = () => {
	const allowed = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 44,
		48, 52, 56, 60, 64, 72, 80, 96,
	];
	const margins = [];
	allowed.forEach((num) => {
		margins.push(`mr-${num}`);
		margins.push(`ml-${num}`);
	});
	return margins;
};

const generateDynamicBackgrounds = () => {
	const allowed = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
	const backgrounds = [];
	allowed.forEach((num) => {
		backgrounds.push(`bg-primary-${num}`);
		backgrounds.push(`bg-slate-${num}`);
		backgrounds.push(`border-slate-${num}`);
	});
	return backgrounds;
};

const accentClasses = dynamicTwClasses("accent", 10);
console.log("==> ", accentClasses);
console.log("==> ", colors.slate);

const res900 = hexRgb(colors.slate["900"]);
console.log("==> ", res900);
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	safelist: [...generateDynamicMargins(), ...generateDynamicBackgrounds()],
	plugins: [],
	theme: {
		colors,
		extend: {
			colors: {
				"border-primary": `var(--av-border-primary, ${colors.slate["900"]})`,
				"action-primary": `var(--av-action-primary, ${colors.slate["900"]})`,
				"copy-primary": `var(--av-copy-primary, ${colors.slate["200"]})`,

				"border-secondary": `var(--av-border-secondary, ${colors.slate["900"]})`,
				"action-secondary": `var(--av-action-secondary, ${colors.slate["500"]})`,
				"copy-secondary": `var(--av-copy-secondary, ${colors.slate["200"]})`,
			},
		},
	},
};
