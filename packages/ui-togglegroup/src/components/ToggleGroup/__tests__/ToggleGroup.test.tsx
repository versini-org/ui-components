import { render, screen } from "@testing-library/react";

import { TOGGLEGROUP_CLASSNAME, ToggleGroup, ToggleGroupItem } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";

describe("ToggleGroup (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(ToggleGroup).toBeDefined();
		expect(ToggleGroupItem).toBeDefined();
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
