import type { AudioFP } from "../common/types";
import { hashFromFloat32Array } from "../common/utilities";

export const emptyAudio = {
	audio: {
		sampleHash: "",
		oscillator: "",
		maxChannels: 0,
		channelCountMode: "",
	},
};

export const getAudio = async (): Promise<AudioFP> => {
	return new Promise<AudioFP>((resolve) => {
		try {
			const audioContext = new window.OfflineAudioContext(1, 5000, 44100);
			const audioBuffer = audioContext.createBufferSource();
			const oscillator = audioContext.createOscillator();
			oscillator.frequency.value = 1000;
			const compressor = audioContext.createDynamicsCompressor();
			compressor.threshold.value = -50;
			compressor.knee.value = 40;
			compressor.ratio.value = 12;
			compressor.attack.value = 0;
			compressor.release.value = 0.2;
			oscillator.connect(compressor);
			compressor.connect(audioContext.destination);
			oscillator.start();

			audioContext.startRendering();
			audioContext.oncomplete = (event) => {
				const samples = event.renderedBuffer.getChannelData(0);
				oscillator.disconnect();
				compressor.disconnect();
				resolve({
					audio: {
						sampleHash: hashFromFloat32Array(samples),
						oscillator: oscillator.type,
						maxChannels: audioContext.destination.maxChannelCount,
						channelCountMode: audioBuffer.channelCountMode,
					},
				});
			};
		} catch (error) {
			console.error("Error creating audio fingerprint:", error);
			resolve({
				audio: {
					sampleHash: "",
					oscillator: "",
					maxChannels: 0,
					channelCountMode: "",
				},
			});
		}
	});
};
