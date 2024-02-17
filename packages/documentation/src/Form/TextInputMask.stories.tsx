import type { Story } from "@ladle/react";
import { TextInputMask } from "@versini/ui-components";

export default {
	title: "Form components/TextInputMask",
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

export const Basic: Story<any> = (args) => (
	<div className="min-h-10 p-11">
		<form noValidate>
			<div className="flex gap-2">
				<TextInputMask {...args} />
			</div>
		</form>
	</div>
);
