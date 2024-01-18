const bundlePath = "../bundlesize/dist";
export default [
	{
		path: `${bundlePath}/index.html`,
		limit: "2 KB",
	},
	{
		path: `${bundlePath}/assets/index.js`,
		limit: "18 KB",
	},
	{
		path: `${bundlePath}/assets/style.css`,
		limit: "8 KB",
	},
];
