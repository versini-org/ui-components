import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import "@versini/ui-button/dist/style.css";
import { ButtonLink } from "../../../ui-button/src/components";
import { commonControlsSetup } from "../helpers/constants";

type Story = StoryObj<typeof ButtonLink>;

const meta: Meta<typeof ButtonLink> = {
	parameters: {
		layout: "centered",
		docs: { ...commonControlsSetup.parameters },
	},
	title: "Components/ButtonLink",

	component: ButtonLink,
	args: {
		onClick: fn(),
		disabled: false,
		noTruncate: false,
		variant: "primary",
		focusMode: "system",
		mode: "system",
		size: "small",
		noBorder: false,
		raw: false,
		fullWidth: false,
		noInternalClick: false,
		noNewWindowIcon: false,
		target: "_self",
	},
};

export default meta;

export const Basic: Story = {
	...commonControlsSetup,
	args: {
		href: "https://www.example.com",
	},
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<ButtonLink {...args}>Anchor as a button</ButtonLink>
			<ButtonLink {...args}>Anchor as a button lorem ipsum</ButtonLink>
			<ButtonLink {...args}>Anchor as a button lorem ipsum dolor</ButtonLink>
			<ButtonLink {...args}>
				Anchor as a button lorem ipsum dolor sit amet
			</ButtonLink>
		</div>
	),
};

export const NewWindow: Story = {
	...commonControlsSetup,
	args: { target: "_blank", href: "https://www.example.com" },
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<ButtonLink {...args}>Anchor as a button</ButtonLink>
			<ButtonLink {...args}>Anchor as a button lorem ipsum</ButtonLink>
			<ButtonLink {...args}>Anchor as a button lorem ipsum dolor</ButtonLink>
			<ButtonLink {...args}>
				Anchor as a button lorem ipsum dolor sit amet
			</ButtonLink>
		</div>
	),
};

export const Truncate: Story = {
	...commonControlsSetup,
	args: { className: "w-44 sm:w-52", href: "https://www.example.com" },
	render: (args) => (
		<>
			<div className="flex flex-wrap gap-2">
				<ButtonLink {...args}>Anchor as a button</ButtonLink>
				<ButtonLink {...args}>Anchor as a button lorem ipsum</ButtonLink>
				<ButtonLink {...args}>Anchor as a button lorem ipsum dolor</ButtonLink>
				<ButtonLink {...args}>
					Anchor as a button lorem ipsum dolor sit amet
				</ButtonLink>
			</div>
			<div className="pt-4 text-copy-dark">
				<p>For text to truncate, you need to limit the width of the buttons.</p>
				<p>This can be done by using Tailwind width classes, for example</p>
				<code className="prose-dark">className={args.className}</code>
			</div>
		</>
	),
};
