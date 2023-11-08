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
				provider: "v8",
				lines: 100,
				functions: 100,
				branches: 100,
				statements: 100,
			},
		},
	}),
);
