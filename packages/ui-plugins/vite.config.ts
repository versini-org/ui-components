import { resolve } from "node:path";

export default {
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, "src/plugins/index.ts"),
			formats: ["es"],
			name: "UIPlugins",
		},
		rollupOptions: {
			input: {
				index: resolve(__dirname, "src/plugins/index.ts"),
			},
			treeshake: "smallest",
			output: {
				compact: true,
				minifyInternalExports: false,
				assetFileNames: "style[extname]",
				entryFileNames: "[name].js",
				chunkFileNames: "chunks/[name].[hash].js",
			},
		},
	},
	esbuild: {
		supported: {
			"top-level-await": true,
		},
	},
	plugins: [],
};
