import type { Meta, StoryObj } from "@storybook/react";

import "@versini/ui-button/dist/style.css";
import { ButtonCopy } from "../../../../ui-button/src/components";
import { ButtonCopyTypes } from "../../../../ui-types/dist";
import { commonControlsSetup } from "../../helpers/constants";

type Story = StoryObj<typeof ButtonCopy>;

const meta: Meta<typeof ButtonCopy> = {
	parameters: {
		layout: "centered",
		docs: { ...commonControlsSetup.parameters },
	},
	title: "Components/ButtonCopy",

	component: ButtonCopy,
};

export default meta;

export const Basic: Story = {
	...commonControlsSetup,
	args: {
		copyToClipboard: "lorem ipsum string",
	},
	render: (args: ButtonCopyTypes.Props) => (
		<div className="flex flex-wrap gap-2">
			<ButtonCopy {...args} />
		</div>
	),
};

export const FunctionAsProp: Story = {
	...commonControlsSetup,
	args: {
		copyToClipboard: () => "lorem ipsum function",
	},
	render: (args: ButtonCopyTypes.Props) => (
		<div className="flex flex-wrap gap-2">
			<ButtonCopy {...args} />
		</div>
	),
};

export const WithLabel: Story = {
	...commonControlsSetup,
	args: {
		copyToClipboard: "lorem ipsum string",
	},
	render: (args: ButtonCopyTypes.Props) => (
		<div className="flex flex-wrap gap-2">
			<ButtonCopy {...args} labelLeft="copy code" />
			<ButtonCopy {...args} labelRight="copy code" />
		</div>
	),
};
