import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import { ButtonIcon } from "@versini/ui-button/src/components";
import { IconSettings } from "@versini/ui-icons";

const meta: Meta<typeof ButtonIcon> = {
	parameters: {
		layout: "centered",
	},
	title: "Components/ButtonIcon",
	component: ButtonIcon,
	args: { onClick: fn() },
};

export default meta;
export const Basic = (args: React.ComponentProps<typeof ButtonIcon>) => (
	<ButtonIcon {...args}>
		<IconSettings />
	</ButtonIcon>
);
