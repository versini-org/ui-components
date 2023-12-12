import type { Meta, StoryObj } from "@storybook/react";
import { IconSettings, Menu, MenuItem } from "@versini/ui-components";

const meta: Meta<typeof Menu> = {
	component: Menu,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {},
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
	args: {},

	render: function Render(args) {
		return (
			<Menu icon={<IconSettings />} {...args}>
				<MenuItem label="Profile" />
				<MenuItem label="Chat details" disabled />
				<MenuItem label="History" />
				<MenuItem label="About" />
			</Menu>
		);
	},
};
