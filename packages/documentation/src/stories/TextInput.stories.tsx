import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "@versini/ui-components";

const meta: Meta<typeof TextInput> = {
	component: TextInput,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		type: "text",
		label: "Username",
		name: "username",
		disabled: false,
		helperText: "",
	},
	argTypes: {
		className: {
			control: "text",
		},
		labelId: {
			control: "text",
		},
		id: {
			control: "text",
		},
		helperText: {
			control: "text",
		},
	},
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
	render: (args) => (
		<form noValidate>
			<div className="flex gap-2">
				<TextInput {...args} />
			</div>
		</form>
	),
};

export const Error: Story = {
	render: (args) => (
		<form noValidate>
			<div className="flex gap-2">
				<TextInput {...args} error />
			</div>
		</form>
	),
};
