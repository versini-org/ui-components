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
		cell: string;
		direction:
			| typeof TableCellSortDirections.ASC
			| typeof TableCellSortDirections.DESC
			| false;
	}>({ direction: false, cell: "" });

	const sortedData = data.sort((a, b) => {
		switch (sortState.cell) {
			case "actor":
			case "character":
				if (sortState.direction === TableCellSortDirections.ASC) {
					return a[sortState.cell].localeCompare(b[sortState.cell]);
				} else if (sortState.direction === TableCellSortDirections.DESC) {
					return b[sortState.cell].localeCompare(a[sortState.cell]);
				}
				break;

			case "timestamp":
				if (sortState.direction === TableCellSortDirections.ASC) {
					return (
						new Date(a[sortState.cell]).getTime() -
						new Date(b[sortState.cell]).getTime()
					);
				} else if (sortState.direction === TableCellSortDirections.DESC) {
					return (
						new Date(b[sortState.cell]).getTime() -
						new Date(a[sortState.cell]).getTime()
					);
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
				<Table caption="Dune" {...args}>
					<TableHead>
						<TableRow>
							<TableCellSort
								scope="col"
								cellId="timestamp"
								align="left"
								sortDirection={sortState.direction}
								sortedCell={sortState.cell}
								onClick={() => {
									onClickSort("timestamp");
								}}
							>
								Date
							</TableCellSort>
							<TableCellSort
								cellId="character"
								align="left"
								sortDirection={sortState.direction}
								sortedCell={sortState.cell}
								onClick={() => {
									onClickSort("character");
								}}
							>
								Character
							</TableCellSort>
							<TableCellSort
								cellId="actor"
								align="left"
								sortDirection={sortState.direction}
								sortedCell={sortState.cell}
								onClick={() => {
									onClickSort("actor");
								}}
							>
								Actor
							</TableCellSort>
						</TableRow>
					</TableHead>

					<TableBody>
						{sortedData.map((row) => (
							<TableRow key={row.id}>
								<TableCell>{row.timestamp}</TableCell>
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
