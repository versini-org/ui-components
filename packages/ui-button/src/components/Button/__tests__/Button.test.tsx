import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import { BUTTON_CLASSNAME } from "../../../common/constants";

describe("Button (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Button).toBeDefined();
	});
});

describe("Button spacing", () => {
	it("should render a button with a right margin spacing", async () => {
		render(<Button className="mr-2">hello</Button>);
		const button = await screen.findByRole("button");
		// not only it should be there, but it should be the last entry
		expect(button.className).toContain("mr-2");
		expect(button.className.slice(-4)).toBe("mr-2");
	});
});

describe("Button modifiers", () => {
	it("should render a default button", async () => {
		render(<Button>hello</Button>);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"px-4",
			"py-1",
			"max-h-9",
			"text-base",
			"font-medium",
			"bg-action-dark",
			"text-copy-light",
			"hover:bg-action-dark-hover",
			"active:bg-action-dark-active",
			"rounded-full",
			"focus:outline-focus-dark",
			"dark:focus:outline-focus-light",
			"border",
			"border-border-dark",
		]);
	});

	it("should render a size small button", async () => {
		render(<Button size="small">hello</Button>);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, ["px-4", "py-0", "max-h-8"]);
	});

	it("should render a size medium button", async () => {
		render(<Button size="medium">hello</Button>);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, ["px-4", "py-1", "max-h-9"]);
	});

	it("should render a size large button", async () => {
		render(<Button size="large">hello</Button>);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, ["px-4", "py-2", "max-h-12"]);
	});

	it("should render a dark or light (system) button", async () => {
		render(<Button mode="system">hello</Button>);
		const button = await screen.findByRole("button");
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
			"font-medium",
			"hover:bg-action-dark-hover",
			"hover:text-copy-light-hover",
			"max-h-9",
			"not-prose",
			"px-4",
			"py-1",
			"rounded-full",
			"text-base",
			"text-copy-light",
		]);
	});

	it("should render a dark or light (alt-system) button", async () => {
		render(<Button mode="alt-system">hello</Button>);
		const button = await screen.findByRole("button");
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
			"font-medium",
			"hover:bg-action-light-hover",
			"hover:text-copy-light-hover",
			"max-h-9",
			"not-prose",
			"px-4",
			"py-1",
			"rounded-full",
			"text-base",
			"text-copy-lighter",
		]);
	});

	it("should render a light button", async () => {
		render(<Button mode="light">hello</Button>);
		const button = await screen.findByRole("button");
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
			"font-medium",
			"hover:bg-action-light-hover",
			"hover:text-copy-light-hover",
			"max-h-9",
			"not-prose",
			"px-4",
			"py-1",
			"rounded-full",
			"text-base",
			"text-copy-lighter",
		]);
	});

	it("should render a dark button", async () => {
		render(<Button mode="dark">hello</Button>);
		const button = await screen.findByRole("button");
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
			"font-medium",
			"hover:bg-action-dark-hover",
			"hover:text-copy-light-hover",
			"max-h-9",
			"not-prose",
			"px-4",
			"py-1",
			"rounded-full",
			"text-base",
			"text-copy-light",
		]);
	});

	it("should render a dark button with variant 'secondary'", async () => {
		render(
			<Button mode="dark" variant="secondary">
				hello
			</Button>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"not-prose",
			"rounded-full",
			"bg-action-light",
			"text-copy-lighter",
			"px-4",
			"text-base",
			"font-medium",
			"max-h-9",
			"py-1",
			"border",
			"border-border-accent",
			"focus:outline",
			"focus:outline-2",
			"focus:outline-offset-2",
			"focus:outline-focus-dark",
			"dark:focus:outline-focus-light",
			"hover:text-copy-light-hover",
			"hover:bg-action-light-hover",
			"active:text-copy-light-active",
			"active:bg-action-light-active",
		]);
	});

	it("should render a light button with variant 'secondary'", async () => {
		render(
			<Button mode="light" variant="secondary">
				hello
			</Button>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"not-prose",
			"rounded-full",
			"bg-action-dark",
			"text-copy-light",
			"px-4",
			"text-base",
			"font-medium",
			"max-h-9",
			"py-1",
			"border",
			"border-border-dark",
			"focus:outline",
			"focus:outline-2",
			"focus:outline-offset-2",
			"focus:outline-focus-dark",
			"dark:focus:outline-focus-light",
			"hover:text-copy-light-hover",
			"hover:bg-action-dark-hover",
			"active:text-copy-light-active",
			"active:bg-action-dark-active",
		]);
	});

	it("should render a dark button with variant 'danger'", async () => {
		render(
			<Button mode="dark" variant="danger">
				hello
			</Button>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"not-prose",
			"rounded-full",
			"bg-action-danger-dark",
			"text-copy-light",
			"px-4",
			"text-base",
			"font-medium",
			"max-h-9",
			"py-1",
			"border",
			"border-border-danger-dark",
			"focus:outline",
			"focus:outline-2",
			"focus:outline-offset-2",
			"focus:outline-focus-dark",
			"dark:focus:outline-focus-light",
			"hover:text-copy-light-hover",
			"hover:bg-action-danger-dark-hover",
			"active:text-copy-lighter-active",
			"active:bg-action-danger-dark-active",
		]);
	});

	it("should render a light button with variant 'danger'", async () => {
		render(
			<Button mode="light" variant="danger">
				hello
			</Button>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"not-prose",
			"rounded-full",
			"bg-action-danger-light",
			"text-copy-lighter",
			"px-4",
			"text-base",
			"font-medium",
			"max-h-9",
			"py-1",
			"border",
			"border-border-danger-medium",
			"focus:outline",
			"focus:outline-2",
			"focus:outline-offset-2",
			"focus:outline-focus-dark",
			"dark:focus:outline-focus-light",
			"hover:text-copy-light-hover",
			"hover:bg-action-danger-light-hover",
			"active:text-copy-lighter-active",
			"active:bg-action-danger-light-active",
		]);
	});

	it("should render a dark button with variant 'selected'", async () => {
		render(
			<Button mode="dark" variant="selected">
				hello
			</Button>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"not-prose",
			"rounded-full",
			"bg-action-selected-dark",
			"text-copy-light",
			"px-4",
			"text-base",
			"font-medium",
			"max-h-9",
			"py-1",
			"border",
			"border-border-selected-dark",
			"focus:outline",
			"focus:outline-2",
			"focus:outline-offset-2",
			"focus:outline-focus-dark",
			"dark:focus:outline-focus-light",
			"hover:text-copy-light-hover",
			"hover:bg-action-selected-dark-hover",
			"active:text-copy-lighter-active",
			"active:bg-action-selected-dark-active",
		]);
	});

	it("should render a light button with variant 'selected'", async () => {
		render(
			<Button mode="light" variant="selected">
				hello
			</Button>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"not-prose",
			"rounded-full",
			"bg-action-selected-light",
			"text-copy-lighter",
			"px-4",
			"text-base",
			"font-medium",
			"max-h-9",
			"py-1",
			"border",
			"border-border-selected-medium",
			"focus:outline",
			"focus:outline-2",
			"focus:outline-offset-2",
			"focus:outline-focus-dark",
			"dark:focus:outline-focus-light",
			"hover:text-copy-light-hover",
			"hover:bg-action-selected-light-hover",
			"active:text-copy-lighter-active",
			"active:bg-action-selected-light-active",
		]);
	});

	it("should render a disabled dark button", async () => {
		render(
			<Button mode="dark" disabled>
				hello
			</Button>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			"bg-action-dark",
			"text-copy-light",
			"disabled:opacity-50",
			"disabled:cursor-not-allowed",
		]);
	});

	it("should render a disabled light button", async () => {
		render(
			<Button mode="light" disabled>
				hello
			</Button>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			"bg-action-light",
			"text-copy-lighter",
			"disabled:opacity-50",
			"disabled:cursor-not-allowed",
		]);
	});

	it("should render a fullWidth button", async () => {
		render(<Button fullWidth>hello</Button>);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("w-full");
	});

	it("should render a button with no borders", async () => {
		render(<Button noBorder>hello</Button>);
		const button = await screen.findByRole("button");
		expect(button.className).not.toContain("border-border-dark");
		expect(button.className).toContain("border-transparent");
	});

	it("should render a raw button with no styling", async () => {
		render(<Button raw>hello</Button>);
		const button = await screen.findByRole("button");
		expect(button.className).toBe("av-button");
	});
});

describe("Button methods", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("should honor the onClick prop", async () => {
		const events = {
			onClick: () => {},
		};
		const spyOnClick = vi.spyOn(events, "onClick");
		const user = userEvent.setup();

		// @ts-ignore
		render(<Button onClick={spyOnClick}>hello</Button>);
		const button = await screen.findByRole("button");
		await user.click(button);
		await user.click(button);

		expect(spyOnClick).toHaveBeenCalledTimes(2);
	});

	it("should implement a focus method via the ref prop", () => {
		const buttonRef = (ref: HTMLButtonElement) => {
			if (ref) {
				expect(ref.focus).toBeDefined();
			}
		};
		render(<Button ref={buttonRef}>Button</Button>);
	});
});
