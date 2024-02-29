import type { Story } from "@ladle/react";
import {
	ButtonIcon,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@versini/ui-components";
import { IconDelete, IconRestore } from "@versini/ui-icons";

export default {
	title: "Components/Table",
	meta: {
		importName: "Table, TableBody, TableCell, TableHead, TableRow",
	},
	args: {
		mode: "system",
		summary: "A table about Dune",
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

export const Basic: Story<any> = (args) => {
	const data = [
		{ id: 1, character: "Paul Atreides", actor: "Timothée Chalamet" },
		{ id: 2, character: "Lady Jessica", actor: "Rebecca Ferguson" },
		{ id: 3, character: "Duncan Idaho", actor: "Jason Momoa" },
	];
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
												onClick={() => {}}
											>
												<IconRestore className="h-3 w-3" />
											</ButtonIcon>
											<ButtonIcon
												noBorder
												label="Delete chat"
												mode="light"
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

export const WithStickyHeader: Story<any> = (args) => {
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
				<Table maxHeight="238px" stickyHeader {...args}>
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
												onClick={() => {}}
											>
												<IconRestore className="h-3 w-3" />
											</ButtonIcon>
											<ButtonIcon
												noBorder
												label="Delete chat"
												mode="light"
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
