import type { HardwareFP, VideoCardFP } from "../common/types";
const emptyVideoCard = {
	vendor: "",
	vendorUnmasked: "",
	renderer: "",
	rendererUnmasked: "",
	version: "",
	shadingLanguageVersion: "",
};

export const emptyHardware = {
	hardware: {
		videocard: emptyVideoCard,
		architecture: 0,
		deviceMemory: "undefined",
		jsHeapSizeLimit: 0,
	},
};

function getVideoCard(): VideoCardFP {
	const canvas = document.createElement("canvas");
	const gl =
		canvas.getContext("webgl") ?? canvas.getContext("experimental-webgl");
	if (gl && "getParameter" in gl) {
		const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
		return {
			vendor: (gl.getParameter(gl.VENDOR) || "").toString(),
			vendorUnmasked: debugInfo
				? (gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || "").toString()
				: "",
			renderer: (gl.getParameter(gl.RENDERER) || "").toString(),
			rendererUnmasked: debugInfo
				? (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "").toString()
				: "",
			version: (gl.getParameter(gl.VERSION) || "").toString(),
			shadingLanguageVersion: (
				gl.getParameter(gl.SHADING_LANGUAGE_VERSION) || ""
			).toString(),
		};
	}
	return emptyVideoCard;
}

function getArchitecture(): number {
	const f = new Float32Array(1);
	const u8 = new Uint8Array(f.buffer);
	f[0] = Infinity;
	f[0] = f[0] - f[0];
	return u8[3];
}

// @ts-ignore
const getDeviceMemory = () => navigator.deviceMemory || 0;
const getMemoryInfo = () =>
	(window.performance && (window.performance as any).memory) || {
		jsHeapSizeLimit: 0,
	};

export const getHardware = async (debug?: boolean): Promise<HardwareFP> => {
	return new Promise((resolve) => {
		try {
			const deviceMemory = getDeviceMemory();
			const memoryInfo = getMemoryInfo();

			resolve({
				hardware: {
					videocard: getVideoCard(),
					architecture: getArchitecture(),
					deviceMemory: deviceMemory.toString() || "undefined",
					jsHeapSizeLimit: memoryInfo.jsHeapSizeLimit || 0,
				},
			});
		} catch (error) {
			if (debug) {
				console.error("Error getting hardware data");
				console.info(error);
			}
			resolve(emptyHardware);
		}
	});
};
