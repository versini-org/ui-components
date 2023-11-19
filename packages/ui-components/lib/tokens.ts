import colors from "tailwindcss/colors";

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
		 * Typography tokens.
		 */
		"copy-dark": colors.slate[900],
		"copy-medium": colors.slate[400],
		"copy-light": colors.slate[200],

		/**
		 * Border tokens.
		 */
		"border-dark": colors.slate[900],
		"border-light": colors.slate[500],

		/**
		 * Focus tokens.
		 */
		"focus-dark": colors.slate[900],
		"focus-light": colors.slate[300],
	},
};
