import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { Anchor } from "../..";

describe("Anchor (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Anchor).toBeDefined();
	});
});

describe("Anchor modifiers", () => {
	it("should render a default anchor", async () => {
		render(<Anchor link="toto">hello</Anchor>);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
	});

	it("should render a slim (legacy) anchor", async () => {
		render(
			<Anchor slim link="toto">
				hello
			</Anchor>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
	});

	it("should render a size small anchor", async () => {
		render(
			<Anchor size="small" link="toto">
				hello
			</Anchor>,
		);
		const button = await screen.findByRole("link");
		expectToHaveClasses(button, ["px-4", "py-0", "max-h-8"]);
	});

	it("should render a size medium anchor", async () => {
		render(
			<Anchor size="medium" link="toto">
				hello
			</Anchor>,
		);
		const button = await screen.findByRole("link");
		expectToHaveClasses(button, ["px-4", "py-1", "max-h-9"]);
	});

	it("should render a size large anchor", async () => {
		render(
			<Anchor size="large" link="toto">
				hello
			</Anchor>,
		);
		const button = await screen.findByRole("link");
		expectToHaveClasses(button, ["px-4", "py-2", "max-h-12"]);
	});

	it("should render a dark link", async () => {
		render(
			<Anchor mode="dark" link="toto">
				hello
			</Anchor>,
		);
		const button = await screen.findByRole("link");
		const buttonClass = button.className;
		expect(buttonClass).toContain("text-copy-light");
		expect(buttonClass).toContain("bg-action-dark");
	});

	it("should render a light anchor", async () => {
		render(
			<Anchor mode="light" link="toto">
				hello
			</Anchor>,
		);
		const button = await screen.findByRole("link");
		const buttonClass = button.className;
		expect(buttonClass).toContain("text-copy-light");
		expect(buttonClass).toContain("bg-action-light");
	});

	it("should render a fullWidth link", async () => {
		render(
			<Anchor fullWidth link="toto">
				hello
			</Anchor>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("w-full");
	});

	it("should render an anchor with truncated text", async () => {
		render(
			<Anchor link="toto" maxLabelLength={8}>
				hello world
			</Anchor>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
		const label = await screen.findByText("hello...");
		expect(label).toBeDefined();
	});

	it("should render an anchor with full text", async () => {
		render(
			<Anchor link="toto" maxLabelLength={11}>
				hello world
			</Anchor>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
		const label = await screen.findByText("hello world");
		expect(label).toBeDefined();
	});

	it("should render an anchor element with a special rel value", async () => {
		render(
			<Anchor link="http://www.example.com" target="_blank">
				Hello World
			</Anchor>,
		);
		const button = await screen.findByRole("link");
		expect(button).toHaveAttribute("rel", "noopener noreferrer");
	});

	it("should render an anchor with full text but with truncated class", async () => {
		render(<Anchor link="toto">hello world</Anchor>);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
		const label = await screen.findByText("hello world");
		expect(label).toBeDefined();
		expect(label.className).toContain("truncate");
	});

	it("should render an anchor with full text without a truncated class", async () => {
		render(
			<Anchor link="toto" noTruncate>
				hello world
			</Anchor>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
		const label = await screen.findByText("hello world");
		expect(label).toBeDefined();
		expect(label.className).not.toContain("truncate");
	});
});
