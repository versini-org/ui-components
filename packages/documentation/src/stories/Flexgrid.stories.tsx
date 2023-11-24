import type { Meta, StoryObj } from "@storybook/react";
import { Flexgrid, FlexgridItem } from "@versini/ui-components";

const meta: Meta<typeof Flexgrid> = {
	component: Flexgrid,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {
		className: "",
		rowGap: 1,
		columnGap: 1,
		alignHorizontal: "flex-start",
		alignVertical: "flex-start",
		direction: "row",
	},
	argTypes: {
		className: {
			control: "text",
		},
		rowGap: {
			control: "number",
		},
		columnGap: {
			control: "number",
		},
		direction: {
			control: "radio",
			options: ["row", "column", "row-reverse", "column-reverse"],
		},
		alignHorizontal: {
			control: "radio",
			options: [
				"flex-start",
				"center",
				"flex-end",
				"space-between",
				"space-around",
				"space-evenly",
			],
		},
		alignVertical: {
			control: "radio",
			options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
		},
	},
};

export default meta;

type Story = StoryObj<typeof Flexgrid>;

const Container = ({ children }: { children: React.ReactNode }) => (
	<div className="bg-slate-500 p-11">{children}</div>
);

export const Basic: Story = {
	render: (args) => (
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
			<FlexgridItem span={2} />
			<FlexgridItem span={3}>
				<Container aria-label="item 8">
					item 8
					<div>
						<small>(starts col 10, spans 3 cols)</small>
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
	),
};

export const Interactive: Story = {
	args: {
		alignHorizontal: "flex-start",
		alignVertical: "flex-start",
		height: "auto",
	},
	render: (args) => (
		<>
			<Flexgrid {...args}>
				<FlexgridItem>
					<Container aria-label="cell 1">
						<div
							style={{
								padding: "5px",
								backgroundColor: "#e5f2e9",
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
								backgroundColor: "#e5f2e9",
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
								backgroundColor: "#e5f2e9",
							}}
						>
							Cell 3
						</div>
					</Container>
				</FlexgridItem>
			</Flexgrid>
		</>
	),
};
