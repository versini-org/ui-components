import type { LocalesFP } from "../common/types";
export const emptyLocales = {
	locales: {
		languages: "",
		timezone: "",
	},
};
export const getLocales = async (): Promise<LocalesFP> => {
	return new Promise((resolve) => {
		resolve({
			locales: {
				languages: navigator.language,
				timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			},
		});
	});
};
