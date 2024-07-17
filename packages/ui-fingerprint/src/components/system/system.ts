type System = {
	platform: string;
	cookieEnabled: boolean;
	productSub: string;
	product: string;
};
export const getSystem = async (): Promise<System> => {
	return {
		platform: window.navigator.platform,
		cookieEnabled: window.navigator.cookieEnabled,
		productSub: navigator.productSub,
		product: navigator.product,
	};
};
