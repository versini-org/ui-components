import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ButtonIcon } from "@versini/ui-button/src/components";
import { IconSettings } from "@versini/ui-icons";

type Story = StoryObj<typeof ButtonIcon>;

const meta: Meta<typeof ButtonIcon> = {
	parameters: {
		layout: "centered",
		docs: {
			controls: { exclude: ["spacing"] },
		},
	},
	title: "Components/ButtonIcon",

	component: ButtonIcon,
	args: { onClick: fn() },
};

export default meta;
export const Basic: Story = {
	render: (args) => (
		<ButtonIcon {...args}>
			<IconSettings />
		</ButtonIcon>
	),
};
