/* eslint-disable @typescript-eslint/ban-ts-comment */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../..";

const expectToHaveClasses = (element: HTMLElement, classes: string[]) => {
	const elementClasses = element.className.split(" ").sort();
	classes.forEach((expectedClass) => {
		expect(elementClasses).toContain(expectedClass);
	});
};

describe("Button (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Button).toBeDefined();
	});
});

describe("Button modifiers", () => {
	it("should render a default button", async () => {
		render(<Button>hello</Button>);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			"av-button",
			"px-4",
			"py-2",
			"text-sm",
			"font-medium",
			"sm:text-base",
			"bg-slate-900",
			"text-slate-200",
			"hover:bg-slate-800",
			"active:bg-slate-700",
			"rounded-full",
			"focus:outline-none",
			"focus:ring-2",
			"focus:ring-slate-300",
			"focus:ring-offset-0",
		]);
	});

	it("should render a slim button", async () => {
		render(<Button slim>hello</Button>);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, ["px-2", "py-1", "sm:px-4"]);
	});

	it("should render a dark button", async () => {
		render(<Button kind="dark">hello</Button>);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, ["bg-slate-900", "text-slate-200"]);
	});

	it("should render a light button", async () => {
		render(<Button kind="light">hello</Button>);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, ["bg-slate-500", "text-slate-200"]);
	});

	it("should render a disabled dark button", async () => {
		render(
			<Button kind="dark" disabled>
				hello
			</Button>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			"disabled:opacity-50",
			"disabled:cursor-not-allowed",
		]);
	});

	it("should render a disabled light button", async () => {
		render(
			<Button kind="light" disabled>
				hello
			</Button>,
		);
		const button = await screen.findByRole("button");
		expectToHaveClasses(button, [
			"disabled:opacity-50",
			"disabled:cursor-not-allowed",
		]);
	});

	it("should render a fullWidth button", async () => {
		render(<Button fullWidth>hello</Button>);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("w-full");
	});

	it("should render a raw button with no styling", async () => {
		render(<Button raw>hello</Button>);
		const button = await screen.findByRole("button");
		expect(button.className).toContain("av-button");
		expect(button.className).not.toContain("py-2");
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
