import type { BrowserFP } from "../common/types";

export const emptyBrowser = { browser: "" };

export const getBrowser = async (): Promise<BrowserFP> => {
	return typeof navigator === "undefined"
		? emptyBrowser
		: { browser: navigator.userAgent };
};
