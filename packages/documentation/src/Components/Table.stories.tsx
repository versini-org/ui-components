import type { Story } from "@ladle/react";
import {
	ButtonIcon,
	Table,
	TableBody,
	TableCell,
	TableCellSort,
	TableCellSortDirections,
	TableFooter,
	TableHead,
	TableRow,
} from "@versini/ui-components";
import { IconDelete, IconRestore } from "@versini/ui-icons";
import { useState } from "react";

export default {
	title: "Components/Table",
	meta: {
		importName:
			"Table, TableBody, TableCell, TableCellSort, TableHead, TableRow",
	},
	args: {
		mode: "system",
		summary: "A table about Dune",
		compact: false,
	},
	argTypes: {
		caption: {
			control: { type: "text" },
		},
		summary: {
			control: { type: "text" },
		},
		mode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
	},
};

const data = [
	{
		id: 1,
		character: "Paul Atreides",
		actor: "Timothée Chalamet",
		timestamp: "10/17/2023 08:46 PM EDT",
	},
	{
		id: 2,
		character: "Lady Jessica",
		actor: "Rebecca Ferguson",
		timestamp: "10/16/2023 08:55 PM EDT",
	},
	{
		id: 3,
		character: "Duncan Idaho",
		actor: "Jason Momoa",
		timestamp: "10/16/2023 08:59 PM EDT",
	},
];

const nutritionData = [
	{ id: 1, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
	{ id: 2, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
	{ id: 3, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
	{
		id: 4,
		name: "Frozen yoghurt",
		calories: 159,
		fat: 6.0,
		carbs: 24,
		protein: 4.0,
	},
	{
		id: 5,
		name: "Gingerbread",
		calories: 356,
		fat: 16.0,
		carbs: 49,
		protein: 3.9,
	},
	{
		id: 6,
		name: "Honeycomb",
		calories: 408,
		fat: 3.2,
		carbs: 87,
		protein: 6.5,
	},
	{
		id: 7,
		name: "Ice cream sandwich",
		calories: 237,
		fat: 9.0,
		carbs: 37,
		protein: 4.3,
	},
	{
		id: 8,
		name: "Jelly Bean",
		calories: 375,
		fat: 0.0,
		carbs: 94,
		protein: 0.0,
	},
	{ id: 9, name: "KitKat", calories: 518, fat: 26.0, carbs: 65, protein: 7.0 },
	{
		id: 10,
		name: "Lollipop",
		calories: 392,
		fat: 0.2,
		carbs: 98,
		protein: 0.0,
	},
	{
		id: 11,
		name: "Marshmallow",
		calories: 318,
		fat: 0,
		carbs: 81,
		protein: 2.0,
	},
	{ id: 12, name: "Nougat", calories: 360, fat: 19.0, carbs: 9, protein: 37.0 },
	{ id: 13, name: "Oreo", calories: 437, fat: 18.0, carbs: 63, protein: 4.0 },
];

export const Basic: Story<any> = (args) => {
	return (
		<div className="min-h-10">
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
};

export const WithAction: Story<any> = (args) => {
	return (
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
						{data.map((row, idx) => {
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
	);
};

export const Sticky: Story<any> = (args) => {
	const extraData = [
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
		{
			id: 4,
			timestamp: "10/16/2023 08:59 PM EDT",
			character: "And Duncan Idaho?",
			actor: "Jason Momoa",
		},
		{
			id: 5,
			timestamp: "10/16/2023 08:59 PM EDT",
			character: "And Duncan Idaho?",
			actor: "Jason Momoa",
		},
		{
			id: 6,
			timestamp: "10/16/2023 08:59 PM EDT",
			character: "And Duncan Idaho?",
			actor: "Jason Momoa",
		},
		{
			id: 7,
			timestamp: "10/16/2023 08:59 PM EDT",
			character: "And Duncan Idaho?",
			actor: "Jason Momoa",
		},
	];

	return (
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
						{extraData.map((row, idx) => {
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
	);
};
Sticky.args = {
	stickyHeader: true,
	stickyFooter: true,
	maxHeight: "260px",
};

export const WithRowNumbers: Story<any> = (args) => {
	return (
		<div className="min-h-10">
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
						{data.map((row, idx) => (
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
	);
};

export const Sortable: Story<any> = (args) => {
	const [sortState, setSortState] = useState<{
		cell: string | number;
		direction:
			| typeof TableCellSortDirections.ASC
			| typeof TableCellSortDirections.DESC
			| false;
	}>({ direction: false, cell: "" });

	const sortedData = nutritionData.sort((a, b) => {
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
};
