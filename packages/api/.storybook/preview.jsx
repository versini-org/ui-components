/** @type { import('@storybook/react').Preview } */
import "./styles.css";
import "@versini/ui-button/dist/style.css";
import "@versini/ui-pill/dist/style.css";

const preview = {
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
					["Bubble", "Button", "ButtonIcon", "buttonLink"],
				],
			},
		},

		controls: {
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
