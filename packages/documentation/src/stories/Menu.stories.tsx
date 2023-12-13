import type { Meta, StoryObj } from "@storybook/react";
import {
	Button,
	ButtonIcon,
	IconSettings,
	Menu,
	MenuItem,
} from "@versini/ui-components";

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
			<div className="min-h-10 flex flex-wrap gap-2 bg-slate-500 p-11">
				<Button size="small">Button</Button>
				<Menu icon={<IconSettings />} {...args}>
					<MenuItem label="Profile" />
					<MenuItem label="Chat details" disabled />
					<MenuItem label="History" />
					<MenuItem label="About" />
				</Menu>
				<Button size="small">Button</Button>
			</div>
		);
	},
};
