import type { CanvasFP } from "../common/types";
import { hashFromString } from "../common/utilities";

export const emptyCanvas = {
	canvas: {
		data: "",
	},
};
export const getCanvas = async (): Promise<CanvasFP> => {
	const WIDTH = 300;
	const HEIGHT = 30;

	try {
		/**
		 * Creating 3 identical image data with same text and same colors,
		 * and extracting the common pixels from them. This is a fingerprint
		 * busting technique to defeat canvas counter-fingerprinting.
		 */
		const imageData: ImageData[] = Array.from({ length: 3 }, () =>
			generateImageData(WIDTH, HEIGHT),
		);
		const commonImageData = getCommonPixels(imageData, WIDTH, HEIGHT);
		const hashedData = (
			await hashFromString(commonImageData.data.toString())
		).toString();
		return {
			canvas: {
				data: hashedData,
			},
		};
	} catch (error) {
		console.error("Error creating canvas fingerprint");
		console.info(error);
		return emptyCanvas;
	}
};

const generateImageData = (width: number, height: number): ImageData => {
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");

	if (!ctx) {
		return new ImageData(1, 1);
	}

	canvas.width = width;
	canvas.height = height;

	// Create rainbow gradient for the background rectangle
	const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
	gradient.addColorStop(0, "red");
	gradient.addColorStop(1 / 6, "orange");
	gradient.addColorStop(2 / 6, "yellow");
	gradient.addColorStop(3 / 6, "green");
	gradient.addColorStop(4 / 6, "blue");
	gradient.addColorStop(5 / 6, "indigo");
	gradient.addColorStop(1, "violet");

	// Draw background rectangle with the rainbow gradient
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// Draw some random text
	// We use m or w because these two characters take up the maximum width.
	// And we use a LLi so that the same matching fonts can get separated.
	const randomText =
		"mmMwWLliI0O&1 - Les sanglots longs des violons de l'automne blessent mon coeur d'une langueur monotone";
	ctx.font = "26.321px Arial";
	ctx.fillStyle = "black";
	ctx.fillText(randomText, -5, 15);

	// Draw the same text with an offset, different color, and slight transparency
	ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
	ctx.fillText(randomText, -3.3, 17.7);

	// Draw a line crossing the image at an arbitrary angle
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo((canvas.width * 2) / 7, canvas.height);
	ctx.strokeStyle = "white";
	ctx.lineWidth = 2;
	ctx.stroke();

	const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	return imageData;
};

const getMostFrequent = (arr: number[]): number => {
	if (arr.length === 0) {
		return 0;
	}
	const frequencyMap: { [key: number]: number } = {};
	for (const num of arr) {
		frequencyMap[num] = (frequencyMap[num] || 0) + 1;
	}
	let mostFrequent: number = arr[0];

	// Find the number with the highest frequency
	for (const num in frequencyMap) {
		if (frequencyMap[num] > frequencyMap[mostFrequent]) {
			mostFrequent = parseInt(num, 10);
		}
	}
	return mostFrequent;
};

const getCommonPixels = (
	images: ImageData[],
	width: number,
	height: number,
): ImageData => {
	const finalData: number[] = [];
	for (let i = 0; i < images[0].data.length; i++) {
		const indice: number[] = [];
		for (let u = 0; u < images.length; u++) {
			indice.push(images[u].data[i]);
		}
		finalData.push(getMostFrequent(indice));
	}

	const pixelData = finalData;
	const pixelArray = new Uint8ClampedArray(pixelData);
	return new ImageData(pixelArray, width, height);
};
