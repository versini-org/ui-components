import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { Main } from "../..";

describe("Main (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Main).toBeDefined();
	});
});

describe("Main modifiers", () => {
	it("should render a responsive main tag", async () => {
		render(<Main>hello</Main>);
		const main = await screen.findByRole("main");
		expectToHaveClasses(main, [
			"av-main",
			"mt-0",
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
