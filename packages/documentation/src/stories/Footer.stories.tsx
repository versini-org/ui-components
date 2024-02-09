import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@versini/ui-components";

const meta: Meta<typeof Footer> = {
	component: Footer,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		noPaddings: false,
		kind: "dark",
	},
	argTypes: {
		className: {
			control: "text",
		},
		kind: {
			control: "radio",
			options: ["dark", "light"],
		},
	},
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Basic: Story = {
	render: (args) => (
		<div className="grid">
			<Footer
				{...args}
				row1={<div>App Name v1.0.0</div>}
				row2={<div>something something</div>}
			/>
		</div>
	),
};
