/** @type {import('tailwindcss').Config} */

import { twPlugin as componentsPlugin } from "@versini/ui-components/dist/utilities";
import { twPlugin as systemPlugin } from "@versini/ui-system/dist/utilities";

export default systemPlugin.merge(
	componentsPlugin.merge({
		// darkMode: "selector",
		content: ["./src/**/*.{js,ts,jsx,tsx}", "./.ladle/**/*.tsx"],
	}),
);
