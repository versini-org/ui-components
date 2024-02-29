import type { Story } from "@ladle/react";
import { Button, TextArea } from "@versini/ui-components";
import { ThemeProvider } from "@versini/ui-system";

const customTheme = {
	"--av-copy-light": "#403c3a",
	"--av-copy-light-hover": "white",
	"--av-copy-light-active": "white",
	"--av-copy-medium": "#403c3a",

	"--av-surface-dark": "white",

	"--av-action-light": "#ffcd41",
	"--av-action-light-hover": "#403c3a",
	"--av-action-light-active": "black",

	"--av-border-light": "#403c3a",

	"--av-focus-light": "#3e7d0e",
};
export default {
	title: "Form components/TextArea",
	meta: {
		importName: "TextArea",
	},
	args: {
		label: "Type your question here",
		name: "dude",
		disabled: false,
		helperText: "",
		raw: false,
		focusKind: "light",
		borderKind: "dark",
		errorKind: "light",
		error: false,
		textAreaClassName: "",
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
	<div className="h-full">
		<form noValidate>
			<div className="flex flex-wrap gap-2">
				<TextArea {...args} />
				<TextArea {...args} />
				<TextArea {...args} helperTextOnFocus />
			</div>
		</form>
	</div>
);
Basic.args = {
	helperText: "Powered by the sun",
};

export const RightElement: Story<any> = (args) => (
	<div className="h-full">
		<form noValidate>
			<div className="flex gap-2">
				<TextArea {...args} />
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

export const CustomTheme: Story<any> = (args) => (
	<div className="h-full">
		<form noValidate>
			<div className="flex gap-2">
				<TextArea {...args} />
			</div>
		</form>

		<br />
		<ThemeProvider customTheme={customTheme}>
			<form noValidate>
				<div className="flex gap-2">
					<TextArea {...args} />
				</div>
			</form>
		</ThemeProvider>
	</div>
);
CustomTheme.args = {
	rightElement: (
		<Button mode="light" noBorder>
			Send
		</Button>
	),
	helperText: "Powered by the sun",
};
