import type { Meta, StoryObj } from "@storybook/react";

import "@versini/ui-menu/dist/style.css";
import { Button, ButtonIcon } from "@versini/ui-button";
import {
	IconBack,
	IconChart,
	IconHistory,
	IconInfo,
	IconProfile,
	IconSettings,
} from "@versini/ui-icons";
import { Panel } from "@versini/ui-panel";

import { useState } from "react";
import {
	Menu,
	MenuItem,
	MenuSeparator,
} from "../../../../ui-menu/src/components";
import { commonControlsSetup } from "../../helpers/constants";

type Story = StoryObj<typeof Menu>;

const meta: Meta<typeof Menu> = {
	parameters: {
		layout: "centered",
		docs: { ...commonControlsSetup.parameters },
	},
	title: "Components/Menu",

	component: Menu,
	argTypes: {
		trigger: {
			control: { disable: true },
		},
		children: {
			control: { disable: true },
		},
	},
};

export default meta;

export const Basic: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className="flex h-56 flex-wrap p-11">
			<Button size="small" noBorder className="mr-2">
				Button
			</Button>
			<Menu
				{...args}
				trigger={
					<ButtonIcon className="mr-2">
						<IconSettings />
					</ButtonIcon>
				}
			>
				<MenuItem label="Profile" />
				<MenuItem label="Statistics" />
				<MenuItem label="History" />
				<MenuItem label="About" />
			</Menu>
			<Button size="small" noBorder>
				Button
			</Button>
		</div>
	),
};

export const WithIcons: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className="flex min-h-10 flex-wrap p-11">
			<Button size="small" className="mr-2">
				Button
			</Button>
			<Menu
				{...args}
				trigger={
					<ButtonIcon className="mr-2">
						<IconSettings />
					</ButtonIcon>
				}
			>
				<MenuItem label="Profile" icon={<IconProfile />} />
				<MenuItem label="Statistics" icon={<IconChart />} />
				<MenuItem label="History" icon={<IconHistory />} />
				<MenuItem label="About" icon={<IconInfo />} />
			</Menu>
			<Button size="small">Button</Button>
		</div>
	),
};

export const WithMessageBox: Story = {
	...commonControlsSetup,
	render: (args) => {
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
							<Button mode="light" onClick={onCancel}>
								Cancel
							</Button>
						</div>
					}
				>
					<p>Are you sure you want to log out?</p>
				</Panel>
				<div className="flex min-h-10 flex-wrap p-11">
					<Button size="small" className="mr-2">
						Button
					</Button>
					<Menu
						{...args}
						trigger={
							<ButtonIcon className="mr-2">
								<IconSettings />
							</ButtonIcon>
						}
					>
						<MenuItem label="Profile" icon={<IconProfile />} />
						<MenuItem label="Statistics" icon={<IconChart />} />
						<MenuItem label="History" icon={<IconHistory />} />
						<MenuItem label="About" icon={<IconInfo />} />
						<MenuSeparator />
						<MenuItem
							onClick={handleMenuLogout}
							label="Log out"
							icon={
								<div className="text-red-700">
									<IconBack monotone />
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
