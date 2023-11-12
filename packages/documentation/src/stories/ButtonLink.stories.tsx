import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLink } from "@versini/ui-components";

const meta: Meta<typeof ButtonLink> = {
	component: ButtonLink,
	parameters: {
		controls: { exclude: ["spacing", "slim"], sort: "requiredFirst" },
	},
	args: {
		fullWidth: false,
		kind: "dark",
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
		fullWidth: {
			control: "boolean",
		},
		raw: {
			control: "boolean",
		},
	},
};

export default meta;

type Story = StoryObj<typeof ButtonLink>;

export const Basic: Story = {
	render: (args) => (
		<div className="flex gap-2">
			<ButtonLink {...args}>Button as a link</ButtonLink>
			<ButtonLink {...args}>Button as a link</ButtonLink>
			<ButtonLink {...args}>Button as a link</ButtonLink>
			<ButtonLink {...args}>Button as a link</ButtonLink>
		</div>
	),
};
