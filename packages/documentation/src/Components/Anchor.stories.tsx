import type { Story } from "@ladle/react";
import { Anchor } from "@versini/ui-components";

export default {
	title: "Components/Anchor",
	meta: {
		importName: "Anchor",
	},
};

export const Basic: Story<any> = (args) => (
	<div className="flex flex-wrap">
		<Anchor {...args}>Anchor as a button</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum dolor</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum dolor sit amet</Anchor>
	</div>
);

Basic.args = {
	fullWidth: false,
	kind: "dark",
	focus: "light",
	raw: false,
	link: "https://www.google.com",
	noBorder: false,
	slim: false,
	size: "small",
	noTruncate: false,
	spacing: { r: 2, b: 2 },
};

Basic.argTypes = {
	kind: {
		options: ["dark", "light", "system"],
		control: { type: "radio" },
	},
	focus: {
		options: ["dark", "light"],
		control: { type: "radio" },
	},
	size: {
		options: ["small", "medium", "large"],
		control: { type: "radio" },
	},
};
