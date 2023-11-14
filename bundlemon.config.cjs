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
			maxSize: "60kb",
		},
		{
			path: "assets/style.css",
			maxSize: "3kb",
		},
		{
			path: "assets/**/*.{png,svg}",
		},
	],
};
