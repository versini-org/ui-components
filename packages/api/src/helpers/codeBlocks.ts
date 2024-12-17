export default {
	install: {
		language: "bash",
		code: `$ npm install --save @versini/ui-button
$ npm install --save @versini/ui-card

$ npm install --save-dev @versini/ui-styles`,
	},

	installReact: {
		language: "bash",
		code: `$ npm install --save react react-dom`,
	},

	config: {
		language: "jsx",
		code: `// tailwind.config.js

import { twPlugin } from "@versini/ui-styles";

export default twPlugin.merge({
  // this is an example, you can change the path to your files
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
});`,
	},

	usage: {
		language: "jsx",
		code: `// App.tsx

import { Button } from "@versini/ui-button";
import { Card } from "@versini/ui-card";

/**
 * Now that the required components are
 * available in the scope, you can use them
 * in your return method in JSX:
 */
function App() {
  return (
    <Card
		 mode="light"
      header="Welcome to UI Components"
      footer={
        <Button mode="light" focusMode="dark" noBorder>
          Hooray
        </Button>
      }
    >
      <p>Hello World</p>
    </Card>
  );
}`,
	},
};
