module.exports = {
	reportOutput: ["github"],
	baseDir: "./packages/documentation/dist",
	defaultCompression: "gzip",
	files: [
		{
			path: "index.html",
			maxSize: "2kb",
		},
		{
			path: "assets/index-<hash>.js",
			maxSize: "60kb",
		},
		{
			path: "assets/index-<hash>.css",
			maxSize: "3kb",
		},
		{
			path: "assets/**/*.{png,svg}",
		},
	],
};
