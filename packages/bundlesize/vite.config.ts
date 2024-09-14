/** @type {import('vite').UserConfig} */

import { resolve } from "node:path";

import fs from "fs-extra";
import { defineConfig, loadEnv } from "vite";

const VENDOR_CHUNK = "vendorChunk";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());
	const packageJson = fs.readJSONSync(
		`../ui-${env.VITE_UI_TARGET}/package.json`,
	);
	const prodDependencies = Object.keys(packageJson.dependencies || []).filter(
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

	return {
		esbuild: {
			supported: {
				"top-level-await": true, //browsers can handle top-level-await features
			},
		},
		build: {
			outDir: `dist/${env.VITE_UI_TARGET}`,
			emptyOutDir: false,
			rollupOptions: {
				input: {
					index: resolve(__dirname, "src", env.VITE_UI_TARGET, "index.html"),
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
	};
});
