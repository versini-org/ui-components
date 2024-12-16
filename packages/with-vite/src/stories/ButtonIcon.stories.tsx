import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import { IconSettings } from "@versini/ui-icons";
import { ButtonIcon } from "../../../ui-button/src/components";

const meta: Meta<typeof ButtonIcon> = {
	parameters: {
		layout: "centered",
	},
	title: "Components/ButtonIcon",
	component: ButtonIcon,
	args: { onClick: fn() },
};

export default meta;
export const Basic = (args: any) => (
	<ButtonIcon {...args}>
		<IconSettings />
	</ButtonIcon>
);
