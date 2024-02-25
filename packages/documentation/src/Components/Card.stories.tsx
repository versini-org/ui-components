import type { Story } from "@ladle/react";
import { Card } from "@versini/ui-components";

export default {
	title: "Components/Card",
	meta: {
		importName: "Card",
	},
	args: {
		noBackground: false,
	},
};

export const Basic: Story<any> = (args) => (
	<div className="min-h-10">
		<div className="flex flex-wrap gap-2">
			<Card {...args}>
				<p className="prose prose-light dark:prose-dark">
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
);

Basic.args = {
	header: "Dune",
	footer: "Frank Herbert",
};

export const Custom: Story<any> = (args) => (
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
);

Custom.args = {
	header: <h3 className="text-red-500">Dune</h3>,
	footer: <h4 className="text-xs text-slate-400">Frank Herbert</h4>,
};
