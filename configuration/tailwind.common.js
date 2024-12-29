/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-styles";

export const commonTailwindConfigForComponent = (name) => {
	return twPlugin.merge(
		{
			content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
		},
		name,
	);
};
