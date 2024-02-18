import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { HEADER_CLASSNAME } from "../../../common/constants";
import { Header } from "../..";

describe("Header (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Header).toBeDefined();
	});
});

describe("Header modifiers", () => {
	it("should render a responsive header tag", async () => {
		render(<Header>hello</Header>);
		const header = await screen.findByRole("banner");
		expectToHaveClasses(header, [
			HEADER_CLASSNAME,
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

	it("should render a raw header tag with no styling", async () => {
		render(<Header raw>hello</Header>);
		const header = await screen.findByRole("banner");
		expect(header.className).toContain(HEADER_CLASSNAME);
		expect(header.className).not.toContain("mt-0");
	});
});
