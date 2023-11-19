import { render, screen } from "@testing-library/react";

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
		expect(button.className).toContain("py-1");
	});

	it("should render a slim anchor", async () => {
		render(
			<ButtonLink slim link="toto">
				hello
			</ButtonLink>,
		);
		const button = await screen.findByRole("link");
		expect(button.className).toContain("py-0");
	});

	it("should render a dark link", async () => {
		render(
			<ButtonLink kind="dark" link="toto">
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
			<ButtonLink kind="light" link="toto">
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
		expect(button.className).toContain("py-1");
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
		expect(button.className).toContain("py-1");
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
});
