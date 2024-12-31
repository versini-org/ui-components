import type { Meta, StoryObj } from "@storybook/react";

import "@versini/ui-textarea/dist/style.css";
import { Button, ButtonIcon } from "@versini/ui-button";
import { IconAdd } from "@versini/ui-icons";
import { TextArea } from "../../../../ui-textarea/src/components";
import { commonControlsSetup } from "../../helpers/constants";

type Story = StoryObj<typeof TextArea>;

const meta: Meta<typeof TextArea> = {
	parameters: {
		layout: "centered",
		docs: { ...commonControlsSetup.parameters },
	},
	title: "Form/TextArea",

	component: TextArea,
};

export default meta;

export const Basic: Story = {
	...commonControlsSetup,
	args: {
		label: "Type your question here",
		name: "dude",
		helperText: "Powered by the Sun",
	},
	render: (args) => (
		<form noValidate>
			<div className="flex flex-wrap gap-2 min-w-96">
				<TextArea {...args} />
			</div>
		</form>
	),
};

export const RightElement: Story = {
	...commonControlsSetup,
	args: {
		label: "Type your question here",
		name: "dude",
		helperText: "Powered by the Sun",
		rightElement: (
			<Button type="button" mode="light" noBorder>
				Send
			</Button>
		),
	},
	render: (args) => (
		<form noValidate>
			<div className="flex flex-wrap gap-2 min-w-96">
				<TextArea {...args} />
			</div>
		</form>
	),
};

export const LeftElement: Story = {
	...commonControlsSetup,
	args: {
		label: "Type your question here",
		name: "dude",
		helperText: "Powered by the Sun",
		leftElement: (
			<ButtonIcon type="button" labelLeft="Add" mode="light" noBorder>
				<IconAdd />
			</ButtonIcon>
		),
	},
	render: (args) => (
		<form noValidate>
			<div className="flex flex-wrap gap-2 min-w-96">
				<TextArea {...args} />
			</div>
		</form>
	),
};

export const LeftAndRightElements: Story = {
	...commonControlsSetup,
	args: {
		label: "Type your question here",
		name: "dude",
		helperText: "Powered by the Sun",
		rightElement: (
			<Button type="button" mode="light" noBorder>
				Send
			</Button>
		),
		leftElement: (
			<ButtonIcon type="button">
				<IconAdd />
			</ButtonIcon>
		),
	},
	render: (args) => (
		<form noValidate>
			<div className="flex flex-wrap gap-2 min-w-96">
				<TextArea {...args} />
			</div>
		</form>
	),
};
