import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "@versini/ui-components";

const meta: Meta<typeof TextInput> = {
	component: TextInput,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		type: "text",
		label: "Type your question here",
		name: "username",
		disabled: false,
		helperText: "",
		raw: false,
		kind: "dark",
		focus: "light",
		border: "dark",
		fullWidth: false,
		error: false,
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
		raw: {
			control: "boolean",
		},
		fullWidth: {
			control: "boolean",
		},
		error: {
			control: "boolean",
		},
		kind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		focus: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		border: {
			options: ["dark", "light"],
			control: { type: "radio" },
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
