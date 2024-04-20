import { render } from "@testing-library/react";
import { Button } from "@versini/ui-components";

import { Flexgrid, FlexgridItem } from "../..";
import {
	expectToHaveClasses,
	expectToHaveStyles,
} from "../../../../../../configuration/tests-helpers";

describe("FlexgridItem (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(FlexgridItem).toBeDefined();
	});

	it("should render default content even without a Flexgrid parent", () => {
		const { getByTestId } = render(
			<FlexgridItem data-testid="gridcell-1">
				<Button>item 1</Button>
			</FlexgridItem>,
		);
		const gridCellRoot = getByTestId("gridcell-1");
		expect(gridCellRoot).toHaveTextContent("item 1");
		expectToHaveStyles(gridCellRoot, {
			"padding-left": "0px",
			"padding-top": "0px",
		});
		expectToHaveClasses(gridCellRoot, ["box-border", "basis-auto"]);
	});
});

describe("FlexgridItem default rules", () => {
	it("should have a set of sensible default for flex", () => {
		const { getByTestId } = render(
			<Flexgrid>
				<FlexgridItem data-testid="gridcell-1">
					<Button>item 1</Button>
				</FlexgridItem>
			</Flexgrid>,
		);
		const gridCellRoot = getByTestId("gridcell-1");
		expectToHaveStyles(gridCellRoot, {
			"padding-left": "4px",
			"padding-top": "0px",
		});
		expectToHaveClasses(gridCellRoot, ["box-border", "basis-auto"]);
	});
});

describe("FlexgridItem props", () => {
	it("should render basis rules if span is a number", () => {
		const { getByTestId } = render(
			<Flexgrid>
				<FlexgridItem data-testid="gridcell-1" span={4}>
					<Button>item 1</Button>
				</FlexgridItem>
			</Flexgrid>,
		);
		const gridCellRoot = getByTestId("gridcell-1");
		expectToHaveClasses(gridCellRoot, [
			"box-border",
			"basis-4/12",
			"max-w-full",
		]);
	});

	it("should render basis rules if span is a string set to 'auto'", () => {
		const { getByTestId } = render(
			<Flexgrid>
				<FlexgridItem data-testid="gridcell-1" span="auto">
					<Button>item 1</Button>
				</FlexgridItem>
			</Flexgrid>,
		);
		const gridCellRoot = getByTestId("gridcell-1");
		expectToHaveClasses(gridCellRoot, [
			"box-border",
			"basis-auto",
			"max-w-full",
			"grow",
		]);
	});

	describe.each`
		span
		${1}
		${2}
		${3}
		${4}
		${5}
		${6}
		${7}
		${8}
		${9}
		${10}
		${11}
		${12}
	`("should render responsive rules if span is $span", ({ span }) => {
		it.each`
			breakpoint
			${"fallback"}
			${"sm"}
			${"md"}
			${"lg"}
			${"xl"}
			${"2xl"}
		`("and the breakpoint is $breakpoint", ({ breakpoint }) => {
			const { getByTestId } = render(
				<Flexgrid>
					<FlexgridItem data-testid="gridcell-1" span={{ [breakpoint]: span }}>
						<Button>item 1</Button>
					</FlexgridItem>
				</Flexgrid>,
			);
			const gridCellRoot = getByTestId("gridcell-1");
			if (breakpoint === "fallback") {
				if (span < 12) {
					expectToHaveClasses(gridCellRoot, ["box-border", `basis-${span}/12`]);
				} else {
					expectToHaveClasses(gridCellRoot, ["box-border", "basis-full"]);
				}
			} else if (typeof breakpoint === "string") {
				if (span < 12) {
					expectToHaveClasses(gridCellRoot, [
						"box-border",
						`${breakpoint}:basis-${span}/12`,
					]);
				} else {
					expectToHaveClasses(gridCellRoot, [
						"box-border",
						`${breakpoint}:basis-full`,
					]);
				}
			}
		});
	});
});
