import type { Meta, StoryObj } from "@storybook/react";
import { Button, TextArea } from "@versini/ui-components";
import { useEffect, useRef } from "react";

const meta: Meta<typeof TextArea> = {
	component: TextArea,
	parameters: {
		controls: { exclude: ["spacing", "rightElement"], sort: "requiredFirst" },
	},
	args: {
		label: "Type your question here",
		name: "username",
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
		<div className="min-h-10 bg-slate-500 p-11">
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
		<div className="min-h-10 bg-slate-500 p-11">
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
		const parentRef = useRef<HTMLDivElement>(null);
		useEffect(() => {
			const parentStyle = parentRef?.current?.style;
			parentStyle?.setProperty("--av-copy-light", "#403c3a");
			parentStyle?.setProperty("--av-copy-light-hover", "white");
			parentStyle?.setProperty("--av-copy-light-active", "white");
			parentStyle?.setProperty("--av-copy-medium", "#403c3a");
			parentStyle?.setProperty("--av-surface-dark", "white");
			parentStyle?.setProperty("--av-action-light", "#ffcd41");
			parentStyle?.setProperty("--av-action-light-hover", "#403c3a");
			parentStyle?.setProperty("--av-action-light-active", "black");
			parentStyle?.setProperty("--av-border-light", "#403c3a");
			parentStyle?.setProperty("--av-focus-light", "#3e7d0e");
		}, []);
		return (
			<div ref={parentRef} className="min-h-1 p-11">
				<form noValidate>
					<div className="flex gap-2">
						<TextArea {...args} />
					</div>
				</form>
			</div>
		);
	},
};
