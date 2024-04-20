import { render, screen } from "@testing-library/react";

import { Flexgrid } from "../..";
import {
	expectToHaveClasses,
	expectToHaveStyles,
} from "../../../../../../configuration/tests-helpers";

describe("Flexgrid (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Flexgrid).toBeDefined();
	});
});

describe("Flexgrid default rules", () => {
	it("should have a set of sensible default for flex", async () => {
		render(<Flexgrid data-testid="grid-1">hello</Flexgrid>);
		const gridRoot = await screen.findByTestId("grid-1");
		expectToHaveStyles(gridRoot, {
			"flex-direction": "row",
			"justify-content": "normal",
			"align-items": "normal",
		});
		expectToHaveClasses(gridRoot, ["box-border", "flex", "flex-wrap"]);
	});

	it("should add margins to compensate for the default column gap", async () => {
		render(<Flexgrid data-testid="grid-1">hello</Flexgrid>);
		const gridRoot = await screen.findByTestId("grid-1");
		expectToHaveStyles(gridRoot, {
			"margin-left": "-4px",
			"margin-top": "0px",
		});
	});
});

describe("Flexgrid props", () => {
	it("should add margins to compensate for a custom column gap", async () => {
		render(
			<Flexgrid columnGap={2} data-testid="grid-1">
				hello
			</Flexgrid>,
		);
		const gridRoot = await screen.findByTestId("grid-1");
		expectToHaveStyles(gridRoot, {
			"margin-left": "-8px",
			"margin-top": "0px",
		});
	});

	it("should have a width set to 666px", async () => {
		render(
			<Flexgrid width="666px" data-testid="grid-1">
				hello
			</Flexgrid>,
		);
		const gridRoot = await screen.findByTestId("grid-1");
		expectToHaveStyles(gridRoot, { width: "666px" });
	});

	it("should have a height set to 777px", async () => {
		render(
			<Flexgrid height="777px" data-testid="grid-1">
				hello
			</Flexgrid>,
		);
		const gridRoot = await screen.findByTestId("grid-1");
		expectToHaveStyles(gridRoot, { height: "777px" });
	});

	it("should have a flex-direction set to row-reverse", async () => {
		render(
			<Flexgrid direction="row-reverse" data-testid="grid-1">
				hello
			</Flexgrid>,
		);
		const gridRoot = await screen.findByTestId("grid-1");
		expectToHaveStyles(gridRoot, {
			"flex-direction": "row-reverse",
		});
	});

	it("should have a justify-content set to space-between", async () => {
		render(
			<Flexgrid alignHorizontal="space-between" data-testid="grid-1">
				hello
			</Flexgrid>,
		);
		const gridRoot = await screen.findByTestId("grid-1");
		expectToHaveStyles(gridRoot, {
			"justify-content": "space-between",
		});
	});

	it("should have an align-items set to stretch", async () => {
		render(
			<Flexgrid alignVertical="stretch" data-testid="grid-1">
				hello
			</Flexgrid>,
		);
		const gridRoot = await screen.findByTestId("grid-1");
		expectToHaveStyles(gridRoot, { "align-items": "stretch" });
	});
});
