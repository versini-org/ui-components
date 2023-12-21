import type { Meta, StoryObj } from "@storybook/react";
import {
	Button,
	IconChart,
	IconHistory,
	IconInfo,
	IconProfile,
	IconSettings,
	Menu,
	MenuItem,
} from "@versini/ui-components";

const meta: Meta<typeof Menu> = {
	component: Menu,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		defaultPlacement: "bottom-start",
	},
	argTypes: {
		defaultPlacement: {
			control: "select",
			options: [
				"top-start",
				"top",
				"top-end",
				"right-start",
				"right",
				"right-end",
				"bottom-start",
				"bottom",
				"bottom-end",
				"left-start",
				"left",
				"left-end",
			],
		},
	},
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
					<MenuItem label="Profile" icon={<IconProfile decorative />} />
					<MenuItem label="Statistics" icon={<IconChart decorative />} />
					<MenuItem label="History" icon={<IconHistory decorative />} />
					<MenuItem label="About" icon={<IconInfo decorative />} />
				</Menu>
				<Button size="small">Button</Button>
			</div>
		);
	},
};
