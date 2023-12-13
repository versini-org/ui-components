/// <reference types="vitest" />

import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			setupFiles: ["./vitest.setup.ts"],
			environment: "jsdom",
			coverage: {
				include: ["src/**/*.ts", "src/**/*.tsx"],
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
);
