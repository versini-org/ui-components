const bundlePath = "../bundlesize/dist/fingerprint";
export default {
	report: {
		header: "## Bundle Size (fingerprint)",
		previous: "stats/stats.json",
		current: "tmp/stats.json",
	},
	sizes: [
		{
			path: `${bundlePath}/assets/index.js`,
			limit: "1 KB",
		},
		{
			path: `${bundlePath}/assets/vendor.js`,
			limit: "45 KB",
		},
	],
};
