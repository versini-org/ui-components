import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../../../../packages/ui-button/src/components";

const meta: Meta<typeof Button> = {
	parameters: {
		layout: "centered",
	},
	title: "Components/Button",
	component: Button,
	args: { children: "Button", onClick: fn() },
};

export default meta;
export const Basic = (args: any) => (
	<div className="flex flex-wrap gap-2">
		<Button {...args}>Button lorem ipsum</Button>
		<Button {...args}>Button lorem ipsum dolor</Button>
		<Button {...args}>Button lorem ipsum dolor sit amet</Button>
	</div>
);

export const Truncate = (args: any) => {
	args.className = "w-44 sm:w-52";
	return (
		<div className="flex flex-wrap gap-2">
			<Button {...args}>Button lorem ipsum</Button>
			<Button {...args}>Button lorem ipsum dolor</Button>
			<Button {...args}>Button lorem ipsum dolor sit amet</Button>
		</div>
	);
};
