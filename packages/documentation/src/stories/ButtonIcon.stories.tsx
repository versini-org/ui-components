import type { Meta, StoryObj } from "@storybook/react";
import { ButtonIcon, IconEdit, IconSettings } from "@versini/ui-components";

const meta: Meta<typeof ButtonIcon> = {
	component: ButtonIcon,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		disabled: false,
		fullWidth: false,
		kind: "dark",
		focus: "light",
		type: "button",
		raw: false,
		noBorder: false,
		size: "medium",
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
		disabled: {
			control: "boolean",
		},
		fullWidth: {
			control: "boolean",
		},
		raw: {
			control: "boolean",
		},
		size: {
			options: ["small", "medium", "large"],
			control: { type: "radio" },
		},
	},
};

export default meta;

type Story = StoryObj<typeof ButtonIcon>;

export const Basic: Story = {
	render: (args) => (
		<div className="flex flex-wrap">
			<ButtonIcon {...args}>
				<IconSettings />
			</ButtonIcon>
			<ButtonIcon {...args}>
				<IconSettings />
			</ButtonIcon>
			<ButtonIcon {...args}>
				<IconEdit className="h-3 w-3" />
			</ButtonIcon>
			<ButtonIcon {...args}>
				<IconEdit />
			</ButtonIcon>
		</div>
	),
};

export const WithLabel: Story = {
	render: (args) => (
		<div className="flex flex-wrap">
			<ButtonIcon labelRight="Settings" {...args}>
				<IconSettings decorative />
			</ButtonIcon>
			<ButtonIcon labelRight="Settings" {...args}>
				<IconSettings decorative />
			</ButtonIcon>
			<ButtonIcon labelRight="Edit" {...args}>
				<IconEdit decorative className="h-3 w-3" />
			</ButtonIcon>
			<ButtonIcon labelRight="Edit" {...args}>
				<IconEdit decorative />
			</ButtonIcon>
		</div>
	),
};
