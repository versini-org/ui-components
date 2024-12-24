import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";

import fs from "fs-extra";
import { glob } from "glob";
import { defineConfig } from "vite";

export const externalDependencies = [
	"@floating-ui/react",
	"@tailwindcss/typography",
	"clsx",
	"react",
	"react/jsx-runtime",
	"react-dom",
	"react-dom/server",
	"tailwindcss",
];

interface CommonViteConfigForComponentOptions {
	globalComponentName?: string;
	globalLibraryName?: string;
}

export const commonViteConfigForComponent = ({
	globalComponentName,
	globalLibraryName,
}: CommonViteConfigForComponentOptions = {}) => {
	const cwd = process.cwd();
	const packageJson = fs.readJSONSync(path.join(cwd, "package.json"));
	/** packageJson.name looks like `@versini/some-name`
	 * We need to extract `some-name` from it, and transform it
	 * to :
	 * - packageName = `__VERSINI_SOME_NAME__`
	 * - libraryName = `SomeName`
	 */
	const packageName =
		globalComponentName ||
		`__VERSINI_${packageJson.name
			.split("/")
			.pop()
			.replace(/-/g, "_")
			.toUpperCase()}__`;

	const libraryName =
		globalLibraryName ||
		packageJson.name
			.split("/")
			.pop()
			.replace(/-([a-z])/g, (g: string) => g[1].toUpperCase())
			.replace(/^[a-z]/, (g: string) => g.toUpperCase());

	const copyrightYear = new Date(Date.now()).getFullYear();
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
	const banner = `/*!
  ${packageJson.name} v${packageJson.version}
  © ${copyrightYear} gizmette.com
*/
try {
  if (!window.${packageName}) {
    window.${packageName} = {
      version: "${packageJson.version}",
			buildTime: "${buildTime}",
			homepage: "${packageJson.homepage}",
			license: "${packageJson.license}",
    };
  }
} catch (error) {
  // nothing to declare officer
}
`;
	return defineConfig(({ mode }) => {
		const isDev = mode === "development";

		/**
		 * Build a list of public files, which means all files in the
		 * src/components/ComponentName folders.
		 * Everything else will be moved to the chunk folder.
		 */
		const input = isDev
			? {}
			: Object.fromEntries(
					glob
						.sync(path.join(cwd, "src/**/*.{ts,tsx}"))
						.filter((file) => {
							return file.match(
								/src\/components\/[A-Z][a-zA-Z]*\/[A-Z][a-zA-Z]*\.tsx/,
							)
								? file
								: null;
						})
						.map((file) => {
							return [
								// This remove `src/` as well as the file extension from each
								// file, so e.g. src/nested/foo.js becomes nested/foo
								path.relative(
									path.join(cwd, "src"),
									file.slice(0, file.length - path.extname(file).length),
								),
								// This expands the relative paths to absolute paths, so e.g.
								// src/nested/foo becomes /project/src/nested/foo.js
								fileURLToPath(new URL(file, import.meta.url)),
							];
						}),
				);

		const rollupInput: { [key: string]: string } = {};
		if (fs.pathExistsSync(path.join(cwd, "src/components/index.ts"))) {
			rollupInput.index = path.join(cwd, "src/components/index.ts");
		}
		if (fs.pathExistsSync(path.join(cwd, "src/style.ts"))) {
			rollupInput.style = path.join(cwd, "src/style.ts");
		}

		return {
			build: {
				copyPublicDir: false,
				lib: {
					entry: path.join(cwd, "src/components/index.ts"),
					formats: ["es"],
					name: libraryName,
				},
				rollupOptions: {
					input: {
						...rollupInput,
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
							if (module?.facadeModuleId?.endsWith("src/components/index.ts")) {
								return banner;
							}
							return "";
						},
					},
				},
			},
			esbuild: {
				supported: {
					"top-level-await": true,
				},
			},
			plugins: [react()],
		};
	});
};
