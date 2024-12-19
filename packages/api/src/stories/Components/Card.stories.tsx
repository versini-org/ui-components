import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@versini/ui-card/src/components";
import { commonControlsSetup } from "../../helpers/constants";

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
	parameters: {
		layout: "centered",
		docs: { ...commonControlsSetup.parameters },
	},
	title: "Components/Card",

	component: Card,
	args: {
		compact: false,
		mode: "system",
		noBorder: false,
	},
};

export default meta;

export const Basic: Story = {
	...commonControlsSetup,
	args: {
		header: "Dune",
		footer: "Frank Herbert",
	},
	render: (args) => (
		<div className="min-h-10">
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
	...commonControlsSetup,
	args: {
		header: <h2 className="text-red-500">Dune</h2>,
		footer: <h4 className="text-xs text-slate-400">Frank Herbert</h4>,
	},
	render: (args) => (
		<div className="min-h-10">
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
