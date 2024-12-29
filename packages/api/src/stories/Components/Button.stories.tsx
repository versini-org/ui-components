import type { Meta, StoryObj } from "@storybook/react";

import "@versini/ui-button/dist/style.css";
import { Button } from "../../../../ui-button/src/components";
import { commonControlsSetup } from "../../helpers/constants";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
	parameters: {
		layout: "centered",
		docs: { ...commonControlsSetup.parameters },
	},
	title: "Components/Button",

	component: Button,
	argTypes: {
		children: {
			control: { disable: true },
		},
		onClick: {
			control: { disable: true },
		},
	},
};

export default meta;

export const Basic: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<Button {...args}>Button lorem ipsum</Button>
			<Button {...args}>Button lorem ipsum dolor</Button>
			<Button {...args}>Button lorem ipsum dolor sit amet</Button>
		</div>
	),
};

export const Truncate: Story = {
	...commonControlsSetup,
	args: { className: "w-44 sm:w-52" },
	render: (args) => {
		return (
			<>
				<div className="flex flex-wrap gap-2">
					<Button {...args}>Button lorem ipsum</Button>
					<Button {...args}>Button lorem ipsum dolor</Button>
					<Button {...args}>Button lorem ipsum dolor sit amet</Button>
				</div>
				<div className="pt-4 text-copy-dark">
					<p>
						For text to truncate, you need to limit the width of the buttons.
					</p>
					<p>This can be done by using Tailwind width classes, for example</p>
					<code className="prose-dark">className={args.className}</code>
				</div>
			</>
		);
	},
};

export const Square: Story = {
	...commonControlsSetup,
	args: { radius: "small" },
	render: (args) => (
		<div className="flex flex-wrap gap-2">
			<Button {...args}>1</Button>
			<Button {...args}>2</Button>
			<Button {...args}>3</Button>
			<Button {...args}>...</Button>
			<Button {...args}>101</Button>
		</div>
	),
};
