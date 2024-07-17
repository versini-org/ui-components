import type { SystemFP } from "../common/types";

export const getSystem = async (): Promise<SystemFP> => {
	try {
		return {
			system: {
				platform: navigator.platform,
				cookieEnabled: navigator.cookieEnabled,
				productSub: navigator.productSub,
				product: navigator.product,
			},
		};
	} catch (error) {
		console.error("Error getting system data");
		console.info(error);
		return emptySystem;
	}
};

export const emptySystem = {
	system: {
		platform: "",
		cookieEnabled: false,
		productSub: "",
		product: "",
	},
};
