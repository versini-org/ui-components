import type { Story } from "@ladle/react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@versini/ui-components";
import * as AllIcons from "@versini/ui-icons";

export default {
	title: "System/Icons",
	meta: {
		header: "Icons",
		importName: "IconXYZ",
		importPackage: "ui-icons",
	},
};

export const Basic: Story<any> = (args) => (
	<div className="prose prose-dark flex max-w-none flex-wrap gap-2 bg-slate-300 p-10">
		<Table mode="light">
			<TableHead>
				<TableRow>
					<TableCell>Icon Name</TableCell>
					<TableCell>Icon</TableCell>
				</TableRow>
			</TableHead>

			<TableBody>
				{Object.entries(AllIcons).map(([name, Icon]) => {
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
	</div>
);

Basic.args = {
	monotone: false,
	semantic: false,
};

export const Mode: Story<any> = (args) => (
	<div className="flex max-w-none flex-wrap gap-2">
		{Object.entries(AllIcons).map(([name, Icon]) => {
			return name !== "IconDog" ? (
				<div key={name}>
					<Icon {...args} />
				</div>
			) : null;
		})}
	</div>
);
