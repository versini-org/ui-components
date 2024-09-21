import type { Story } from "@ladle/react";
import { Truncate } from "@versini/ui-truncate";

export default {
	title: "Components/Truncate",
	meta: {
		importName: "Truncate",
	},
	args: {
		length: 100,
		mode: "system",
		focusMode: "system",
	},
	argTypes: {
		length: {
			control: {
				type: "number",
			},
		},
		mode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
		focusMode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
	},
};

export const Basic: Story<any> = (args) => (
	<Truncate {...args}>
		In the year 10191, a spice called melange is the most valuable substance
		known in the universe, and its only source is the desert planet Arrakis.
		Paul Atreides, a brilliant and gifted young man born into a great destiny
		beyond his understanding, must travel to the most dangerous planet in the
		universe.
	</Truncate>
);
