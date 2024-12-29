import { render, screen } from "@testing-library/react";

import { Main } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";

describe("Main (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Main).toBeDefined();
	});
});

describe("Main spacing", () => {
	it("should render a button with a right margin spacing", async () => {
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
});
