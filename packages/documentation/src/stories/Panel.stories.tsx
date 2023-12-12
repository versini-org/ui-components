import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "@versini/ui-components";

const meta: Meta<typeof Panel> = {
	component: Panel,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		open: false,
		title: "Panel Title",
		children: "Panel Content",
		borderKind: "light",
	},
	argTypes: {
		borderKind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Basic: Story = {
	args: {
		open: false,
		title: "Panel Title",
		children: "Panel Content",
	},
	/**
	 * Note for StoryBook: to avoid linting issues, it is recommended
	 * to use a function with a capitalized name. If you are not concerned
	 * with linting, you may use an arrow function.
	 */
	render: function Render(args) {
		const [{ open }, updateArgs] = useArgs();
		const onOpenChange = () => {
			updateArgs({ open: !open });
		};
		return <Panel open={open} onOpenChange={onOpenChange} {...args} />;
	},
};
