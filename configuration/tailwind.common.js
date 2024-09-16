/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-styles";

export const commonTailwindConfigForComponent = () => {
	return twPlugin.merge({
		content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	});
};
