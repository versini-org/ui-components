import colors from "tailwindcss/colors";

export const tokens = {
	colors: {
		/**
		 * Action tokens.
		 */
		"action-primary": colors.slate[900],
		"action-primary-hover": colors.slate[700],
		"action-primary-active": colors.slate[600],

		"action-secondary": colors.slate[500],
		"action-secondary-hover": colors.slate[600],
		"action-secondary-active": colors.slate[700],

		/**
		 * Typography tokens.
		 */
		"copy-dark": colors.slate[900],
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
