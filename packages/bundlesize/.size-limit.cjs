module.exports = [
	{
		path: ["dist/assets/index.js"],
		limit: "40 kB",
		gzip: true,
		ignore: ["react", "react-dom"],
	},
	{
		path: ["dist/assets/style.css"],
		limit: "8 kB",
		gzip: true,
	},
];
