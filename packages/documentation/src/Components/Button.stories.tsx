import type { Story } from "@ladle/react";
import { Button } from "@versini/ui-button";

export default {
	title: "Components/Button",
	meta: {
		importName: "Button",
	},
	args: {
		disabled: false,
		fullWidth: false,
		mode: "system",
		focusMode: "system",
		size: "medium",
		raw: false,
		noBorder: false,
		variant: "primary",
		noTruncate: false,
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
			options: ["small", "medium", "large"],
			control: { type: "radio" },
		},
		variant: {
			options: ["primary", "secondary", "danger"],
			control: { type: "radio" },
		},
	},
};

export const Basic: Story<any> = (args) => {
	return (
		<>
			<div className="flex flex-wrap gap-2">
				<Button {...args}>Button lorem ipsum</Button>
				<Button {...args}>Button lorem ipsum dolor</Button>
				<Button {...args}>Button lorem ipsum dolor sit amet</Button>
			</div>

			<p>
				The following row is having the <code>variant</code> prop hard-coded:
			</p>
			<div className="flex flex-wrap gap-2">
				<Button {...args} variant="primary">
					Button
				</Button>
				<Button {...args} variant="secondary">
					Button
				</Button>
				<Button {...args} variant="danger">
					Button
				</Button>
			</div>
		</>
	);
};

export const Truncate: Story<any> = (args) => {
	return (
		<>
			<div className="flex flex-wrap gap-2">
				<Button {...args}>Button lorem ipsum</Button>
				<Button {...args}>Button lorem ipsum dolor</Button>
				<Button {...args}>Button lorem ipsum dolor sit amet</Button>
			</div>

			<p>
				The following row is having the <code>variant</code> prop hard-coded:
			</p>
			<div className="flex flex-wrap gap-2">
				<Button {...args} variant="primary">
					Button lorem ipsum
				</Button>
				<Button {...args} variant="secondary">
					Button lorem ipsum dolor
				</Button>
				<Button {...args} variant="danger">
					Button lorem ipsum dolor sit amet
				</Button>
			</div>
		</>
	);
};

Truncate.args = {
	className: "w-44 sm:w-52",
};
