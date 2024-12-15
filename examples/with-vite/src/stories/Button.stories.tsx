import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../../../../packages/ui-button/src/components";

const meta: Meta<typeof Button> = {
	parameters: {
		layout: "centered",
	},
	title: "Components/Button",
	component: Button,
	args: { children: "Button", onClick: fn() },
};

type Story = StoryObj<typeof Button>;

export default meta;
export const Basic: Story = {};
