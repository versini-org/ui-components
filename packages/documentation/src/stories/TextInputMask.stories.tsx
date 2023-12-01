import type { Meta, StoryObj } from "@storybook/react";
import { TextInputMask } from "@versini/ui-components";

const meta: Meta<typeof TextInputMask> = {
	component: TextInputMask,
	parameters: {
		controls: { exclude: ["spacing", "rightElement"], sort: "requiredFirst" },
	},
	args: {
		label: "Enter password",
		name: "password",
		disabled: false,
		helperText: "",
		raw: false,
		focusKind: "light",
		borderKind: "dark",
		errorKind: "light",
		error: false,
		inputClassName: "",
		className: "",
	},
	argTypes: {
		className: {
			control: "text",
		},
		inputClassName: {
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
		error: {
			control: "boolean",
		},
		focusKind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		borderKind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		errorKind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
	},
};

export default meta;

type Story = StoryObj<typeof TextInputMask>;

export const Basic: Story = {
	render: (args) => (
		<div className="min-h-10 bg-slate-500 p-11">
			<form noValidate>
				<div className="flex gap-2">
					<TextInputMask {...args} />
				</div>
			</form>
		</div>
	),
};
