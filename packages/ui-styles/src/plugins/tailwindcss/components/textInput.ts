export default {
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
};
