import colors from "tailwindcss/colors";

const errorColorDark = "#d80000";
const errorColorLight = "#ff3f3f";

export const tokens = {
	colors: {
		/**
		 * Action tokens.
		 */
		"action-dark": colors.slate[900],
		"action-dark-hover": colors.slate[700],
		"action-dark-active": colors.slate[600],

		"action-light": colors.slate[500],
		"action-light-hover": colors.slate[600],
		"action-light-active": colors.slate[700],

		/**
		 * Surface tokens.
		 */
		"surface-dark": colors.slate[900],
		"surface-medium": colors.slate[500],
		"surface-light": colors.slate[300],
		"surface-lighter": colors.slate[200],

		/**
		 * Typography tokens.
		 */
		"copy-dark": colors.slate[900],
		"copy-dark-hover": colors.slate[900],
		"copy-dark-active": colors.slate[900],

		"copy-medium": colors.slate[400],
		"copy-medium-hover": colors.slate[400],
		"copy-medium-active": colors.slate[400],

		"copy-light": colors.slate[200],
		"copy-light-hover": colors.slate[200],
		"copy-light-active": colors.slate[400],

		"copy-error-dark": errorColorDark,
		"copy-error-light": errorColorLight,

		/**
		 * Border tokens.
		 */
		"border-dark": colors.slate[900],
		"border-medium": colors.slate[400],
		"border-light": colors.slate[300],
		"border-white": "#ffffff",
		"border-error-dark": errorColorDark,
		"border-error-light": errorColorLight,

		/**
		 * Focus tokens.
		 */
		"focus-dark": colors.slate[900],
		"focus-light": colors.slate[300],
		"focus-error-dark": errorColorDark,
		"focus-error-light": errorColorLight,
	},
};
