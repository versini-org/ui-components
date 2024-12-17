import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "@versini/ui-button/src/components";

const meta: Meta<typeof Button> = {
	parameters: {
		layout: "centered",
	},
	title: "Components/Button",
	component: Button,
	args: { children: "Button", onClick: fn() },
};

export default meta;
export const Basic = (args: React.ComponentProps<typeof Button>) => (
	<div className="flex flex-wrap gap-2">
		<Button {...args}>Button lorem ipsum</Button>
		<Button {...args}>Button lorem ipsum dolor</Button>
		<Button {...args}>Button lorem ipsum dolor sit amet</Button>
	</div>
);

export const Truncate = (args: React.ComponentProps<typeof Button>) => {
	args.className = "w-44 sm:w-52";
	return (
		<>
			<p>For text to truncate, you need to limit the width of the buttons.</p>
			<p>This can be done by using Tailwind width classes, for example</p>
			<code>className={args.className}</code>

			<div className="flex flex-wrap gap-2">
				<Button {...args}>Button lorem ipsum</Button>
				<Button {...args}>Button lorem ipsum dolor</Button>
				<Button {...args}>Button lorem ipsum dolor sit amet</Button>
			</div>
		</>
	);
};
