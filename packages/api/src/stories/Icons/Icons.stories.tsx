import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@versini/ui-card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@versini/ui-table";
import * as AllIcons from "../../../../ui-icons/src/components";
import { commonControlsSetup } from "../../helpers/constants";

type Story = StoryObj<typeof AllIcons.IconAdd>;

const meta: Meta<typeof AllIcons.IconAdd> = {
	parameters: {
		layout: "centered",
		docs: { ...commonControlsSetup.parameters },
	},
	title: "Icons/Icons",

	component: AllIcons.IconAdd,
};

export default meta;

export const Basic: Story = {
	...commonControlsSetup,
	render: (args) => (
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
	),
};
