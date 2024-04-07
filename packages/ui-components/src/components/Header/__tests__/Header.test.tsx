import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import { HEADER_CLASSNAME } from "../../../common/constants";
import { Header } from "../..";

describe("Header (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Header).toBeDefined();
	});
});

describe("Header modifiers", () => {
	it("should render a responsive header tag (system)", async () => {
		render(<Header>hello</Header>);
		const header = await screen.findByRole("banner");
		expectToHaveClasses(header, [
			HEADER_CLASSNAME,
			"border-border-accent",
			"dark:border-border-medium",
			"bg-surface-light",
			"dark:bg-surface-dark",
		]);
		expectToHaveClasses(header.children[0], [
			"mt-0",
			"flex",
			"w-full",
			"flex-col",
			"p-2",
			"md:mx-auto",
			"md:max-w-4xl",
		]);
	});

	it("should render a responsive header tag (alt-system)", async () => {
		render(<Header mode="alt-system">hello</Header>);
		const header = await screen.findByRole("banner");
		expectToHaveClasses(header, [
			HEADER_CLASSNAME,
			"border-border-medium",
			"dark:border-border-accent",
			"bg-surface-dark",
			"dark:bg-surface-light",
		]);
		expectToHaveClasses(header.children[0], [
			"mt-0",
			"flex",
			"w-full",
			"flex-col",
			"p-2",
			"md:mx-auto",
			"md:max-w-4xl",
		]);
	});

	it("should render a responsive header tag (light)", async () => {
		render(<Header mode="light">hello</Header>);
		const header = await screen.findByRole("banner");
		expectToHaveClasses(header, [
			HEADER_CLASSNAME,
			"border-border-medium",
			"bg-surface-light",
		]);
		expectToHaveClasses(header.children[0], [
			"mt-0",
			"flex",
			"w-full",
			"flex-col",
			"p-2",
			"md:mx-auto",
			"md:max-w-4xl",
		]);
	});

	it("should render a responsive header tag (dark)", async () => {
		render(<Header mode="dark">hello</Header>);
		const header = await screen.findByRole("banner");
		expectToHaveClasses(header, [
			HEADER_CLASSNAME,
			"border-border-accent",
			"bg-surface-medium",
		]);
		expectToHaveClasses(header.children[0], [
			"mt-0",
			"flex",
			"w-full",
			"flex-col",
			"p-2",
			"md:mx-auto",
			"md:max-w-4xl",
		]);
	});

	it("should render a responsive header tag with no colors", async () => {
		render(<Header noColors>hello</Header>);
		const header = await screen.findByRole("banner");
		expectToHaveClasses(header, [HEADER_CLASSNAME]);
		expectToHaveClasses(header.children[0], [
			"mt-0",
			"flex",
			"w-full",
			"flex-col",
			"p-2",
			"md:mx-auto",
			"md:max-w-4xl",
		]);
	});

	it("should render a non-responsive header tag with no styling", async () => {
		render(<Header raw>hello</Header>);
		const header = await screen.findByRole("banner");
		expect(header.className).toContain(HEADER_CLASSNAME);
		expect(header.className).not.toContain("mt-0");
	});
});
