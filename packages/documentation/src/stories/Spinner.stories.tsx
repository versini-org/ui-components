import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@versini/ui-components";

const meta: Meta<typeof Spinner> = {
	component: Spinner,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		kind: "dark",
	},
	argTypes: {
		kind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
	},
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
	render: (args) => (
		<div className="min-h-10 bg-slate-500 p-11">
			<div className="flex flex-wrap gap-2">
				<Spinner {...args} />
			</div>
		</div>
	),
};
