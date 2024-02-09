import path from "node:path";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import fs from "fs-extra";
import { glob } from "glob";
import { defineConfig } from "vite";

import { externalDependencies } from "../../configuration/vite.common";

const packageJson = fs.readJSONSync("package.json");
const copyrightYear = new Date(Date.now()).getFullYear();
const banner = `/*!
  ${packageJson.name} v${packageJson.version}
  © ${copyrightYear} gizmette.com
*/
`;

export default defineConfig(({ mode }) => {
	const isDev = mode === "development";
	/**
	 * Build a list of public files, which means all files in the
	 * src/hooks/ComponentName folders.
	 * Everything else will be moved to the chunk folder.
	 */
	const input = isDev
		? {}
		: Object.fromEntries(
				glob
					.sync("src/**/*.{ts,tsx}")
					.filter((file) => {
						return file.match(/src\/hooks\/use[A-Z][a-zA-Z]*\.ts/)
							? file
							: null;
					})
					.map((file) => {
						return [
							// This remove `src/` as well as the file extension from each
							// file, so e.g. src/nested/foo.js becomes nested/foo
							path.relative(
								"src",
								file.slice(0, file.length - path.extname(file).length),
							),
							// This expands the relative paths to absolute paths, so e.g.
							// src/nested/foo becomes /project/src/nested/foo.js
							fileURLToPath(new URL(file, import.meta.url)),
						];
					}),
			);

	return {
		build: {
			copyPublicDir: false,
			lib: {
				entry: resolve(__dirname, "src/hooks/index.ts"),
				formats: ["es"],
				name: "UIHooks",
			},
			rollupOptions: {
				input: {
					index: resolve(__dirname, "src/hooks/index.ts"),
					...input,
				},
				treeshake: "smallest",
				external: externalDependencies,
				output: {
					compact: true,
					minifyInternalExports: false,
					assetFileNames: "style[extname]",
					entryFileNames: "[name].js",
					chunkFileNames: "chunks/[name].[hash].js",
					banner: (module) => {
						if (module?.facadeModuleId?.endsWith("src/hooks/index.ts")) {
							return banner;
						}
					},
				},
			},
		},
		esbuild: {
			supported: {
				"top-level-await": true,
			},
		},
		plugins: [],
	};
});
