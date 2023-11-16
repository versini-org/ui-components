import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@versini/ui-components";

const meta: Meta<typeof Button> = {
	component: Button,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		disabled: false,
		fullWidth: false,
		kind: "dark",
		slim: false,
		type: "button",
		raw: false,
	},
	argTypes: {
		className: {
			control: "text",
		},
		kind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		slim: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
		fullWidth: {
			control: "boolean",
		},
		raw: {
			control: "boolean",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
	render: (args) => (
		<div className="flex gap-2">
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
			<Button {...args}>Button</Button>
		</div>
	),
};

const defaultClass =
	"focus:ring-primary-300 rounded-full px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-0 sm:text-base";
export const Raw: Story = {
	render: () => (
		<>
			<div className="flex gap-2">
				<Button raw className={`${defaultClass} bg-primary-50`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-primary-200`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-primary-300`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-primary-400`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-primary-500`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-primary-600`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-primary-700`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-primary-800`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-primary-900`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-primary-950`}>
					Button
				</Button>
			</div>

			<div className="flex gap-2 py-1">
				<Button raw className={`${defaultClass} bg-slate-50`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-slate-200`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-slate-300`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-slate-400`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-slate-500`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-slate-600`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-slate-700`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-slate-800`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-slate-900`}>
					Button
				</Button>
				<Button raw className={`${defaultClass} bg-slate-950`}>
					Button
				</Button>
			</div>
		</>
	),
};
