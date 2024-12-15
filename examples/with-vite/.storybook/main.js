/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: ["@storybook/addon-essentials", "@chromatic-com/storybook"],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: true,
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
