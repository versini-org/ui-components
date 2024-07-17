export type MaybePromise<T> = Promise<T> | T;
export type BrowserFP = { browser: string };

export type VideoCardFP = {
	vendor: string;
	vendorUnmasked: string;
	renderer: string;
	rendererUnmasked: string;
	version: string;
	shadingLanguageVersion: string;
};

export type HardwareFP = {
	hardware: {
		videocard: VideoCardFP;
		architecture: number;
		deviceMemory: string;
		jsHeapSizeLimit: number;
	};
};

export type CanvasFP = {
	canvas: {
		data: string;
	};
};

export type AudioFP = {
	audio: {
		sampleHash: string;
		oscillator: string;
		maxChannels: number;
		channelCountMode: string;
	};
};

export type SystemFP = {
	system: {
		platform: string;
		cookieEnabled: boolean;
		productSub: string;
		product: string;
	};
};

export type LocalesFP = {
	locales: {
		languages: string;
		timezone: string;
	};
};

export type ScreenFP = {
	screen: {
		colorDepth: number;
		pixelDepth: number;
		isTouchScreen: boolean;
		maxTouchPoints: number;
		mediaMatches: string[];
	};
};

export type FontsFP = string[];
