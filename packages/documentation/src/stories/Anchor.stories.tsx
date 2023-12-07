import type { Meta, StoryObj } from "@storybook/react";
import { Anchor } from "@versini/ui-components";

const meta: Meta<typeof Anchor> = {
	component: Anchor,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		fullWidth: false,
		kind: "dark",
		focus: "light",
		raw: false,
		link: "https://www.google.com",
		noBorder: false,
		slim: false,
		size: "small",
		noTruncate: false,
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
		fullWidth: {
			control: "boolean",
		},
		raw: {
			control: "boolean",
		},
		slim: {
			control: "boolean",
		},
		size: {
			options: ["small", "medium", "large"],
			control: { type: "radio" },
		},
		maxLabelLength: {
			control: "number",
		},
		noTruncate: {
			control: "boolean",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Anchor>;

export const Basic: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<Anchor {...args}>Anchor as a button</Anchor>
			<Anchor {...args}>Anchor as a button lorem ipsum</Anchor>
			<Anchor {...args}>Anchor as a button lorem ipsum dolor</Anchor>
			<Anchor {...args}>Anchor as a button lorem ipsum dolor sit amet</Anchor>
		</div>
	),
};
