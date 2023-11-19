import { render, screen } from "@testing-library/react";

import { FOOTER_CLASSNAME } from "../../../common/constants";
import { Footer } from "../..";

describe("Footer (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Footer).toBeDefined();
	});
});

describe("Footer modifiers", () => {
	it("should render a default footer", async () => {
		render(<Footer />);
		const footer = await screen.findByRole("contentinfo");
		expect(footer.className).toContain("text-center");
		expect(footer.className).toContain(FOOTER_CLASSNAME);
	});

	it("should render a dark footer", async () => {
		render(<Footer kind="dark" />);
		const footer = await screen.findByRole("contentinfo");
		expect(footer.className).toContain("text-copy-dark");
	});

	it("should render a light footer", async () => {
		render(<Footer kind="light" />);
		const footer = await screen.findByRole("contentinfo");
		expect(footer.className).toContain("text-copy-light");
	});

	it("should render a footer with a custom class", async () => {
		render(<Footer className="toto" />);
		const footer = await screen.findByRole("contentinfo");
		expect(footer.className).toContain("text-center");
		expect(footer.className).toContain("toto");
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
});
