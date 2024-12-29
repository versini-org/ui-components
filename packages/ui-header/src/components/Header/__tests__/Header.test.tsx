import { render, screen } from "@testing-library/react";

import { Header } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import { HEADER_CLASSNAME } from "../../../common/constants";

describe("Header (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Header).toBeDefined();
	});
});

describe("Header spacing", () => {
	it("should render a header with a right margin spacing", async () => {
		render(<Header className="mr-2">hello</Header>);
		const header = await screen.findByRole("banner");
		// not only it should be there, but it should be the last entry
		expect(header.className).toContain("mr-2");
		expect(header.className.slice(-4)).toBe("mr-2");
	});
});

describe("Header modifiers", () => {
	it("should render a responsive header tag (system)", async () => {
		render(<Header>hello</Header>);
		const header = await screen.findByRole("banner");
		expectToHaveClasses(header, [
			HEADER_CLASSNAME,
			"border-border-medium",
			"bg-surface-light",
			"dark:border-border-accent",
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
			"border-border-accent",
			"bg-surface-dark",
			"dark:border-border-medium",
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
			"bg-surface-dark",
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

	it("should render a responsive header tag (system)", async () => {
		render(<Header sticky>hello</Header>);
		const header = await screen.findByRole("banner");
		expectToHaveClasses(header, [
			HEADER_CLASSNAME,
			"border-border-medium",
			"bg-surface-light",
			"dark:border-border-accent",
			"dark:bg-surface-dark",
			"sticky",
			"top-0",
			"z-50",
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
});
