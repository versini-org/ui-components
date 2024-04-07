import colors from "tailwindcss/colors";

const errorColorLight = "#ff3f3f";

export default {
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

		"action-danger-dark": colors.red[900],
		"action-danger-dark-hover": colors.red[700],
		"action-danger-dark-active": colors.red[600],

		"action-danger-light": colors.red[600],
		"action-danger-light-hover": colors.red[700],
		"action-danger-light-active": colors.red[800],

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

		"copy-error-dark": colors.red[700],
		"copy-error-light": colors.red[500],

		"copy-information": colors.violet[800],
		"copy-success": colors.green[800],
		"copy-warning": colors.orange[800],
		"copy-error": colors.red[800],
		"copy-accent": "#a9b9ad",
		"copy-accent-dark": "#cde8d4",

		/**
		 * Border tokens.
		 */
		"border-dark": colors.slate[900],
		"border-medium": colors.slate[400],
		"border-light": colors.slate[300],
		"border-accent": "#a9b9ad",

		"border-danger-dark": colors.red[900],
		"border-danger-medium": colors.red[400],
		"border-danger-light": colors.red[300],

		"border-white": "#ffffff",
		"border-error-dark": colors.red[700],
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
		"focus-error-dark": colors.red[700],
		"focus-error-light": errorColorLight,

		/**
		 * Table tokens
		 */
		"table-head-dark": colors.gray[950],
		"table-dark": colors.gray[700],
		"table-dark-odd": colors.gray[800],
		"table-dark-even": colors.gray[900],

		"table-head-light": colors.gray[100],
		"table-light": colors.gray[100],
		"table-light-odd": colors.gray[200],
		"table-light-even": colors.gray[300],
	},
};
