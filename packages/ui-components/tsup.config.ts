import { defineConfig } from "tsup";

export default defineConfig({
	format: "esm",
	entry: ["src/components/index.ts", "src/utilities.ts"],
	dts: {
		only: true,
	},
});
