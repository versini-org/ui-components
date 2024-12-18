import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import "@versini/ui-button/dist/style.css";
import { ButtonLink } from "../../../ui-button/src/components";

type Story = StoryObj<typeof ButtonLink>;

const meta: Meta<typeof ButtonLink> = {
	parameters: {
		layout: "centered",
		docs: {
			controls: { exclude: ["spacing"] },
		},
	},
	title: "Components/ButtonLink",

	component: ButtonLink,
	args: { onClick: fn() },
};

export default meta;

export const Basic: Story = {
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
	args: { target: "_blank" },
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
	args: { className: "w-44 sm:w-52" },
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
			<div className="pt-4">
				<p>For text to truncate, you need to limit the width of the buttons.</p>
				<p>This can be done by using Tailwind width classes, for example</p>
				<code>className={args.className}</code>
			</div>
		</>
	),
};
