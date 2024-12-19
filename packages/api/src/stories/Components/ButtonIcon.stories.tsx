import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import "@versini/ui-button/dist/style.css";
import { ButtonIcon } from "../../../../ui-button/src/components";

import {
	IconEdit,
	IconNext,
	IconPrevious,
	IconSettings,
} from "@versini/ui-icons";
import { commonControlsSetup } from "../../helpers/constants";

type Story = StoryObj<typeof ButtonIcon>;

const meta: Meta<typeof ButtonIcon> = {
	parameters: {
		layout: "centered",
		docs: { ...commonControlsSetup.parameters },
	},
	title: "Components/ButtonIcon",

	component: ButtonIcon,
	args: {
		onClick: fn(),
		align: "center",
		disabled: false,
		focusMode: "system",
		mode: "system",
		size: "medium",
		noBorder: false,
		raw: false,
		fullWidth: false,
		noInternalClick: false,
		noBackground: false,
	},
};

export default meta;
export const Basic: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<ButtonIcon {...args}>
				<IconSettings />
			</ButtonIcon>
			<ButtonIcon {...args}>
				<IconSettings />
			</ButtonIcon>
			<ButtonIcon {...args}>
				<IconEdit className="h-3 w-3" />
			</ButtonIcon>
			<ButtonIcon {...args}>
				<IconEdit />
			</ButtonIcon>
		</div>
	),
};

export const WithLabel: Story = {
	...commonControlsSetup,
	render: (args) => (
		<>
			<div className="flex flex-wrap gap-2">
				<ButtonIcon labelRight="Settings" {...args}>
					<IconSettings />
				</ButtonIcon>
				<ButtonIcon labelRight="Settings" {...args}>
					<IconSettings />
				</ButtonIcon>
				<ButtonIcon labelRight="Edit" {...args}>
					<IconEdit className="h-3 w-3" />
				</ButtonIcon>
				<ButtonIcon labelRight="Edit" {...args}>
					<IconEdit />
				</ButtonIcon>
			</div>
			<div className="mt-2 flex flex-wrap gap-2">
				<ButtonIcon labelLeft="Settings" {...args}>
					<IconSettings />
				</ButtonIcon>
				<ButtonIcon labelLeft="Settings" {...args}>
					<IconSettings />
				</ButtonIcon>
				<ButtonIcon labelLeft="Edit" {...args}>
					<IconEdit className="h-3 w-3" />
				</ButtonIcon>
				<ButtonIcon labelLeft="Edit" {...args}>
					<IconEdit />
				</ButtonIcon>
			</div>
			<div className="mt-2 flex flex-wrap gap-2">
				<ButtonIcon labelRight="Previous page" {...args}>
					<IconPrevious monotone />
				</ButtonIcon>
				<ButtonIcon labelLeft="Next page" {...args}>
					<IconNext monotone />
				</ButtonIcon>
			</div>
		</>
	),
};
