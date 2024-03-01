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
		"surface-darker": colors.slate[900],
		"surface-dark": colors.slate[700],
		"surface-medium": colors.slate[500],
		"surface-light": colors.slate[300],
		"surface-lighter": colors.slate[200],
		"surface-accent": "#0B93F6",
		"surface-information": colors.violet[200],
		"surface-success": colors.green[200],
		"surface-warning": colors.orange[200],
		"surface-error": colors.red[200],

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

		"copy-lighter": "#ffffff",
		"copy-lighter-hover": "#ffffff",
		"copy-lighter-active": "#ffffff",

		"copy-error-dark": errorColorDark,
		"copy-error-light": errorColorLight,

		"copy-information": colors.violet[800],
		"copy-success": colors.green[800],
		"copy-warning": colors.orange[800],
		"copy-error": colors.red[800],

		/**
		 * Border tokens.
		 */
		"border-dark": colors.slate[900],
		"border-medium": colors.slate[400],
		"border-light": colors.slate[300],

		"border-white": "#ffffff",
		"border-error-dark": errorColorDark,
		"border-error-light": errorColorLight,

		"border-information": colors.violet[400],
		"border-success": colors.green[400],
		"border-warning": colors.orange[400],
		"border-error": colors.red[400],

		/**
		 * Focus tokens.
		 */
		"focus-dark": colors.green[700],
		"focus-light": colors.green[300],
		"focus-error-dark": errorColorDark,
		"focus-error-light": errorColorLight,

		/**
		 * Table tokens
		 */
		"table-dark": colors.gray[700],
		"table-dark-odd": colors.gray[800],
		"table-dark-even": colors.gray[900],
		"table-light": colors.gray[100],
		"table-light-odd": colors.gray[200],
		"table-light-even": colors.gray[300],
	},
};
