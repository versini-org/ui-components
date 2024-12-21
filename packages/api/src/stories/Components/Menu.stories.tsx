import type { Meta, StoryObj } from "@storybook/react";

import "@versini/ui-menu/dist/style.css";
import { Button, ButtonIcon } from "@versini/ui-button";
import {
	IconChart,
	IconHistory,
	IconInfo,
	IconProfile,
	IconSettings,
} from "@versini/ui-icons";

import { Menu, MenuItem } from "../../../../ui-menu/src/components";
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
			<Button size="small" noBorder spacing={{ r: 2 }}>
				Button
			</Button>
			<Menu
				{...args}
				trigger={
					<ButtonIcon>
						<IconSettings />
					</ButtonIcon>
				}
				spacing={{ r: 2 }}
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
			<Button size="small" spacing={{ r: 2 }}>
				Button
			</Button>
			<Menu
				{...args}
				trigger={
					<ButtonIcon>
						<IconSettings />
					</ButtonIcon>
				}
				spacing={{ r: 2 }}
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
