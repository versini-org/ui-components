/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-components/dist/utilities";

export default twPlugin.merge({
	darkMode: "selector",
	content: ["./src/**/*.{js,ts,jsx,tsx}", "./.ladle/**/*.tsx"],
});
