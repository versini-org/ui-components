import { render, screen } from "@testing-library/react";

import { Main } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";

describe("Main (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Main).toBeDefined();
	});
});

describe("Main spacing", () => {
	it("should render a main tag with a right margin spacing", async () => {
		render(<Main className="mr-2">hello</Main>);
		const main = await screen.findByRole("main");
		// not only it should be there, but it should be the last entry
		expect(main.className).toContain("mr-2");
		expect(main.className.slice(-4)).toBe("mr-2");
	});
});

describe("Main modifiers", () => {
	it("should render a responsive main tag", async () => {
		render(<Main>hello</Main>);
		const main = await screen.findByRole("main");
		expectToHaveClasses(main, [
			"av-main",
			"mt-2",
			"flex",
			"w-full",
			"flex-col",
			"p-2",
			"sm:mt-3",
			"md:mx-auto",
			"md:max-w-4xl",
		]);
	});

	it("should render a raw main tag with no styling", async () => {
		render(<Main raw>hello</Main>);
		const main = await screen.findByRole("main");
		expect(main.className).toContain("av-main");
		expect(main.className).not.toContain("mt-0");
	});

	it("should render a responsive main tag with no margins", async () => {
		render(<Main noMargin>hello</Main>);
		const main = await screen.findByRole("main");
		expectToHaveClasses(main, [
			"av-main",
			"flex",
			"w-full",
			"flex-col",
			"p-2",
			"md:mx-auto",
			"md:max-w-4xl",
		]);
	});

	it("should render a responsive main tag with no paddings", async () => {
		render(<Main noPadding>hello</Main>);
		const main = await screen.findByRole("main");
		expectToHaveClasses(main, [
			"av-main",
			"mt-2",
			"flex",
			"w-full",
			"flex-col",
			"sm:mt-3",
			"md:mx-auto",
			"md:max-w-4xl",
		]);
	});

	it("should render a responsive main tag with no margins or paddings", async () => {
		render(
			<Main noMargin noPadding>
				hello
			</Main>,
		);
		const main = await screen.findByRole("main");
		expectToHaveClasses(main, [
			"av-main",
			"flex",
			"w-full",
			"flex-col",
			"md:mx-auto",
			"md:max-w-4xl",
		]);
	});
});
