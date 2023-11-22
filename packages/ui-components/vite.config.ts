import { resolve } from "node:path";

import fs from "fs-extra";
import { defineConfig } from "vite";

import { externalDependencies } from "../../configuration/vite.common";

const packageJson = fs.readJSONSync("package.json");

const buildTime = new Date()
	.toLocaleString("en-US", {
		timeZone: "America/New_York",
		timeZoneName: "short",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	})
	.replace(/,/g, "");

export default defineConfig({
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, "src/components/index.ts"),
			formats: ["es"],
			name: "UIComponents",
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: externalDependencies,
			output: {
				assetFileNames: "style[extname]",
				entryFileNames: "[name].js",
			},
		},
	},
	esbuild: {
		supported: {
			"top-level-await": true,
		},
	},
	define: {
		"import.meta.env.BUILDTIME": JSON.stringify(buildTime),
		"import.meta.env.BUILDVERSION": JSON.stringify(packageJson.version),
	},
	plugins: [],
});
