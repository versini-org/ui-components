import type { Story } from "@ladle/react";
import { Button } from "@versini/ui-components";

export default {
	title: "Components/Button",
	meta: {
		importName: "Button",
	},
};

export const Basic: Story<any> = (args) => (
	<div className="flex flex-wrap">
		<Button {...args}>Button</Button>
		<Button {...args}>Button</Button>
		<Button {...args}>Button</Button>
		<Button {...args}>Button</Button>
	</div>
);

Basic.args = {
	disabled: false,
	fullWidth: false,
	kind: "dark",
	focus: "light",
	slim: false,
	size: "medium",
	raw: false,
	noBorder: false,
	spacing: { r: 2 },
};
Basic.argTypes = {
	kind: {
		options: ["dark", "light"],
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
