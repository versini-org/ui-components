import path from "node:path";

import fs from "fs-extra";

const packageJson = fs.readJSONSync(
	path.join("..", "ui-components", "package.json"),
);

export default {
	esbuild: {
		supported: {
			"top-level-await": true,
		},
	},
	server: {
		open: false,
	},
	define: {
		"import.meta.env.OWNER": JSON.stringify("gizmette.com"),
		"import.meta.env.REPOSITORY": JSON.stringify(packageJson.homepage),
		"import.meta.env.BUILDVERSION": JSON.stringify(packageJson.version),
	},
};
