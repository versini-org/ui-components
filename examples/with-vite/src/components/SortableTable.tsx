import {
	Table,
	TableBody,
	TableCell,
	TableCellSort,
	TableCellSortDirections,
	TableFooter,
	TableHead,
	TableRow,
} from "@versini/ui-table";
import { useState } from "react";

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

export const SortableTable = () => {
	const [sortState, setSortState] = useState<{
		cell: string;
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
		<Table
			caption="Nutrition Facts"
			maxHeight="300px"
			stickyHeader
			stickyFooter
		>
			<TableHead>
				<TableRow>
					<TableCell className="sr-only">Row</TableCell>
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
				{sortedData.map((row, idx) => (
					<TableRow key={row.id}>
						<TableCell>{idx + 1}</TableCell>
						<TableCell>{row.name}</TableCell>
						<TableCell className="text-right">{row.calories}</TableCell>
						<TableCell className="text-right">{row.fat}</TableCell>
						<TableCell className="text-right">{row.carbs}</TableCell>
						<TableCell className="text-right">{row.protein}</TableCell>
					</TableRow>
				))}
			</TableBody>

			<TableFooter>
				<TableRow>
					<TableCell colSpan={6} className="text-center">
						{sortedData.length} {" items"}
						{sortState.direction && sortState.cell && (
							<>
								{" sorted by "}
								{sortState.cell} {"("}
								{sortState.direction === TableCellSortDirections.ASC
									? "lowest to highest"
									: "highest to lowest"}
								{")"}
							</>
						)}
					</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	);
};
