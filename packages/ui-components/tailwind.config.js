/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-plugins";

export default twPlugin.merge({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
});
