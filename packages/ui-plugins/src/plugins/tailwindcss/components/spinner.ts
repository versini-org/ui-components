export default {
	"@keyframes blink": { "50%": { fill: "transparent" } },
	".av-spinner__dot": { animation: "1s blink infinite" },
	".av-spinner__dot:nth-child(2)": { animationDelay: "250ms" },
	".av-spinner__dot:nth-child(3)": { animationDelay: "500ms" },
};
