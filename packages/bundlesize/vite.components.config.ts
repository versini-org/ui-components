/** @type {import('vite').UserConfig} */

import { resolve } from "node:path";

import fs from "fs-extra";
import { defineConfig } from "vite";

const VENDOR_CHUNK = "vendorChunk";
const packageJson = fs.readJSONSync("../ui-components/package.json");
const prodDependencies = Object.keys(packageJson.dependencies).filter(
	(dependency) =>
		dependency !== "react" &&
		dependency !== "react-dom" &&
		dependency !== "react/jsx-runtime" &&
		dependency !== "react-dom/server" &&
		dependency !== "tailwindcss",
);
prodDependencies.push(
	"react-dom",
	"react-dom/server",
	"react",
	"react/jsx-runtime",
);

export default defineConfig({
	esbuild: {
		supported: {
			"top-level-await": true, //browsers can handle top-level-await features
		},
	},
	build: {
		outDir: "dist/system",
		rollupOptions: {
			input: {
				index: resolve(__dirname, "ui-system", "index.html"),
			},
			output: {
				assetFileNames: "assets/style[extname]",
				entryFileNames: "assets/[name].js",
				/**
				 * Manually creating chunks for prod dependencies.
				 */
				manualChunks: {
					[VENDOR_CHUNK]: prodDependencies,
				},
				chunkFileNames(chunkInfo) {
					if (chunkInfo.name.includes(VENDOR_CHUNK)) {
						return "assets/vendor.js";
					}
					return "[name]-[hash].js";
				},
			},
		},
	},
	plugins: [],
});
