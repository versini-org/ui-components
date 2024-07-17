const hashFromFloat32Array = (array: Float32Array): string => {
	const hashArray = Array.from(array)
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");
	return hashArray;
};

type Audio = {
	sampleHash: string;
	oscillator: string;
	maxChannels: number;
	channelCountMode: string;
};
export const getAudio = async (): Promise<Audio> => {
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

		return new Promise((resolve, reject) => {
			audioContext.oncomplete = (event) => {
				try {
					const samples = event.renderedBuffer.getChannelData(0);
					resolve({
						sampleHash: hashFromFloat32Array(samples),
						oscillator: oscillator.type,
						maxChannels: audioContext.destination.maxChannelCount,
						channelCountMode: audioBuffer.channelCountMode,
					});
					audioContext.startRendering();
				} catch (error) {
					reject(error);
				}
			};
		});
	} catch (_error) {
		return {
			sampleHash: "",
			oscillator: "",
			maxChannels: 0,
			channelCountMode: "",
		};
	}
};
