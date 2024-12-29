import { render, screen } from "@testing-library/react";

import { Footer } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import { FOOTER_CLASSNAME } from "../../../common/constants";

describe("Footer (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Footer).toBeDefined();
	});
});

describe("Footer spacing", () => {
	it("should render a footer with a right margin spacing", async () => {
		render(<Footer className="mr-2" />);
		const footer = await screen.findByRole("contentinfo");
		// not only it should be there, but it should be the last entry
		expect(footer.className).toContain("mr-2");
		expect(footer.className.slice(-4)).toBe("mr-2");
	});
});

describe("Footer modifiers", () => {
	it("should render a default footer", async () => {
		render(<Footer />);
		const footer = await screen.findByRole("contentinfo");
		expectToHaveClasses(footer, [
			FOOTER_CLASSNAME,
			"text-center",
			"text-xs",
			"text-copy-dark",
			"mb-[100px]",
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

	it("should render a dark footer", async () => {
		render(<Footer mode="dark" />);
		const footer = await screen.findByRole("contentinfo");
		expectToHaveClasses(footer, [
			FOOTER_CLASSNAME,
			"text-center",
			"text-xs",
			"text-copy-dark",
			"mb-[100px]",
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

	it("should render a light footer", async () => {
		render(<Footer mode="light" />);
		const footer = await screen.findByRole("contentinfo");
		expectToHaveClasses(footer, [
			FOOTER_CLASSNAME,
			"text-center",
			"text-xs",
			"text-copy-lighter",
			"mb-[100px]",
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

	it("should render a light or dark (system) footer", async () => {
		render(<Footer mode="system" />);
		const footer = await screen.findByRole("contentinfo");
		expectToHaveClasses(footer, [
			FOOTER_CLASSNAME,
			"text-center",
			"text-xs",
			"text-copy-dark",
			"dark:text-copy-lighter",
			"mb-[100px]",
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

	it("should render a light or dark (alt-system) footer", async () => {
		render(<Footer mode="alt-system" />);
		const footer = await screen.findByRole("contentinfo");
		expectToHaveClasses(footer, [
			FOOTER_CLASSNAME,
			"text-center",
			"text-xs",
			"text-copy-lighter",
			"dark:text-copy-dark",
			"mb-[100px]",
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

	it("should render a footer with a custom class", async () => {
		render(<Footer className="toto" />);
		const footer = await screen.findByRole("contentinfo");
		expectToHaveClasses(footer, [
			FOOTER_CLASSNAME,
			"text-center",
			"text-xs",
			"text-copy-dark",
			"mb-[100px]",
			"mt-0",
			"flex",
			"w-full",
			"flex-col",
			"p-2",
			"sm:mt-3",
			"md:mx-auto",
			"md:max-w-4xl",
			"toto",
		]);
	});

	it("should render a footer with one row (row1)", async () => {
		render(<Footer row1={<div>row1</div>} />);
		const footer = await screen.findByRole("contentinfo");
		expect(footer.className).toContain("text-center");
		const row1 = await screen.findByText("row1");
		expect(row1).toBeDefined();
	});

	it("should render a footer with one row (row2)", async () => {
		render(<Footer row2={<div>row2</div>} />);
		const footer = await screen.findByRole("contentinfo");
		expect(footer.className).toContain("text-center");
		const row2 = await screen.findByText("row2");
		expect(row2).toBeDefined();
	});

	it("should render a footer with two rows (row1 and row2)", async () => {
		render(<Footer row1={<div>row1</div>} row2={<div>row2</div>} />);
		const footer = await screen.findByRole("contentinfo");
		expect(footer.className).toContain("text-center");
		const row1 = await screen.findByText("row1");
		expect(row1).toBeDefined();
		const row2 = await screen.findByText("row2");
		expect(row2).toBeDefined();
	});

	it("should render a footer with no margins", async () => {
		render(<Footer noMargins />);
		const footer = await screen.findByRole("contentinfo");
		expectToHaveClasses(footer, [
			FOOTER_CLASSNAME,
			"text-center",
			"text-xs",
			"text-copy-dark",
			"mt-0",
			"flex",
			"w-full",
			"flex-col",
			"p-2",
			"sm:mt-3",
			"md:mx-auto",
			"md:max-w-4xl",
		]);
		expect(footer.className).not.toContain("mb-[100px]");
	});

	it("should render a raw footer", async () => {
		render(<Footer raw />);
		const footer = await screen.findByRole("contentinfo");
		expect(footer.className).toContain(FOOTER_CLASSNAME);
		expect(footer.className).not.toContain("text-center");
		expect(footer.className).not.toContain("text-xs");
		expect(footer.className).not.toContain("text-copy-dark");
		expect(footer.className).not.toContain("mt-0");
		expect(footer.className).not.toContain("flex");
		expect(footer.className).not.toContain("w-full");
		expect(footer.className).not.toContain("flex-col");
		expect(footer.className).not.toContain("p-2");
		expect(footer.className).not.toContain("sm:mt-3");
		expect(footer.className).not.toContain("md:mx-auto");
		expect(footer.className).not.toContain("md:max-w-4xl");
		expect(footer.className).not.toContain("mb-[100px]");
	});
});
