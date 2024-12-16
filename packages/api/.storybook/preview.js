/** @type { import('@storybook/react').Preview } */
import "./styles.css";
import "@versini/ui-button/dist/style.css";
import "@versini/ui-pill/dist/style.css";

const preview = {
	parameters: {
		options: {
			storySort: {
				order: [
					"Overview",
					"Installation",
					"Configuration",
					"Usage",
					"Release Tags",
					"Components",
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
