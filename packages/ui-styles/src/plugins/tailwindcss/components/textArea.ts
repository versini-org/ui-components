export default {
	'.av-text-area-wrapper label[aria-hidden="true"]': {
		/* move the label inline */
		transform: "translate(18px, 0) scale(1)",
		transformOrigin: "top left",
		transition: "var(--av-text-area-wrapper-transition, all 0.2s ease-out)",
	},
	/* move the label above the field (on focus) */
	[`.av-text-area:focus + label[aria-hidden="true"],
	.av-text-area:not(:placeholder-shown) + label[aria-hidden="true"]`]: {
		transform: "translate(18px, var(--av-text-area-label, -25px)) scale(0.75)",
	},
	/* move the helper text below the field */
	".av-text-area-helper-text": {
		transform:
			"translate(12px, var(--av-text-area-helper-text, 32px)) scale(0.75)",
		transformOrigin: "top left",
	},
	".av-text-area__control--right": {
		right: "18px",
	},
};
