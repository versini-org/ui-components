/* eslint-disable no-undef */

module.exports = {
	reportOutput: ["github"],
	baseDir: "./packages/bundlesize/dist",
	defaultCompression: "gzip",
	files: [
		{
			path: "index.html",
			maxSize: "2kb",
		},
		{
			path: "assets/index.js",
			maxSize: "10kb",
			maxPercentIncrease: 5,
		},
		{
			path: "assets/style.css",
			maxSize: "4kb",
			maxPercentIncrease: 5,
		},
		{
			path: "assets/**/*.{png,svg}",
		},
	],
};
