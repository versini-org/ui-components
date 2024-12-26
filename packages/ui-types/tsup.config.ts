import { defineConfig } from "tsup";

export const commonTsupConfig = defineConfig({
	format: "esm",
	entry: {
		index: "index.ts",
	},
	outDir: "dist",
	dts: {
		only: true,
	},
});
export default commonTsupConfig;
