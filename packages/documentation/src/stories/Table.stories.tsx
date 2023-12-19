import type { Meta, StoryObj } from "@storybook/react";
import {
	ButtonIcon,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@versini/ui-components";
import { IconDelete } from "@versini/ui-components";
import { IconRestore } from "@versini/ui-components";

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
			<div className="min-h-10 bgg-slate-500 p-11">
				<div className="flex flex-wrap gap-2">
					<Table caption="Dune" {...args}>
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

export const WithAction: Story = {
	render: function Render(args) {
		const data = [
			{
				id: 1,
				timestamp: "10/16/2023 08:46 PM EDT",
				character: "Who plays Paul Atreides?",
				actor: "Timothée Chalamet",
			},
			{
				id: 2,
				timestamp: "10/16/2023 08:55 PM EDT",
				character: "What about Lady Jessica?",
				actor: "Rebecca Ferguson",
			},
			{
				id: 3,
				timestamp: "10/16/2023 08:59 PM EDT",
				character: "And Duncan Idaho?",
				actor: "Jason Momoa",
			},
		];

		return (
			<div className="min-h-10 bgg-slate-500 p-11">
				<div className="flex flex-wrap gap-2">
					<Table {...args}>
						<TableHead className="uppercase">
							<TableRow>
								<TableCell scope="col">Date</TableCell>
								<TableCell scope="col">First message</TableCell>
								<TableCell className="text-right" scope="col">
									Actions
								</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{data.map((row, idx) => {
								return (
									<TableRow key={`${row.id}-${idx}`}>
										<TableCell
											component="th"
											scope="row"
											className="text-gray-400"
										>
											{row.timestamp}
										</TableCell>
										<TableCell>{row.character}</TableCell>

										<TableCell>
											<div className="flex justify-end gap-2">
												<ButtonIcon
													noBorder
													label="Restore chat"
													kind="light"
													onClick={() => {}}
												>
													<IconRestore className="h-3 w-3" />
												</ButtonIcon>
												<ButtonIcon
													noBorder
													label="Delete chat"
													kind="light"
													onClick={() => {}}
												>
													<div className="text-red-400">
														<IconDelete className="h-3 w-3" />
													</div>
												</ButtonIcon>
											</div>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			</div>
		);
	},
};
