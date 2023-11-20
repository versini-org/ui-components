import { converter } from "culori";

import { tokens } from "./tokens";

const parse = converter("rgb");

/**
 * This function generates all the dynamic colors that are
 * exposed in our tokens. It creates an entry for each color
 * in the tokens, with the following format:
 *
 * rgb(var(--av-<color-name>, <fallback-value>) / <alpha-value>)
 */
export const dynamicColors = () => {
	const result = {};
	Object.entries(tokens.colors).forEach(([name, color]) => {
		const rgb = parse(color);
		const variable = `--av-${name}`;
		const fallbackValue = `${rgb.r * 255} ${rgb.g * 255} ${rgb.b * 255}`;

		result[name] = `rgb(var(${variable}, ${fallbackValue}) / <alpha-value>)`;
	});

	return result;
};

/**
 * This function generates all the dynamic classes that are
 * potentially used with our tokens.
 * This is needed because tailwindcss doesn't support dynamic
 * classes out of the box -> if a class is not specifically
 * used, it will not be included in the final css file. This function,
 * used in conjunction with the safelist option of the Tailwind
 * configuration, ensures that all dynamic classes are included in
 * the final css file.
 */
export const dynamicColorsClasses = () => {
	const result = [];
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
			result.push(`border-${name}/0`);
			result.push(`border-${name}/100`);
		}
		if (name.startsWith("focus-")) {
			result.push(`ring-${name}`);
			result.push(`focus:ring-${name}`);
		}
	});

	return result;
};

/**
 * This function generates all the dynamic margins that are
 * potentially used with the "spacing" prop.
 * This is needed because tailwindcss doesn't support dynamic
 * margins out of the box -> if a margin is not specifically
 * used, it will not be included in the final css file. This function,
 * used in conjunction with the safelist option of the Tailwind
 * configuration, ensures that all dynamic classes are included in
 * the final css file.
 */
export const dynamicMargins = () => {
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
