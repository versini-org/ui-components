import type { ScreenFP } from "../common/types";

export const emptyScreen = {
	screen: {
		colorDepth: 0,
		pixelDepth: 0,
		isTouchScreen: false,
		maxTouchPoints: 0,
		mediaMatches: [],
	},
};

export const getScreen = async (): Promise<ScreenFP> => {
	return new Promise<ScreenFP>((resolve) => {
		try {
			const screen = window.screen;
			const screenData: ScreenFP = {
				screen: {
					colorDepth: screen.colorDepth,
					pixelDepth: screen.pixelDepth,
					isTouchScreen: navigator.maxTouchPoints > 0,
					maxTouchPoints: navigator.maxTouchPoints,
					mediaMatches: mediaMatches(),
				},
			};

			resolve(screenData);
		} catch (error) {
			console.error("Error creating screen fingerprint");
			console.info(error);
			resolve(emptyScreen);
		}
	});
};

function mediaMatches(): string[] {
	const results: string[] = [];

	const mediaQueries: { [k: string]: string[] } = {
		"prefers-contrast": [
			"high",
			"more",
			"low",
			"less",
			"forced",
			"no-preference",
		],
		"any-hover": ["hover", "none"],
		"any-pointer": ["none", "coarse", "fine"],
		pointer: ["none", "coarse", "fine"],
		hover: ["hover", "none"],
		update: ["fast", "slow"],
		"inverted-colors": ["inverted", "none"],
		"prefers-reduced-motion": ["reduce", "no-preference"],
		"prefers-reduced-transparency": ["reduce", "no-preference"],
		scripting: ["none", "initial-only", "enabled"],
		"forced-colors": ["active", "none"],
		"color-gamut": ["srgb", "p3", "rec2020"],
	};

	Object.keys(mediaQueries).forEach((key) => {
		mediaQueries[key].forEach((value) => {
			if (matchMedia(`(${key}: ${value})`).matches) {
				results.push(`${key}: ${value}`);
			}
		});
	});
	return results;
}
