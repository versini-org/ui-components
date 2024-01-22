export const customCSS = {
	[`.av-text-input-wrapper label[aria-hidden="true"],
		.av-text-area-wrapper label[aria-hidden="true"]`]: {
		/* move the label inline */
		transform: "translate(18px, 0) scale(1)",
		transformOrigin: "top left",
		transition: "var(--av-text-area-wrapper-transition, all 0.2s ease-out)",
	},
	'.av-text-input:focus + label[aria-hidden="true"],\n\t.av-text-input:not(:placeholder-shown) + label[aria-hidden="true"],\n\t.av-text-area:focus + label[aria-hidden="true"],\n\t.av-text-area:not(:placeholder-shown) + label[aria-hidden="true"]':
		{
			transform:
				"translate(18px, var(--av-text-area-label, -25px)) scale(0.75)",
		},

	'.av-text-input-simple:focus + label[aria-hidden="true"],\n\t.av-text-input-simple:not(:placeholder-shown) + label[aria-hidden="true"]':
		{
			transform:
				"translate(18px, var(--av-text-area-label, -12px)) scale(0.75)",
		},

	".av-text-input-helper-text,\n\t.av-text-area-helper-text": {
		transform:
			"translate(18px, var(--av-text-area-helper-text, 32px))\n\t\t\tscale(0.75)",
		transformOrigin: "top left",
	},
	".av-text-input__control--right,\n\t.av-text-area__control--right": {
		right: "18px",
	},
	"@keyframes blink": { "50%": { fill: "transparent" } },
	".av-spinner__dot": { animation: "1s blink infinite" },
	".av-spinner__dot:nth-child(2)": { animationDelay: "250ms" },
	".av-spinner__dot:nth-child(3)": { animationDelay: "500ms" },
};
