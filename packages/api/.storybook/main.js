/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		{
			name: "@storybook/addon-essentials",
		},
		"@storybook/addon-links",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			tsconfigPath: "./tsconfig.json",
			propFilter: (prop) => {
				const res =
					/@versini/.test(prop.parent?.fileName) ||
					!/node_modules/.test(prop.parent?.fileName);
				return prop.parent ? res : true;
			},
			shouldExtractLiteralValuesFromEnum: true,
			savePropValueAsString: true,
			shouldRemoveUndefinedFromOptional: true,
		},
	},
};
export default config;
