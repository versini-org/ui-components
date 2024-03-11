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