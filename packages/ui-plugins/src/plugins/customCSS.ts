export const customCSS = {
	/**
	 * Text Input Styles
	 */
	'.av-text-input-wrapper label[aria-hidden="true"]': {
		/* move the label inline */
		transform: "translate(18px, 0) scale(1)",
		transformOrigin: "top left",
		transition: "var(--av-text-input-wrapper-transition, all 0.2s ease-out)",
	},
	/* move the label above the field (on focus) */
	[`.av-text-input:focus + label[aria-hidden="true"],
	  .av-text-input:not(:placeholder-shown) + label[aria-hidden="true"]`]: {
		transform: "translate(18px, var(--av-text-input-label, -37px)) scale(0.75)",
	},
	/* move the helper text below the field */
	".av-text-input-helper-text": {
		transform:
			"translate(12px, var(--av-text-input-helper-text, 43px)) scale(0.75)",
		transformOrigin: "top left",
	},

	/**
	 * Text Area Styles
	 */
	[`.av-text-area-wrapper label[aria-hidden="true"]`]: {
		/* move the label inline */
		transform: "translate(18px, 0) scale(1)",
		transformOrigin: "top left",
		transition: "var(--av-text-area-wrapper-transition, all 0.2s ease-out)",
	},
	'.av-text-area:focus + label[aria-hidden="true"],\n\t.av-text-area:not(:placeholder-shown) + label[aria-hidden="true"]':
		{
			transform:
				"translate(18px, var(--av-text-area-label, -25px)) scale(0.75)",
		},
	".av-text-area-helper-text": {
		transform:
			"translate(18px, var(--av-text-area-helper-text, 32px))\n\t\t\tscale(0.75)",
		transformOrigin: "top left",
	},
	".av-text-area__control--right": {
		right: "18px",
	},

	/**
	 * Spinner Styles
	 */
	"@keyframes blink": { "50%": { fill: "transparent" } },
	".av-spinner__dot": { animation: "1s blink infinite" },
	".av-spinner__dot:nth-child(2)": { animationDelay: "250ms" },
	".av-spinner__dot:nth-child(3)": { animationDelay: "500ms" },
};
