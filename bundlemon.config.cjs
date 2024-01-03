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
			maxSize: "15kb",
		},
		{
			path: "assets/style.css",
			maxSize: "7kb",
		},
		{
			path: "assets/**/*.{png,svg}",
		},
	],
};
