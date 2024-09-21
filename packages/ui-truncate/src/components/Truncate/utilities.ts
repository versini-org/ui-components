export const DEFAULT_LENGTH = 200;
export const DEFAULT_OMISSION = "===+-av-+===";

type TruncateOptions = {
	string: string;
	length: number;
	omission?: string;
};
type TruncateResult = {
	string: string;
	isTruncated: boolean;
};

export const truncate = ({
	string,
	length = DEFAULT_LENGTH,
	omission = DEFAULT_OMISSION,
}: TruncateOptions): TruncateResult => {
	const strLength = string.length;
	if (length >= strLength) {
		return { string, isTruncated: false };
	}
	const end = length - omission.length;
	if (end < 1) {
		return { string: "", isTruncated: true };
	}
	const result = string.slice(0, end);

	return { string: result, isTruncated: true };
};
