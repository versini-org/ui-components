import { defineConfig } from "tsup";

export default defineConfig({
	format: "esm",
	entry: ["src/hooks/index.ts"],
	dts: {
		only: true,
	},
});
