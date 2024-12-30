import { render, screen } from "@testing-library/react";
import { SvgIcon } from "@versini/ui-svgicon";

import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import { BUTTON_CLASSNAME } from "../../../common/constants";
import { ButtonIcon } from "../ButtonIcon";

const IconSettings = ({
	className,
	viewBox,
	title,
	monotone,
	...rest
}: any) => {
	return (
		<SvgIcon
			defaultViewBox="0 0 448 512"
			size="size-5"
			viewBox={viewBox}
			className={className}
			title={title || "Settings"}
			{...rest}
		>
			<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
		</SvgIcon>
	);
};

describe("ButtonIcon (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(ButtonIcon).toBeDefined();
	});
});

describe("ButtonIcon modifiers", () => {
	it("should render a dark or light (system) button icon", async () => {
		render(
			<ButtonIcon>
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("p-1");
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"active:bg-action-dark-active",
			"active:text-copy-light-active",
			"bg-action-dark",
			"border-border-dark",
			"border",
			"dark:active:bg-action-light-active",
			"dark:bg-action-light",
			"dark:border-border-accent",
			"dark:focus:outline-focus-light",
			"dark:hover:bg-action-light-hover",
			"dark:text-copy-lighter",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-8",
			"hover:bg-action-dark-hover",
			"hover:text-copy-light-hover",
			"inline-flex",
			"items-center",
			"justify-center",
			"not-prose",
			"p-1",
			"rounded-full",
			"text-copy-light",
			"w-8",
		]);
	});

	it("should render a dark or light (alt-system) button icon", async () => {
		render(
			<ButtonIcon mode="alt-system">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("p-1");
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"active:bg-action-light-active",
			"active:text-copy-light-active",
			"bg-action-light",
			"border-border-accent",
			"border",
			"dark:active:bg-action-dark-active",
			"dark:bg-action-dark",
			"dark:border-border-dark",
			"dark:focus:outline-focus-light",
			"dark:hover:bg-action-dark-hover",
			"dark:text-copy-light",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-8",
			"hover:bg-action-light-hover",
			"hover:text-copy-light-hover",
			"inline-flex",
			"items-center",
			"justify-center",
			"not-prose",
			"p-1",
			"rounded-full",
			"text-copy-lighter",
			"w-8",
		]);
	});

	it("should render a dark button icon", async () => {
		render(
			<ButtonIcon mode="dark">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("p-1");
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"active:bg-action-dark-active",
			"active:text-copy-light-active",
			"bg-action-dark",
			"border-border-dark",
			"border",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-8",
			"hover:bg-action-dark-hover",
			"hover:text-copy-light-hover",
			"inline-flex",
			"items-center",
			"justify-center",
			"not-prose",
			"p-1",
			"rounded-full",
			"text-copy-light",
			"w-8",
		]);
	});

	it("should render a light button icon", async () => {
		render(
			<ButtonIcon mode="light">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("p-1");
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"active:bg-action-light-active",
			"active:text-copy-light-active",
			"bg-action-light",
			"border-border-accent",
			"border",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-8",
			"hover:bg-action-light-hover",
			"hover:text-copy-light-hover",
			"inline-flex",
			"items-center",
			"justify-center",
			"not-prose",
			"p-1",
			"rounded-full",
			"text-copy-lighter",
			"w-8",
		]);
	});

	it("should render a disabled dark button icon", async () => {
		render(
			<ButtonIcon mode="dark" disabled>
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
			<ButtonIcon mode="light" disabled>
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

	it("should render a button icon with no background", async () => {
		render(
			<ButtonIcon noBackground>
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("not-prose");
		expect(button.className).toContain("rounded-full");
	});

	it("should render a left-aligned button icon", async () => {
		render(
			<ButtonIcon align="left">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("justify-start");
	});

	it("should render a right-aligned button icon", async () => {
		render(
			<ButtonIcon align="right">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("justify-end");
	});

	it("should render a center-aligned button icon", async () => {
		render(
			<ButtonIcon align="center">
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("justify-center");
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
				<IconSettings />
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
				<IconSettings />
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
				<IconSettings />
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
				<IconSettings />
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
				<IconSettings />
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
				<IconSettings />
			</ButtonIcon>,
		);
		const button = await screen.findByRole("button");
		const label = await screen.findByText("Settings");
		expect(label).toBeDefined();
		expectToHaveClasses(button, ["h-12", "px-4", "text-lg", "font-medium"]);
	});
});
