import type { Meta, StoryObj } from "@storybook/react";
import {
	IconClose,
	IconCopied,
	IconCopy,
	IconDelete,
	IconDogInShield,
	IconEdit,
	IconRestore,
	IconSettings,
	IconUser,
} from "@versini/ui-components";

const meta: Meta<typeof IconDogInShield> = {
	component: IconDogInShield,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {},
	argTypes: {
		className: {
			control: "text",
		},
		fill: {
			control: "color",
		},
	},
};

export default meta;

type Story = StoryObj<typeof IconDogInShield>;

export const Basic: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<IconClose {...args} />
			<IconCopied {...args} />
			<IconCopy {...args} />
			<IconDelete {...args} />
			<IconDogInShield {...args} />
			<IconEdit {...args} />
			<IconRestore {...args} />
			<IconSettings {...args} />
			<IconUser {...args} />
		</div>
	),
};
