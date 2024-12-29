import { render, screen } from "@testing-library/react";

import { TOGGLEGROUP_CLASSNAME, ToggleGroup, ToggleGroupItem } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";

describe("ToggleGroup (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(ToggleGroup).toBeDefined();
		expect(ToggleGroupItem).toBeDefined();
	});
});

describe("ToggleGroup spacing", () => {
	it("should render a toggle group with a right margin spacing", async () => {
		render(
			<ToggleGroup className="mr-2">
				<ToggleGroupItem value="toto" />
			</ToggleGroup>,
		);
		const group = screen.getByRole("group");
		// not only it should be there, but it should be the last entry
		expect(group.className).toContain("mr-2");
		expect(group.className.slice(-4)).toBe("mr-2");
	});
});

describe("ToggleGroup modifiers", () => {
	it("should render a default ToggleGroup (light)", async () => {
		render(
			<ToggleGroup>
				<ToggleGroupItem value="toto" />
			</ToggleGroup>,
		);
		const group = screen.getByRole("group");

		expectToHaveClasses(group, [
			TOGGLEGROUP_CLASSNAME,
			"inline-flex",
			"p-1",
			"rounded-sm",
			"bg-surface-light",
			"text-copy-dark",
			"dark:bg-surface-darker",
			"dark:text-copy-lighter",
		]);
	});

	it("should render a dark ToggleGroup", async () => {
		render(
			<ToggleGroup mode="dark">
				<ToggleGroupItem value="toto" />
			</ToggleGroup>,
		);

		const group = screen.getByRole("group");
		screen.debug(group);

		expectToHaveClasses(group, [
			TOGGLEGROUP_CLASSNAME,
			"inline-flex",
			"p-1",
			"rounded-sm",
			"bg-surface-darker",
			"text-copy-lighter",
		]);
	});
});
