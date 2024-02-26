import { deepEqual } from "fast-equals";
import memoize from "micro-memoize";

// import type { SpacingType } from ".";

// export type SpacingProps = {
// 	spacing?: SpacingType;
// };

export type SpacingType =
	| undefined
	| string
	| number
	| {
			b?: number;
			l?: number;
			r?: number;
			t?: number;
	  };

/**
 * Custom spacing for a component.
 * @example
 * ```tsx
 * <Button spacing={{ b: 2, l: 1, r: 1, t: 2 }}>Hello World</Button>
 * <Button spacing="2">Hello World</Button>
 * <Button spacing={2}>Hello World</Button>
 * ```
 */
export type SpacingProps = {
	spacing?: SpacingType;
};

/**
 * Memoize function calls with arguments that are
 * complex objects (hence "deep"). Do not use for
 * standard types.
 * @param {Function} fct - the function to optimize.
 * @returns the optimized function.
 */
export function memoizeDeep(fct: any) {
	return memoize(fct, { isEqual: deepEqual });
}

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
export const getSpacing = memoizeDeep((spacing: SpacingType): string => {
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
});
