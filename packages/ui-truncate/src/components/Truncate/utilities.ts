export const DEFAULT_LENGTH = 200;

type TruncateOptions = {
	string: string;
	idealLength?: number;
};
type TruncateResult = {
	string: string;
	isTruncated: boolean;
};

/**
 * This function will truncate the string at the last word boundary
 * before the ideal length.
 * - If ideal length ends up in the middle of a word, truncate at the next space.
 * - If ideal length ends up on a space, truncate at the ideal length.
 */
export const truncate = ({
	string,
	idealLength = DEFAULT_LENGTH,
}: TruncateOptions): TruncateResult => {
	const strLength = string.length;
	if (strLength <= idealLength) {
		return { string: string, isTruncated: false };
	}

	const originalTrunc = string.charAt(idealLength);
	if (originalTrunc === " ") {
		return { string: string.slice(0, idealLength), isTruncated: true };
	}

	const nextSpace = string.slice(idealLength).search(" ");
	return {
		string: string.slice(0, idealLength + nextSpace),
		isTruncated: true,
	};
};
