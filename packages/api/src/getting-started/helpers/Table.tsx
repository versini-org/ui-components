import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@versini/ui-table";

interface TableProps {
	column1: string;
	column2: string;
	data: { id: string; name: string; description: string }[];
}

export default ({ column1, column2, data }: TableProps) => (
	<Table>
		<TableHead className="uppercase">
			<TableRow>
				<TableCell scope="col">{column1}</TableCell>
				<TableCell scope="col">{column2}</TableCell>
			</TableRow>
		</TableHead>

		<TableBody>
			{data.map((row, idx) => {
				return (
					<TableRow key={`${row.id}-${idx}`}>
						<TableCell component="th" scope="row">
							{row.name}
						</TableCell>
						<TableCell>{row.description}</TableCell>
					</TableRow>
				);
			})}
		</TableBody>
	</Table>
);
