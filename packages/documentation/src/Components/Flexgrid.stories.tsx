import type { Story } from "@ladle/react";
import {
	Button,
	Flexgrid,
	FlexgridItem,
	Main,
	TextInput,
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

export const WithLoginForm: Story<any> = (args) => (
	<Main>
		<form className="mx-auto flex w-96 flex-col flex-wrap">
			<Flexgrid {...args} direction="column" className="mx-auto w-96">
				<FlexgridItem>
					<TextInput
						type="password"
						name="password"
						label="Enter your password"
					/>
				</FlexgridItem>

				<FlexgridItem>
					<Button noBorder type="submit" className="mb-4 mt-6">
						Log in
					</Button>
				</FlexgridItem>
			</Flexgrid>
		</form>
	</Main>
);
