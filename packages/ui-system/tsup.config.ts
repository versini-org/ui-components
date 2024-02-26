import { defineConfig } from "tsup";

export default defineConfig({
	format: "esm",
	entry: {
		index: "src/components/index.ts",
		utilities: "src/utilities.ts",
	},
	outDir: "dist",
	dts: {
		only: true,
	},
});
