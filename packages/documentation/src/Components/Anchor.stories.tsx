import type { Story } from "@ladle/react";
import { Anchor } from "@versini/ui-components";

export default {
	title: "Components/Anchor",
	meta: {
		importName: "Anchor",
	},
	args: {
		fullWidth: false,
		mode: "system",
		focusMode: "system",
		raw: false,
		href: "https://example.com",
		noBorder: false,
		size: "small",
		noTruncate: false,
		noNewWindowIcon: false,
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
	},
};

export const Basic: Story<any> = (args) => (
	<div className="flex flex-wrap gap-2">
		<Anchor {...args}>Anchor as a button</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum dolor</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum dolor sit amet</Anchor>
	</div>
);

export const NewWindow: Story<any> = (args) => (
	<div className="flex flex-wrap gap-2">
		<Anchor {...args}>Anchor as a button</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum dolor</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum dolor sit amet</Anchor>
	</div>
);
NewWindow.args = {
	target: "_blank",
};

export const Truncate: Story<any> = (args) => (
	<div className="flex flex-wrap gap-2">
		<Anchor {...args}>Anchor as a button</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum dolor</Anchor>
		<Anchor {...args}>Anchor as a button lorem ipsum dolor sit amet</Anchor>
	</div>
);

Truncate.args = {
	className: "w-44 sm:w-52",
};
