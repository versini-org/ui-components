/// <reference types="vitest" />

import { resolve } from "node:path";

import fs from "fs-extra";
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
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, "src/components/index.ts"),
			formats: ["es"],
			name: "UIComponents",
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: [
				"@floating-ui/react",
				"@tailwindcss/typography",
				"react",
				"react/jsx-runtime",
				"tailwindcss",
			],

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
		dts({
			include: ["src"],
			exclude: ["**/__tests__/**/*"],
			rollupTypes: true,
		}),
		libInjectCss({
			entry: {
				index: "./src/components/index.ts",
				Button: "./src/components/Button/Button.tsx",
				ButtonIcon: "./src/components/Button/ButtonIcon.tsx",
				Footer: "./src/components/Footer/Footer.tsx",
			},
		}),
	],
});
