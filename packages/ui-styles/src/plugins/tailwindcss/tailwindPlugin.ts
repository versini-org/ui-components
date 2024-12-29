import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";
import type { Config, OptionalConfig } from "tailwindcss/types/config";

import spinnerCSS from "./components/spinner";
import textAreaCSS from "./components/textArea";
import textInputCSS from "./components/textInput";
import customTypography from "./typography";

export type TailwindConfig = {
	content: string[];
} & OptionalConfig;

/**
 * Adding custom paths to the TailwindCSS build. This is necessary
 * to include the custom components CSS in the final build. It looks
 * for packages under the "node_modules" directory.
 * The list of packages that need to be included is hardcoded here.
 * If a new package is using any TailwindCSS classes, it needs to be
 * added here.
 */
export const customContentPath = [
	"@versini/ui-anchor",
	"@versini/ui-bubble",
	"@versini/ui-button",
	"@versini/ui-card",
	"@versini/ui-footer",
	"@versini/ui-header",
	"@versini/ui-hooks",
	"@versini/ui-icons",
	"@versini/ui-liveregion",
	"@versini/ui-main",
	"@versini/ui-menu",
	"@versini/ui-modal",
	"@versini/ui-panel",
	"@versini/ui-pill",
	"@versini/ui-spinner",
	"@versini/ui-svgicon",
	"@versini/ui-system",
	"@versini/ui-table",
	"@versini/ui-textarea",
	"@versini/ui-textinput",
	"@versini/ui-toggle",
	"@versini/ui-togglegroup",
	"@versini/ui-truncate",

	// the following are legacy packages and should eventually be removed
	"@versini/ui-components",
	"@versini/ui-form",
].map(
	(pkg) => `${process.cwd()}/node_modules/${pkg}/dist/**/*.{js,ts,jsx,tsx}`,
);

/**
 * Adding custom components CSS to the TailwindCSS build, as well as
 * the custom typography. The custom typography is passed as a second
 * parameter to the plugin function, which is then used to extend the
 * default TailwindCSS theme.
 */
/* v8 ignore next 8 */
const customPlugins = [
	typography,
	plugin(function ({ addComponents }) {
		addComponents(textInputCSS);
		addComponents(textAreaCSS);
		addComponents(spinnerCSS);
	}, customTypography),
];

/**
 * The plugin "merge" function is used to merge the custom configuration with
 * the default and user TailwindCSS configuration.
 * It's to be used in the "tailwind.config.js" configuration file.
 *
 * @example

 * import { twPlugin } from "@versini/ui-styles";
 * export default twPlugin.merge({
 *   content: ["./src/*.{js,ts,jsx,tsx}"],
 * });
 */
export const twPlugin = {
	merge: (config: TailwindConfig) => {
		const content = customContentPath;
		const plugins = customPlugins;

		config.safelist = [...(config.safelist || [])];
		config.content = [...(config.content || []), ...content];
		config.plugins = [...(config.plugins || []), ...plugins];

		return config as Config;
	},
};
