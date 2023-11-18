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
				row1={
					<div>
						App Name v{import.meta.env.BUILDVERSION} -{" "}
						{import.meta.env.BUILDTIME}
					</div>
				}
				row2={<div>&copy; {new Date().getFullYear()} something something</div>}
			/>
		</div>
	),
};
