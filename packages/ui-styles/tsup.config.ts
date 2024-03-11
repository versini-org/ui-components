import { defineConfig } from "tsup";

export default defineConfig({
	format: "esm",
	entry: ["src/plugins/index.ts"],
	dts: {
		only: true,
	},
});
