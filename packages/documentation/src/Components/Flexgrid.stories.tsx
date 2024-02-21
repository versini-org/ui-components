import type { Story } from "@ladle/react";
import {
	Card,
	Flexgrid,
	FlexgridItem,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@versini/ui-components";

export default {
	title: "Components/Flexgrid",
	meta: {
		importName: "Flexgrid, FlexgridItem",
	},
	args: {
		className: "",
		rowGap: 1,
		columnGap: 1,
		alignHorizontal: "normal",
		alignVertical: "normal",
		direction: "row",
	},
	argTypes: {
		direction: {
			control: { type: "radio" },
			options: ["row", "column", "row-reverse", "column-reverse"],
		},
		alignHorizontal: {
			control: { type: "radio" },
			options: [
				"normal",
				"flex-start",
				"center",
				"flex-end",
				"space-between",
				"space-around",
				"space-evenly",
			],
		},
		alignVertical: {
			control: { type: "radio" },
			options: [
				"normal",
				"flex-start",
				"center",
				"flex-end",
				"stretch",
				"baseline",
			],
		},
	},
};

const Container = ({ children }: { children: React.ReactNode }) => (
	<div className="bg-slate-100 p-11">{children}</div>
);

export const Basic: Story<any> = (args) => (
	<Flexgrid {...args}>
		<FlexgridItem span={4}>
			<Container aria-label="item 1">
				item 1
				<div>
					<small>(starts col 1, spans 4 cols)</small>
				</div>
			</Container>
		</FlexgridItem>
		<FlexgridItem span={4}>
			<Container aria-label="item 2">
				item 2
				<div>
					<small>(starts col 5, spans 4 cols)</small>
				</div>
			</Container>
		</FlexgridItem>
		<FlexgridItem span={4}>
			<Container aria-label="item 3">
				item 3
				<div>
					<small>(starts col 9, spans 4 cols)</small>
				</div>
			</Container>
		</FlexgridItem>
		<FlexgridItem span={4}>
			<Container aria-label="item 4">
				item 4
				<div>
					<small>(starts col 1, spans 4 cols)</small>
				</div>
			</Container>
		</FlexgridItem>

		<FlexgridItem span={2} />

		<FlexgridItem span="auto">
			<Container aria-label="item 5">
				item 5
				<div>
					<small>(starts col 7, spans across the remaining space)</small>
				</div>
			</Container>
		</FlexgridItem>

		<FlexgridItem span={6}>
			<Container aria-label="item 6">
				item 6
				<div>
					<small>(starts col 1, spans 6 cols)</small>
				</div>
			</Container>
		</FlexgridItem>

		<FlexgridItem span={6} />

		<FlexgridItem span={7}>
			<Container aria-label="item 7">
				item 7
				<div>
					<small>(starts col 1, spans 7 cols)</small>
				</div>
			</Container>
		</FlexgridItem>
		<FlexgridItem span={1} />
		<FlexgridItem span={4}>
			<Container aria-label="item 8">
				item 8
				<div>
					<small>(starts col 9, spans 4 cols)</small>
				</div>
			</Container>
		</FlexgridItem>

		<FlexgridItem span={12}>
			<Container aria-label="item 9">
				item 9
				<div>
					<small>(starts col 1, spans 12 cols)</small>
				</div>
			</Container>
		</FlexgridItem>
	</Flexgrid>
);

export const Interactive: Story<any> = (args) => (
	<Flexgrid {...args}>
		<FlexgridItem>
			<Container aria-label="cell 1">
				<div
					style={{
						padding: "5px",
						backgroundColor: "rgb(133 209 156)",
					}}
				>
					Cell 1
				</div>
			</Container>
		</FlexgridItem>
		<FlexgridItem>
			<Container aria-label="cell 2">
				<div
					style={{
						padding: "10px",
						backgroundColor: "rgb(133 209 156)",
					}}
				>
					Cell 2
				</div>
			</Container>
		</FlexgridItem>
		<FlexgridItem>
			<Container aria-label="cell 3">
				<div
					style={{
						padding: "15px",
						backgroundColor: "rgb(133 209 156)",
					}}
				>
					Cell 3
				</div>
			</Container>
		</FlexgridItem>
	</Flexgrid>
);
Interactive.args = {
	height: "auto",
};

export const Responsive: Story<any> = (args) => {
	const data = [
		{ id: 0, prefix: "fallback", minwidth: "0px" },
		{ id: 1, prefix: "sm", minwidth: "640px" },
		{ id: 2, prefix: "md", minwidth: "768px" },
		{ id: 3, prefix: "lg", minwidth: "1024px" },
		{ id: 4, prefix: "xl", minwidth: "1280px" },
		{ id: 5, prefix: "s2xlm", minwidth: "1536px" },
	];
	const intro = `FlexgridItem span prop can be configured with multiple breakpoints. Instead of using a single number, an object can be passed with the following keys:`;

	const example = `For example, { fallback: 12, sm: 6, md: 8 } sizes a component to occupy half of the viewport width (6 columns) when viewport width is between 641 and 769 pixels. Above 769 pixels, it occupies a 2 third of the viewport (8 columns). For smaller viewports (fallback), the component fills all 12 available columns.`;
	return (
		<>
			<p className="text-copy-lighter">{intro}</p>
			<Table kind="light" spacing={{ t: 2, b: 2 }}>
				<TableHead>
					<TableRow>
						<TableCell>Breakpoint prefix</TableCell>
						<TableCell>Minimum width</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{data.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.prefix}</TableCell>
							<TableCell>{row.minwidth}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<p className="text-copy-lighter">{example}</p>
			<Flexgrid {...args}>
				<FlexgridItem span={{ fallback: 12, sm: 6, md: 8 }}>
					<Card spacing={{ t: 2 }}>
						<p className="text-center">Responsive Card</p>
					</Card>
				</FlexgridItem>
			</Flexgrid>
		</>
	);
};
