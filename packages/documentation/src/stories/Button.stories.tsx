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
		focus: "light",
		slim: false,
		size: "medium",
		type: "button",
		raw: false,
		noBorder: false,
		spacing: { r: 2 },
	},
	argTypes: {
		className: {
			control: "text",
		},
		kind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		focus: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		noBorder: {
			control: "boolean",
		},
		size: {
			options: ["small", "medium", "large"],
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
		<div className="flex flex-wrap">
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
		</div>
	),
};
