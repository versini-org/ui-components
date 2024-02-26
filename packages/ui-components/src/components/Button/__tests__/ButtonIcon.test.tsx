import { render, screen } from "@testing-library/react";
import { IconSettings } from "@versini/ui-icons";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { ButtonIcon } from "../ButtonIcon";

describe("ButtonIcon (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(ButtonIcon).toBeDefined();
	});
});

describe("ButtonIcon modifiers", () => {
	it("should render a default button icon", async () => {
		render(
			<ButtonIcon>
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("p-1");
		expectToHaveClasses(button, [
			"inline-flex",
			"items-center",
			"justify-center",
			"rounded-full",
			"focus:outline-none",
			"focus:ring-2",
		]);
	});

	it("should render a dark button icon", async () => {
		render(
			<ButtonIcon kind="dark">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const buttonClass = button.className;
		expect(buttonClass).toContain("text-copy-light");
		expect(buttonClass).toContain("bg-action-dark");
	});

	it("should render a light button icon", async () => {
		render(
			<ButtonIcon kind="light">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const buttonClass = button.className;
		expect(buttonClass).toContain("text-copy-light");
		expect(buttonClass).toContain("bg-action-light");
	});

	it("should render a disabled dark button icon", async () => {
		render(
			<ButtonIcon kind="dark" disabled>
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const buttonClass = button.className;
		expect(buttonClass).toContain("disabled:opacity-50");
		expect(buttonClass).toContain("disabled:cursor-not-allowed");
	});

	it("should render a disabled light button icon", async () => {
		render(
			<ButtonIcon kind="light" disabled>
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const buttonClass = button.className;
		expect(buttonClass).toContain("disabled:opacity-50");
		expect(buttonClass).toContain("disabled:cursor-not-allowed");
	});

	it("should render a fullWidth button icon", async () => {
		render(
			<ButtonIcon fullWidth>
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("w-full");
	});

	it("should render a size small button icon", async () => {
		render(
			<ButtonIcon size="small">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, ["h-6", "w-6", "p-0"]);
	});

	it("should render a size small button icon with a label on the right", async () => {
		render(
			<ButtonIcon size="small" labelRight="Settings">
				<IconSettings decorative />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const label = await screen.findByText("Settings");
		expect(label).toBeDefined();
		expectToHaveClasses(button, ["h-6", "px-4", "text-sm", "font-medium"]);
	});

	it("should render a size small button icon with a label on the left", async () => {
		render(
			<ButtonIcon size="small" labelLeft="Settings">
				<IconSettings decorative />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const label = await screen.findByText("Settings");
		expect(label).toBeDefined();
		expectToHaveClasses(button, ["h-6", "px-4", "text-sm", "font-medium"]);
	});

	it("should render a size medium button icon", async () => {
		render(
			<ButtonIcon size="medium">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, ["h-8", "w-8", "p-1"]);
	});

	it("should render a size medium button icon with a label on the right", async () => {
		render(
			<ButtonIcon size="medium" labelRight="Settings">
				<IconSettings decorative />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const label = await screen.findByText("Settings");
		expect(label).toBeDefined();
		expectToHaveClasses(button, ["h-8", "px-4", "text-base", "font-medium"]);
	});

	it("should render a size medium button icon with a label on the left", async () => {
		render(
			<ButtonIcon size="medium" labelLeft="Settings">
				<IconSettings decorative />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const label = await screen.findByText("Settings");
		expect(label).toBeDefined();
		expectToHaveClasses(button, ["h-8", "px-4", "text-base", "font-medium"]);
	});

	it("should render a size large button icon", async () => {
		render(
			<ButtonIcon size="large">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, ["h-12", "w-12", "p-2"]);
	});

	it("should render a size large button icon with a label on the right", async () => {
		render(
			<ButtonIcon size="large" labelRight="Settings">
				<IconSettings decorative />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const label = await screen.findByText("Settings");
		expect(label).toBeDefined();
		expectToHaveClasses(button, ["h-12", "px-4", "text-lg", "font-medium"]);
	});

	it("should render a size large button icon with a label on the left", async () => {
		render(
			<ButtonIcon size="large" labelLeft="Settings">
				<IconSettings decorative />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const label = await screen.findByText("Settings");
		expect(label).toBeDefined();
		expectToHaveClasses(button, ["h-12", "px-4", "text-lg", "font-medium"]);
	});
});
