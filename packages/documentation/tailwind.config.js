/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-components/dist/utilities";

export default twPlugin.merge({
	content: ["./src/**/*.{js,ts,jsx,tsx}", ".storybook/**/*.{js,ts,jsx,tsx}"],
});
