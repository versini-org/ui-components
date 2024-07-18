import type { BrowserFP } from "../common/types";

export const emptyBrowser = { browser: "" };

export const getBrowser = async (_debug: boolean): Promise<BrowserFP> => {
	return typeof navigator === "undefined"
		? emptyBrowser
		: { browser: navigator.userAgent };
};
