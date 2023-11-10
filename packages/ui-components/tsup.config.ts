import { defineConfig } from "tsup";

export default defineConfig({
	format: "esm",
	entry: {
		components: "src/components/index.ts",
		common: "src/common/index.d.ts",
	},
	dts: {
		only: true,
	},
});
