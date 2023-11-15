export const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export const makeVariable = ({ fallbackValue, name, shade, withVar }) => {
	const variable = `--${name}-${shade}`;
	const value = fallbackValue ? variable + ", " + fallbackValue : variable;
	return withVar ? `var(${value})` : variable;
};
