export const getBrowser = async (): Promise<string> => {
	return typeof navigator === "undefined" ? "" : navigator.userAgent;
};
