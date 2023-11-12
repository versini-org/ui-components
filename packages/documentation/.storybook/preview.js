/** @type { import('@storybook/react').Preview } */

import "../src/index.css";
import "@versini/ui-components/dist/style.css";

const preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
