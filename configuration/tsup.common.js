import { defineConfig } from "tsup";

export const commonTsupConfig = defineConfig({
	format: "esm",
	entry: {
		index: "src/components/index.ts",
	},
	outDir: "dist",
	dts: {
		only: true,
	},
});
