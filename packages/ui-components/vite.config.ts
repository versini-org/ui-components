import { resolve } from "node:path";

import fs from "fs-extra";
import { defineConfig } from "vite";

import { externalDependencies } from "../../configuration/vite.common";

const packageJson = fs.readJSONSync("package.json");
const copyrightYear = new Date(Date.now()).getFullYear();
const buildTime = new Date()
	.toLocaleString("en-US", {
		timeZone: "America/New_York",
		timeZoneName: "short",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
	})
	.replace(/,/g, "");
const banner = `/*!
  ${packageJson.name} v${packageJson.version}
  © ${copyrightYear} gizmette.com
*/
try {
  if (!window.__VERSINI_UI_GLOBAL__) {
    window.__VERSINI_UI_GLOBAL__ = {
      version: "${packageJson.version}",
			buildTime: "${buildTime}",
			homepage: "${packageJson.homepage}",
			license: "${packageJson.license}",
    };
  }
} catch (error) {
  // nothing to declare officer
}
`;

export default defineConfig({
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, "src/components/index.ts"),
			formats: ["es"],
			name: "UIComponents",
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			input: {
				index: resolve(__dirname, "src/components/index.ts"),
			},
			treeshake: "smallest",
			external: externalDependencies,
			output: {
				preserveModules: true,
				preserveModulesRoot: "src",
				assetFileNames: "style[extname]",
				entryFileNames: "[name].js",

				banner: (module) => {
					if (module.facadeModuleId.endsWith("src/components/index.ts")) {
						return banner;
					}
				},
			},
		},
	},
	esbuild: {
		supported: {
			"top-level-await": true,
		},
	},
	define: {
		"import.meta.env.BUILDTIME": JSON.stringify(buildTime),
		"import.meta.env.BUILDVERSION": JSON.stringify(packageJson.version),
	},
	plugins: [],
});
