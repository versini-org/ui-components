import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import { ButtonLink } from "../ButtonLink";

describe("ButtonLink modifiers", () => {
	it("should render a default anchor", async () => {
		render(<ButtonLink href="toto">hello</ButtonLink>);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
	});

	it("should render a size small anchor", async () => {
		render(
			<ButtonLink size="small" href="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expectToHaveClasses(button, ["px-2", "py-0", "max-h-8"]);
	});

	it("should render a size medium anchor", async () => {
		render(
			<ButtonLink size="medium" href="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expectToHaveClasses(button, ["px-3", "py-1", "max-h-9"]);
	});

	it("should render a size large anchor", async () => {
		render(
			<ButtonLink size="large" href="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expectToHaveClasses(button, ["px-4", "py-2", "max-h-12"]);
	});

	it("should render a dark link", async () => {
		render(
			<ButtonLink mode="dark" href="toto">
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
			<ButtonLink mode="light" href="toto">
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
			<ButtonLink fullWidth href="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("w-full");
	});

	it("should render an anchor with truncated text", async () => {
		render(
			<ButtonLink href="toto" className="w-44">
				hello world
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
		const label = await screen.findByText("hello world");
		expect(label).toBeDefined();
		expect(label.className).toContain("truncate");
	});

	it("should render an anchor element with a special rel value", async () => {
		render(
			<ButtonLink href="http://www.example.com" target="_blank">
				Hello World
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expect(button).toHaveAttribute("rel", "noopener noreferrer");
	});

	it("should render an anchor with full text but with truncated class", async () => {
		render(<ButtonLink href="toto">hello world</ButtonLink>);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
		const label = await screen.findByText("hello world");
		expect(label).toBeDefined();
		expect(label.className).toContain("truncate");
	});

	it("should render an anchor with full text without a truncated class", async () => {
		render(
			<ButtonLink href="toto" noTruncate>
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
