/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-plugins";

export default twPlugin.merge({
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
});
