/** @type { import('@storybook/react').Preview } */
import "./styles.css";
import { Unstyled } from "@storybook/blocks";

const preview = {
	decorators: [
		(Story) => (
			<Unstyled>
				<div className="prose prose-dark dark:prose-lighter">
					<Story />
				</div>
			</Unstyled>
		),
	],
	parameters: {
		backgrounds: {
			values: [
				{ name: "Dark", value: "rgb(100 116 139)" },
				{ name: "Light", value: "#f0f0f0" },
			],
			default: "Light",
		},

		options: {
			storySort: {
				order: [
					"Getting Started",
					[
						"Overview",
						"Installation",
						"Configuration",
						"Usage",
						"Release Tags",
					],
					"Components",
					[
						"Bubble",
						"Button",
						"ButtonCopy",
						"ButtonIcon",
						"ButtonLink",
						"Card",
						"Menu",
						"Table",
					],
					"Form",
					["TextArea", "TextInput"],
				],
			},
		},

		controls: {
			disableSaveFromUI: true,
			// show description and default values in the individual stories (basic, etc.)
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
