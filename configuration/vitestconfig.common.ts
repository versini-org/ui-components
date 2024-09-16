/// <reference types="vitest" />

import path from "node:path";
import { defineConfig, mergeConfig } from "vitest/config";

export const commonVitestConfig = (viteConfig) => {
	return defineConfig((configEnv) =>
		mergeConfig(
			viteConfig(configEnv),
			defineConfig({
				test: {
					globals: true,
					setupFiles: [path.join(__dirname, "./vitest.setup.ts")],
					environment: "happy-dom",
					coverage: {
						include: ["src/**/*.ts", "src/**/*.tsx", "!src/style.ts"],
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
};
