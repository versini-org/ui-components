import type { Story } from "@ladle/react";
import { Button } from "@versini/ui-components";

export default {
	title: "Components/Button",
	meta: {
		importName: "Button",
	},
};

export const Basic: Story<any> = (args) => {
	return (
		<div className="flex flex-wrap gap-2">
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button> <Button {...args}>Button</Button>
		</div>
	);
};

Basic.args = {
	disabled: false,
	fullWidth: false,
	mode: "system",
	focus: "system",
	slim: false,
	size: "medium",
	raw: false,
	noBorder: false,
};
Basic.argTypes = {
	mode: {
		options: ["dark", "light", "system", "alt-system"],
		control: { type: "radio" },
	},
	focus: {
		options: ["dark", "light", "system", "alt-system"],
		control: { type: "radio" },
	},
	size: {
		options: ["small", "medium", "large"],
		control: { type: "radio" },
	},
};
