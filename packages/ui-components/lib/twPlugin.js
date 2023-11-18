import { converter } from "culori";

import { tokens } from "./tokens";

const parse = converter("rgb");

export const dynamicTwColors = () => {
	const result = {};
	Object.entries(tokens.colors).forEach(([name, color]) => {
		const rgb = parse(color);
		const variable = `--av-${name}`;
		const fallbackValue = `${rgb.r * 255} ${rgb.g * 255} ${rgb.b * 255}`;

		result[name] = `rgb(var(${variable}, ${fallbackValue}) / <alpha-value>)`;
	});

	return result;
};
