import * as AllIcons from "@versini/ui-icons";

import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@versini/ui-components";

import type { Story } from "@ladle/react";

export default {
	title: "Icons",
	meta: {
		header: "Icons",
		importName: "IconXYZ",
		importPackage: "ui-icons",
	},
	args: {
		monotone: false,
		semantic: false,
	},
};

export const Basic: Story<any> = (args) => (
	<Card header="All Icons">
		<Table compact>
			<TableHead>
				<TableRow>
					<TableCell>Icon Name</TableCell>
					<TableCell>Icon</TableCell>
				</TableRow>
			</TableHead>

			<TableBody>
				{Object.entries(AllIcons).map(([name, Icon]) => {
					// biome-ignore lint/correctness/useJsxKeyInIterable:
					return name !== "IconDog" ? (
						<TableRow key={name}>
							<TableCell>{name}</TableCell>
							<TableCell>
								<Icon {...args} />
							</TableCell>
						</TableRow>
					) : null;
				})}
			</TableBody>
		</Table>
	</Card>
);
