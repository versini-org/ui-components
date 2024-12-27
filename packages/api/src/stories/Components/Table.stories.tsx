import type { Meta, StoryObj } from "@storybook/react";

import "@versini/ui-table/dist/style.css";
import { ButtonIcon } from "@versini/ui-button/src/components";
import { IconDelete, IconRestore } from "@versini/ui-icons";

import { useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableCellSort,
	TableCellSortDirections,
	TableFooter,
	TableHead,
	TableRow,
} from "../../../../ui-table/src/components";
import { commonControlsSetup } from "../../helpers/constants";
import data from "../../helpers/tableData";

type Story = StoryObj<typeof Table>;

const meta: Meta<typeof Table> = {
	parameters: {
		layout: "centered",
		docs: { ...commonControlsSetup.parameters },
	},
	title: "Components/Table",

	component: Table,
	argTypes: {},
};

export default meta;

export const Basic: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className="min-h-10 w-96">
			<div className="flex flex-wrap gap-2">
				<Table caption="Dune" {...args}>
					<TableHead>
						<TableRow>
							<TableCell>Character</TableCell>
							<TableCell>Actor</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{data.components.data.map((row) => (
							<TableRow key={row.id}>
								<TableCell>{row.character}</TableCell>
								<TableCell>{row.actor}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	),
};

export const WithAction: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className="min-h-10">
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
						{data.components.data.map((row, idx) => {
							return (
								<TableRow key={`${row.id}-${idx}`}>
									<TableCell component="th" scope="row">
										{row.timestamp}
									</TableCell>
									<TableCell>{row.character}</TableCell>

									<TableCell>
										<div className="flex justify-end gap-2">
											<ButtonIcon
												noBorder
												label="Restore chat"
												mode="light"
												focusMode="alt-system"
												onClick={() => {}}
											>
												<IconRestore className="h-3 w-3" />
											</ButtonIcon>
											<ButtonIcon
												noBorder
												label="Delete chat"
												mode="light"
												focusMode="alt-system"
												onClick={() => {}}
											>
												<div className="text-red-400">
													<IconDelete className="h-3 w-3" monotone />
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
	),
};

export const Sticky: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className="min-h-10">
			<div className="flex flex-wrap gap-2">
				<Table {...args}>
					<TableHead className="uppercase">
						<TableRow>
							<TableCell scope="col">Date</TableCell>
							<TableCell scope="col">Question</TableCell>
							<TableCell className="text-right" scope="col">
								Answer
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{data.components.stickyData.map((row, idx) => {
							return (
								<TableRow key={`${row.id}-${idx}`}>
									<TableCell component="th" scope="row">
										{row.timestamp}
									</TableCell>
									<TableCell>{row.character}</TableCell>
									<TableCell className="text-right">{row.actor}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>

					<TableFooter>
						<TableRow>
							<TableCell colSpan={3} className="text-center uppercase">
								hello footer
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
		</div>
	),
};
Sticky.args = {
	stickyHeader: true,
	stickyFooter: true,
	maxHeight: "260px",
};

export const WithRowNumbers: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className="min-h-10 w-96">
			<div className="flex flex-wrap gap-2">
				<Table caption="Dune" {...args}>
					<TableHead>
						<TableRow>
							<TableCell className="sr-only">Row</TableCell>
							<TableCell>Character</TableCell>
							<TableCell>Actor</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{data.components.data.map((row, idx) => (
							<TableRow key={row.id}>
								<TableCell>{idx + 1}</TableCell>
								<TableCell>{row.character}</TableCell>
								<TableCell>{row.actor}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	),
};

export const Sortable: Story = {
	...commonControlsSetup,
	render: (args) => {
		const [sortState, setSortState] = useState<{
			cell: string;
			direction:
				| typeof TableCellSortDirections.ASC
				| typeof TableCellSortDirections.DESC
				| false;
		}>({ direction: false, cell: "" });

		const sortedData = data.components.nutritionData.sort((a, b) => {
			switch (sortState.cell) {
				case "name":
					if (sortState.direction === TableCellSortDirections.ASC) {
						return a[sortState.cell].localeCompare(b[sortState.cell]);
					} else if (sortState.direction === TableCellSortDirections.DESC) {
						return b[sortState.cell].localeCompare(a[sortState.cell]);
					}
					break;

				case "calories":
				case "fat":
				case "carbs":
				case "protein":
					if (sortState.direction === TableCellSortDirections.ASC) {
						return a[sortState.cell] - b[sortState.cell];
					} else if (sortState.direction === TableCellSortDirections.DESC) {
						return b[sortState.cell] - a[sortState.cell];
					}
					break;

				default:
					return 0;
			}
			return 0;
		});

		const onClickSort = (key: string) => {
			switch (sortState.direction) {
				case false:
					setSortState({ cell: key, direction: TableCellSortDirections.ASC });
					break;
				case TableCellSortDirections.ASC:
					setSortState({ cell: key, direction: TableCellSortDirections.DESC });
					break;
				default:
					setSortState({ cell: key, direction: TableCellSortDirections.ASC });
					break;
			}
		};

		return (
			<div className="min-h-10">
				<div className="flex flex-wrap gap-2">
					<Table caption="Nutrition Facts" {...args}>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCellSort
									cellId="calories"
									align="right"
									sortDirection={sortState.direction}
									sortedCell={sortState.cell}
									onClick={() => {
										onClickSort("calories");
									}}
								>
									Calories
								</TableCellSort>
								<TableCellSort
									cellId="fat"
									align="right"
									sortDirection={sortState.direction}
									sortedCell={sortState.cell}
									onClick={() => {
										onClickSort("fat");
									}}
								>
									Fat
								</TableCellSort>
								<TableCellSort
									cellId="carbs"
									align="right"
									sortDirection={sortState.direction}
									sortedCell={sortState.cell}
									onClick={() => {
										onClickSort("carbs");
									}}
								>
									Carbs
								</TableCellSort>
								<TableCellSort
									cellId="protein"
									align="right"
									sortDirection={sortState.direction}
									sortedCell={sortState.cell}
									onClick={() => {
										onClickSort("protein");
									}}
								>
									Protein
								</TableCellSort>
							</TableRow>
						</TableHead>

						<TableBody>
							{sortedData.map((row) => (
								<TableRow key={row.id}>
									<TableCell>{row.name}</TableCell>
									<TableCell className="text-right">{row.calories}</TableCell>
									<TableCell className="text-right">{row.fat}</TableCell>
									<TableCell className="text-right">{row.carbs}</TableCell>
									<TableCell className="text-right">{row.protein}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		);
	},
};
