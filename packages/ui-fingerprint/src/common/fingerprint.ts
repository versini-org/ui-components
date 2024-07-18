import type {
	AudioFP,
	BrowserFP,
	CanvasFP,
	FontsFP,
	HardwareFP,
	LocalesFP,
	ScreenFP,
	SystemFP,
} from "../common/types";
import { emptyAudio, getAudio } from "../components/audio";
import { emptyBrowser, getBrowser } from "../components/browser";
import { emptyCanvas, getCanvas } from "../components/canvas";
import { emptyFonts, getFonts } from "../components/fonts";
import { emptyHardware, getHardware } from "../components/hardware";
import { emptyLocales, getLocales } from "../components/locale";
import { emptyScreen, getScreen } from "../components/screen";
import { emptySystem, getSystem } from "../components/system";

import { hashFromString } from "./utilities";

type FingerprintData = [
	AudioFP,
	BrowserFP,
	CanvasFP,
	FontsFP,
	HardwareFP,
	LocalesFP,
	ScreenFP,
	SystemFP,
];

export const getFingerprintData = async (): Promise<FingerprintData> => {
	try {
		return Promise.all([
			getAudio(),
			getBrowser(),
			getCanvas(),
			getFonts(),
			getHardware(),
			getLocales(),
			getScreen(),
			getSystem(),
		]);
	} catch (_error) {
		return [
			emptyAudio,
			emptyBrowser,
			emptyCanvas,
			emptyFonts,
			emptyHardware,
			emptyLocales,
			emptyScreen,
			emptySystem,
		];
	}
};

export const getFingerprintHash = async (): Promise<string> => {
	try {
		const data = await getFingerprintData();
		return await hashFromString(JSON.stringify(data));
	} catch (_error) {
		console.error("Error getting fingerprint hash");
		console.info(_error);
		return "";
	}
};
