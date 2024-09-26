import type { Story } from "@ladle/react";
import { Button } from "@versini/ui-button";
import { TextInput } from "@versini/ui-textinput";

export default {
	title: "Form components/TextInput",
	meta: {
		importName: "TextInput",
	},
	args: {
		type: "text",
		label: "Type your question here",
		name: "somebody",
		disabled: false,
		helperText: "",
		raw: false,
		focusMode: "system",
		error: false,
		inputClassName: "",
		className: "",
		mode: "system",
		labelHidden: false,
		size: "md",
	},
	argTypes: {
		mode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
		focusMode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
		size: {
			options: ["xs", "sm", "md", "lg", "xl"],
			control: { type: "radio" },
		},
	},
};

export const Basic: Story<any> = (args) => (
	<div className="min-h-10">
		<form noValidate>
			<div className="flex gap-2">
				<TextInput {...args} />
			</div>
		</form>
	</div>
);

export const RightElement: Story<any> = (args) => (
	<div className="min-h-10">
		<form noValidate>
			<div className="flex gap-2">
				<TextInput {...args} />
			</div>
		</form>
	</div>
);
RightElement.args = {
	rightElement: (
		<Button mode="light" noBorder>
			Send
		</Button>
	),
	helperText: "Powered by the sun",
};

export const AllSizes: Story<any> = (args) => (
	<div className="min-h-10">
		<form noValidate>
			<div className="h-28">
				<TextInput {...args} size="xs" defaultValue="xs" />
			</div>
			<div className="h-28">
				<TextInput {...args} size="sm" defaultValue="sm" />
			</div>
			<div className="h-28">
				<TextInput {...args} size="md" defaultValue="md" />
			</div>
			<div className="h-28">
				<TextInput {...args} size="lg" defaultValue="lg" />
			</div>
			<div className="h-28">
				<TextInput {...args} size="xl" defaultValue="xl" />
			</div>
		</form>
	</div>
);
AllSizes.args = {
	helperText: "Powered by the sun",
	label: "Pose your question here",
};
