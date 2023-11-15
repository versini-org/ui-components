import type { Meta, StoryObj } from "@storybook/react";
import { Main } from "@versini/ui-components";

const meta: Meta<typeof Main> = {
	component: Main,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: { raw: false },
	argTypes: {
		className: {
			control: "text",
		},
		raw: {
			control: "boolean",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Main>;

export const Basic: Story = {
	render: (args) => <Main {...args}>hello world </Main>,
};
