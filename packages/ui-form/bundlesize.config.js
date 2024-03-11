const bundlePath = "../bundlesize/dist/form";
export default {
	report: {
		header: "## Bundle Size (form components)",
		previous: "stats/stats.json",
		current: "tmp/stats.json",
	},
	sizes: [
		{
			path: `${bundlePath}/assets/index.js`,
			limit: "20 KB",
		},
		{
			path: `${bundlePath}/assets/vendor.js`,
			limit: "67 KB",
		},
	],
};
