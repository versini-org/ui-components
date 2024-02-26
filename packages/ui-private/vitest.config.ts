/// <reference types="vitest" />

import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default defineConfig((configEnv) =>
	mergeConfig(
		viteConfig(configEnv),
		defineConfig({
			test: {
				globals: true,
				setupFiles: ["./vitest.setup.ts"],
				environment: "happy-dom",
				coverage: {
					include: [
						"src/**/*.ts",
						"src/**/*.tsx",
						"!src/style.ts",
						"!src/components/Modal/**/*.*",
						"!src/components/index.ts",
						"!src/utilities.ts",
					],
					provider: "v8",
					thresholds: {
						statements: 100,
						branches: 100,
						functions: 100,
						lines: 100,
					},
				},
			},
		}),
	),
);
