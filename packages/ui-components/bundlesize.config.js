const bundlePath = "../bundlesize/dist/components";
export default {
	report: {
		header: "## Bundle Size (components)",
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
			limit: "12 KB",
		},
		{
			path: `${bundlePath}/assets/vendor.js`,
			limit: "80 KB",
		},
	],
};
