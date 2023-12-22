import type { Meta, StoryObj } from "@storybook/react";
import {
	Button,
	IconBack,
	IconChart,
	IconHistory,
	IconInfo,
	IconProfile,
	IconSettings,
	Menu,
	MenuItem,
	MenuSeparator,
	Panel,
} from "@versini/ui-components";
import { useState } from "react";

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
			<div className="min-h-10 flex h-96 flex-wrap gap-2 bg-slate-900 p-11">
				<Button kind="light" size="small" noBorder>
					Button
				</Button>
				<Menu icon={<IconSettings />} {...args}>
					<MenuItem label="Profile" />
					<MenuItem label="Statistics" />
					<MenuItem label="History" />
					<MenuItem label="About" />
				</Menu>
				<Button kind="light" size="small" noBorder>
					Button
				</Button>
			</div>
		);
	},
};

export const WithIcons: Story = {
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

export const WithMessageBox: Story = {
	args: {},

	render: function Render(args) {
		const [showMessage, setShowMessage] = useState(false);
		const handleMenuLogout = () => {
			setShowMessage(!showMessage);
		};
		const onLogout = () => {
			// console.log("==> logout!");
			setShowMessage(!showMessage);
		};
		const onCancel = () => {
			// console.log("==> cancel logout...");
			setShowMessage(!showMessage);
		};
		return (
			<>
				<Panel
					kind="messagebox"
					open={showMessage}
					onOpenChange={setShowMessage}
					title="Log out"
					footer={
						<div className="flex flex-row-reverse gap-2">
							<Button onClick={onLogout}>Log out</Button>
							<Button kind="light" onClick={onCancel}>
								Cancel
							</Button>
						</div>
					}
				>
					<p>Are you sure you want to log out?</p>
				</Panel>
				<div className="min-h-10 flex flex-wrap gap-2 bg-slate-500 p-11">
					<Button size="small">Button</Button>
					<Menu icon={<IconSettings />} {...args}>
						<MenuItem label="Profile" icon={<IconProfile decorative />} />
						<MenuItem label="Statistics" icon={<IconChart decorative />} />
						<MenuItem label="History" icon={<IconHistory decorative />} />
						<MenuItem label="About" icon={<IconInfo decorative />} />
						<MenuSeparator />
						<MenuItem
							onClick={handleMenuLogout}
							label="Log out"
							icon={
								<div className="text-red-700">
									<IconBack decorative monotone />
								</div>
							}
						/>
					</Menu>
					<Button size="small">Button</Button>
				</div>
			</>
		);
	},
};
