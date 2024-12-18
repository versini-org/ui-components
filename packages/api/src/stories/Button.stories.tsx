import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import "@versini/ui-button/dist/style.css";
import { Button } from "../../../ui-button/src/components";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	parameters: {
		layout: "centered",
		docs: {
			controls: { exclude: ["spacing"] },
		},
	},
	title: "Components/Button",

	component: Button,
	args: { onClick: fn() },
};

export default meta;

export const Basic: Story = {
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<Button {...args}>Button lorem ipsum</Button>
			<Button {...args}>Button lorem ipsum dolor</Button>
			<Button {...args}>Button lorem ipsum dolor sit amet</Button>
		</div>
	),
};

export const Truncate: Story = {
	args: { className: "w-44 sm:w-52" },
	render: (args) => {
		return (
			<>
				<div className="flex flex-wrap gap-2">
					<Button {...args}>Button lorem ipsum</Button>
					<Button {...args}>Button lorem ipsum dolor</Button>
					<Button {...args}>Button lorem ipsum dolor sit amet</Button>
				</div>
				<div className="pt-4">
					<p>
						For text to truncate, you need to limit the width of the buttons.
					</p>
					<p>This can be done by using Tailwind width classes, for example</p>
					<code>className={args.className}</code>
				</div>
			</>
		);
	},
};
