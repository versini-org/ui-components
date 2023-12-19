import type { Meta, StoryObj } from "@storybook/react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@versini/ui-components";

const meta: Meta<typeof Table> = {
	component: Table,
	parameters: {
		controls: {
			exclude: ["spacing"],
			sort: "requiredFirst",
		},
	},
	args: {
		kind: "dark",
		caption: "Dune",
		summary: "A table about Dune",
	},
	argTypes: {
		caption: {
			control: { type: "text" },
		},
		summary: {
			control: { type: "text" },
		},
		kind: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
	},
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Basic: Story = {
	render: function Render(args) {
		const data = [
			{ id: 1, character: "Paul Atreides", actor: "Timothée Chalamet" },
			{ id: 2, character: "Lady Jessica", actor: "Rebecca Ferguson" },
			{ id: 3, character: "Duncan Idaho", actor: "Jason Momoa" },
		];
		return (
			<div className="min-h-10 bg-slate-500 p-11">
				<div className="flex flex-wrap gap-2">
					<Table {...args}>
						<TableHead>
							<TableRow>
								<TableCell>Character</TableCell>
								<TableCell>Actor</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{data.map((row) => (
								<TableRow key={row.id}>
									<TableCell>{row.character}</TableCell>
									<TableCell>{row.actor}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		);
	},
};
