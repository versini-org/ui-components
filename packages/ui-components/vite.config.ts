/// <reference types="vitest" />

import { extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import fs from "fs-extra";
import { glob } from "glob";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

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
		lib: {
			entry: resolve(__dirname, "src/components/index.ts"),
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime"],
			input: Object.fromEntries(
				glob.sync("src/components/**/*.{ts,tsx}").map((file) => [
					// The name of the entry point
					// src/nested/foo.ts becomes nested/foo
					relative("src", file.slice(0, file.length - extname(file).length)),
					// The absolute path to the entry file
					// src/nested/foo.ts becomes /project/lib/nested/foo.ts
					fileURLToPath(new URL(file, import.meta.url)),
				]),
			),
			output: {
				assetFileNames: "assets/[name][extname]",
				entryFileNames: "[name].js",
			},
		},
	},
	esbuild: {
		supported: {
			"top-level-await": true,
		},
	},
	test: {
		globals: true,
		setupFiles: ["./vitest.setup.ts"],
		environment: "jsdom",
		coverage: {
			provider: "v8",
			lines: 55,
			functions: 30,
			branches: 100,
			statements: 55,
		},
	},
	define: {
		"import.meta.env.BUILDTIME": JSON.stringify(buildTime),
		"import.meta.env.BUILDVERSION": JSON.stringify(packageJson.version),
	},
	plugins: [
		dts({ include: ["src"], exclude: ["**/__tests__/**/*"] }),
		libInjectCss(),
	],
});
