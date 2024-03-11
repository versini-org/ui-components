export const isProd = process.env.NODE_ENV === "production";
export const isDev = !isProd;

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
