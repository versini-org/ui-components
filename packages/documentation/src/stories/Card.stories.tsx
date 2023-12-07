import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@versini/ui-components";

const meta: Meta<typeof Card> = {
	component: Card,
	parameters: {
		controls: {
			exclude: ["spacing", "header", "footer"],
			sort: "requiredFirst",
		},
	},
	args: {
		noBackground: false,
	},
	argTypes: {
		className: {
			control: "text",
		},
		noBackground: {
			control: "boolean",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
	args: {
		header: "Dune",
		footer: "Frank Herbert",
	},
	render: (args) => (
		<div className="min-h-10 bg-slate-500 p-11">
			<div className="flex flex-wrap gap-2">
				<Card {...args}>
					<p>
						In the year 10191, a spice called melange is the most valuable
						substance known in the universe, and its only source is the desert
						planet Arrakis.
					</p>

					<p className="pt-4">
						Paul Atreides, a brilliant and gifted young man born into a great
						destiny beyond his understanding, must travel to the most dangerous
						planet in the universe.
					</p>
				</Card>
			</div>
		</div>
	),
};

export const Custom: Story = {
	args: {
		header: <h3 className="text-red-500">Dune</h3>,
		footer: <h4 className="text-xs text-slate-400">Frank Herbert</h4>,
	},
	render: (args) => (
		<div className="min-h-10 bg-slate-500 p-11">
			<div className="flex flex-wrap gap-2">
				<Card {...args}>
					<p>
						In the year 10191, a spice called melange is the most valuable
						substance known in the universe, and its only source is the desert
						planet Arrakis.
					</p>

					<p className="pt-4">
						Paul Atreides, a brilliant and gifted young man born into a great
						destiny beyond his understanding, must travel to the most dangerous
						planet in the universe.
					</p>
				</Card>
			</div>
		</div>
	),
};
