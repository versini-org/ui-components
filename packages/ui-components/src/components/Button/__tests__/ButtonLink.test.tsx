import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { ButtonLink } from "../..";

describe("ButtonLink (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(ButtonLink).toBeDefined();
	});
});

describe("ButtonLink modifiers", () => {
	it("should render a default anchor", async () => {
		render(<ButtonLink link="toto">hello</ButtonLink>);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
	});

	it("should render a slim (legacy) anchor", async () => {
		render(
			<ButtonLink slim link="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
	});

	it("should render a size small anchor", async () => {
		render(
			<ButtonLink size="small" link="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expectToHaveClasses(button, ["px-4", "py-0", "max-h-8"]);
	});

	it("should render a size medium anchor", async () => {
		render(
			<ButtonLink size="medium" link="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expectToHaveClasses(button, ["px-4", "py-1", "max-h-9"]);
	});

	it("should render a size large anchor", async () => {
		render(
			<ButtonLink size="large" link="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expectToHaveClasses(button, ["px-4", "py-2", "max-h-12"]);
	});

	it("should render a dark link", async () => {
		render(
			<ButtonLink mode="dark" link="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		const buttonClass = button.className;
		expect(buttonClass).toContain("text-copy-light");
		expect(buttonClass).toContain("bg-action-dark");
	});

	it("should render a light anchor", async () => {
		render(
			<ButtonLink mode="light" link="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		const buttonClass = button.className;
		expect(buttonClass).toContain("text-copy-light");
		expect(buttonClass).toContain("bg-action-light");
	});

	it("should render a fullWidth link", async () => {
		render(
			<ButtonLink fullWidth link="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("w-full");
	});

	it("should render an anchor with truncated text", async () => {
		render(
			<ButtonLink link="toto" maxLabelLength={8}>
				hello world
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
		const label = await screen.findByText("hello...");
		expect(label).toBeDefined();
	});

	it("should render an anchor with full text", async () => {
		render(
			<ButtonLink link="toto" maxLabelLength={11}>
				hello world
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
		const label = await screen.findByText("hello world");
		expect(label).toBeDefined();
	});

	it("should render an anchor element with a special rel value", async () => {
		render(
			<ButtonLink link="http://www.example.com" target="_blank">
				Hello World
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expect(button).toHaveAttribute("rel", "noopener noreferrer");
	});

	it("should render an anchor with full text but with truncated class", async () => {
		render(<ButtonLink link="toto">hello world</ButtonLink>);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
		const label = await screen.findByText("hello world");
		expect(label).toBeDefined();
		expect(label.className).toContain("truncate");
	});

	it("should render an anchor with full text without a truncated class", async () => {
		render(
			<ButtonLink link="toto" noTruncate>
				hello world
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
		const label = await screen.findByText("hello world");
		expect(label).toBeDefined();
		expect(label.className).not.toContain("truncate");
	});
});
