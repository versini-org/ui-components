/** @type {import('tailwindcss').Config} */

import { twPlugin } from "./lib/tailwindPlugin";

export default twPlugin.merge({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
});
