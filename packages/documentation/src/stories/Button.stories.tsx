import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@versini/ui-components";

const meta: Meta<typeof Button> = {
	component: Button,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		disabled: false,
		fullWidth: false,
		kind: "dark",
		slim: false,
		type: "button",
		raw: false,
	},
	argTypes: {
		className: {
			control: "text",
		},
		kind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		slim: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
		fullWidth: {
			control: "boolean",
		},
		raw: {
			control: "boolean",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
	render: (args) => (
		<div className="flex gap-2">
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
		</div>
	),
};
