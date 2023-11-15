import type { SpacingType } from ".";

const hasOwnProperty = Object.prototype.hasOwnProperty;
const toString = Object.prototype.toString;
const objectProto = Object.prototype;

export const isProd = process.env.NODE_ENV === "production";
export const isDev = !isProd;

/**
 * Checks if `value` is a valid array-like length.
 */
function isLength(value: number) {
	return (
		typeof value === "number" &&
		value > -1 &&
		value % 1 === 0 &&
		value <= 9007199254740991
	);
}

/**
 * Checks if `value` is likely a prototype object.
 */
function isPrototype(value: unknown) {
	const Ctor = value && value.constructor;
	const proto = (typeof Ctor === "function" && Ctor.prototype) || objectProto;
	return value === proto;
}

/**
 * Checks if `value` is an empty object, collection, map, or set.
 * Objects are considered empty if they have no own enumerable
 * string keyed properties.
 */
export const isEmpty = (value?: any) => {
	if (value === null || typeof value === "undefined") {
		return true;
	}

	if (
		typeof value !== "function" &&
		isLength(value.length) &&
		(Array.isArray(value) ||
			typeof value === "string" ||
			typeof value.splice === "function")
	) {
		return !value.length;
	}

	const tag = toString.call(value);
	if (tag === "[object Map]" || tag === "[object Set]") {
		return !value.size;
	}

	if (isPrototype(value)) {
		return !Object.keys(value).length;
	}

	for (const key in value) {
		/* istanbul ignore next */
		if (hasOwnProperty.call(value, key)) {
			return false;
		}
	}
	return true;
};

export const truncate = (fullString: string, maxLength: number) => {
	const ELLIPSIS = "...";
	const ELLIPSIS_LENGTH = ELLIPSIS.length;
	const truncatedString =
		maxLength > ELLIPSIS_LENGTH && fullString.length > maxLength
			? fullString.substring(0, maxLength - ELLIPSIS_LENGTH) + ELLIPSIS
			: fullString;

	return {
		truncatedString,
		fullString,
	};
};

export const getSpacing = (spacing: SpacingType): string => {
	let spacingClass = "";
	if (typeof spacing === "number") {
		spacingClass = "m-" + spacing;
	} else if (typeof spacing === "string") {
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

export const expectToHaveClasses = (
	element: HTMLElement,
	classes: string[],
) => {
	const elementClasses = element.className.split(" ").sort();
	classes.forEach((expectedClass) => {
		expect(elementClasses).toContain(expectedClass);
	});
};
