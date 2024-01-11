import type { Meta, StoryObj } from "@storybook/react";
import { Button, TextArea, ThemeProvider } from "@versini/ui-components";

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
const meta: Meta<typeof TextArea> = {
	component: TextArea,
	parameters: {
		controls: { exclude: ["spacing", "rightElement"], sort: "requiredFirst" },
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
		className: {
			control: "text",
		},
		textAreaClassName: {
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

type Story = StoryObj<typeof TextArea>;

export const Basic: Story = {
	args: {
		helperText: "Powered by the sun",
	},
	render: (args) => (
		<div className="h-full bg-slate-500 p-11">
			<form noValidate>
				<div className="flex flex-wrap gap-2">
					<TextArea {...args} />
					<TextArea {...args} />
					<TextArea {...args} helperTextOnFocus />
				</div>
			</form>
		</div>
	),
};

export const RightElement: Story = {
	args: {
		rightElement: (
			<Button kind="light" noBorder>
				Send
			</Button>
		),
		helperText: "Powered by the sun",
	},
	render: (args) => (
		<div className="h-full bg-slate-500 p-11">
			<form noValidate>
				<div className="flex gap-2">
					<TextArea {...args} />
				</div>
			</form>
		</div>
	),
};

export const CustomTheme: Story = {
	args: {
		rightElement: <Button kind="light">Send</Button>,
		helperText: "Powered by the sun",
	},
	render: function Render(args) {
		return (
			<div className="h-full bg-slate-500 p-11">
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
	},
};
