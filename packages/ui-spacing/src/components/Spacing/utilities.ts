import type { SpacingTypes } from "@versini/ui-spacing-types";

/**
 * This method returns a string that can be used as a tailwind class relying
 * on margins definitions (m, mt, mb, etc.).
 * Please refer to: https://tailwindcss.com/docs/margin
 *
 * It accepts a number, a string or an object.
 * If a number is passed, it will be converted to a string and prefixed with "m-".
 * If a string is passed, it will be prefixed with "m-".
 * If an object is passed, it will be converted to a string like this:
 * { t: 4, r: 1, b: 3, l: 5} => "mt-4 mr-1 mb-3 ml-5"
 *
 */
export const getSpacing = (spacing: SpacingTypes.Types): string => {
	let spacingClass = "";
	/**
	 * In this case, spacing is a number or a string. For example:
	 * spacing = 4
	 * which will be converted to:
	 * "m-4"
	 */
	if (typeof spacing === "number" || typeof spacing === "string") {
		spacingClass = "m-" + spacing;
	} else {
		/**
		 * in this case spacing is an object like this:
		 * spacing = { t: 4, r: 1, b: 3, l: 5}
		 * All keys are optional.
		 * The following lines will transform this object into a string like this:
		 * "mt-4 mr-1 mb-3 ml-5"
		 */
		const classes = [];
		if (spacing?.t !== undefined) {
			classes.push(`mt-${spacing.t}`);
		}
		if (spacing?.r !== undefined) {
			classes.push(`mr-${spacing.r}`);
		}
		if (spacing?.b !== undefined) {
			classes.push(`mb-${spacing.b}`);
		}
		if (spacing?.l !== undefined) {
			classes.push(`ml-${spacing.l}`);
		}
		spacingClass = classes.join(" ");
	}

	return spacingClass;
};
