const bundlePath = "../bundlesize/dist";
export default {
	report: {
		previous: "stats/stats.json",
		current: "tmp/stats.json",
	},
	sizes: [
		{
			path: `${bundlePath}/assets/style.css`,
			limit: "8 KB",
		},
		{
			path: `${bundlePath}/assets/index.js`,
			limit: "18 KB",
		},
		{
			path: `${bundlePath}/assets/vendor.js`,
			limit: "67 KB",
		},
	],
};
