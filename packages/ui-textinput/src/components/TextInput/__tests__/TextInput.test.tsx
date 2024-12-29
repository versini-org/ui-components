import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TEXT_INPUT_CLASSNAME, TextInput } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";

describe("TextInput (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(TextInput).toBeDefined();
	});
});

describe("TextInput spacing", () => {
	it("should render a text input with a right margin spacing", async () => {
		render(
			<TextInput
				label="toto"
				name="toto"
				className="mr-2"
				data-testid="txtnpt-1"
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).not.toContain("mr-2");
		if (input.parentElement) {
			// not only it should be there, but it should be the last entry
			expect(input.parentElement.className).toContain("mr-2");
			expect(input.parentElement.className).toContain("relative");
			expect(input.parentElement.className.slice(-4)).toBe("mr-2");
		}
	});
});

describe("TextInput sizes", () => {
	it.each`
		size    | description
		${"xs"} | ${"extra small"}
		${"sm"} | ${"small"}
		${"md"} | ${"medium"}
		${"lg"} | ${"large"}
		${"xl"} | ${"extra large"}
	`("should render a text input with size $description", async ({ size }) => {
		render(<TextInput label="hello world" name="toto" size={size} />);
		const label = await screen.findAllByText("hello world");
		const input = await screen.findByRole("textbox");

		expect(label[0]?.className).toContain("sr-only");
		expectToHaveClasses(label[1], [
			"absolute",
			"cursor-text",
			"font-medium",
			"text-copy-dark",
		]);
		let heightClass = "",
			paddingClass = "";
		switch (size) {
			case "xs":
				heightClass = "h-8";
				paddingClass = "px-4";
				break;
			case "sm":
				heightClass = "h-10";
				paddingClass = "px-4";
				break;
			case "md":
				heightClass = "h-12";
				paddingClass = "px-4";
				break;
			case "lg":
				heightClass = "h-14";
				paddingClass = "px-4";
				break;
			case "xl":
				heightClass = "h-16";
				paddingClass = "px-4";
				break;

			default:
				heightClass = "h-12";
				paddingClass = "px-4";
				break;
		}
		expectToHaveClasses(input, [
			TEXT_INPUT_CLASSNAME,
			"bg-surface-lighter",
			"border-2",
			"border-border-dark",
			"caret-copy-dark",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			heightClass,
			paddingClass,
			"rounded-md",
			"text-base",
			"text-copy-dark",
		]);
	});
});

describe("TextInput modifiers", () => {
	it("should render a dark or light (system) text input", async () => {
		render(<TextInput label="hello world" name="toto" />);
		const label = await screen.findAllByText("hello world");
		const input = await screen.findByRole("textbox");

		expect(label[0]?.className).toContain("sr-only");
		expectToHaveClasses(label[1], [
			"absolute",
			"cursor-text",
			"dark:text-copy-lighter",
			"font-medium",
			"text-copy-dark",
		]);
		expectToHaveClasses(input, [
			TEXT_INPUT_CLASSNAME,
			"bg-surface-lighter",
			"border-2",
			"border-border-dark",
			"caret-copy-dark",
			"dark:bg-surface-darker",
			"dark:caret-copy-light",
			"dark:focus:outline-focus-light",
			"dark:text-copy-lighter",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-12",
			"px-4",
			"rounded-md",
			"text-base",
			"text-copy-dark",
		]);
	});

	it("should render a light text input", async () => {
		render(<TextInput mode="light" label="hello world" name="toto" />);
		const label = await screen.findAllByText("hello world");
		const input = await screen.findByRole("textbox");

		expect(label[0]?.className).toContain("sr-only");
		expectToHaveClasses(label[1], [
			"absolute",
			"cursor-text",
			"font-medium",
			"text-copy-dark",
		]);
		expectToHaveClasses(input, [
			TEXT_INPUT_CLASSNAME,
			"bg-surface-lighter",
			"border-2",
			"border-border-dark",
			"caret-copy-dark",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-12",
			"px-4",
			"rounded-md",
			"text-base",
			"text-copy-dark",
		]);
	});

	it("should render a dark text input", async () => {
		render(<TextInput mode="dark" label="hello world" name="toto" />);
		const label = await screen.findAllByText("hello world");
		const input = await screen.findByRole("textbox");
		expect(label[0]?.className).toContain("sr-only");
		expectToHaveClasses(label[1], [
			"absolute",
			"cursor-text",
			"font-medium",
			"text-copy-lighter",
		]);
		expectToHaveClasses(input, [
			TEXT_INPUT_CLASSNAME,
			"bg-surface-darker",
			"border-2",
			"border-border-dark",
			"caret-copy-light",
			"dark:focus:outline-focus-light",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-12",
			"px-4",
			"rounded-md",
			"text-base",
			"text-copy-lighter",
		]);
	});

	it("should render a text input with an error message", async () => {
		render(
			<TextInput
				error
				helperText="error message"
				label="hello world"
				name="toto"
			/>,
		);
		const errorMessage = await screen.findByText("error message");
		expect(errorMessage.className).toContain("text-copy-error-light");
	});

	it("should render a text input with no borders", async () => {
		render(
			<TextInput label="toto" name="toto" noBorder data-testid="txtnpt-1" />,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toContain("border-transparent");
	});

	it("should render a text input with a hidden label", async () => {
		render(
			<TextInput
				label="hello world"
				name="toto"
				labelHidden
				data-testid="txtnpt-1"
			/>,
		);
		const label = await screen.findAllByText("hello world");
		expect(label.length).toBe(1);
	});

	it("should render a raw text input with no styling", async () => {
		render(<TextInput label="toto" name="toto" raw data-testid="txtnpt-1" />);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toBe("");
	});

	it("should render a text input with a wrapper class", async () => {
		render(
			<TextInput
				label="toto"
				name="toto"
				className="toto"
				data-testid="txtnpt-1"
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).not.toContain("toto");
		if (input.parentElement) {
			expectToHaveClasses(input.parentElement, [
				"toto",
				"w-full",
				"justify-center",
			]);
		}
	});

	it("should render a text input with a custom input class", async () => {
		render(
			<TextInput
				label="toto"
				name="toto"
				inputClassName="toto"
				data-testid="txtnpt-1"
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toContain("toto");
		expect(input.parentElement?.className).not.toContain("toto");
	});

	it("should render a text input with a right element", async () => {
		render(
			<TextInput
				label="toto"
				name="toto"
				rightElement={<div>right element</div>}
				data-testid="txtnpt-1"
			/>,
		);
		await screen.findByText("right element");
	});

	it("should render a text input with a right element custom class", async () => {
		render(
			<TextInput
				label="toto"
				name="toto"
				rightElementClassName="toto"
				rightElement={<div data-testid="txtnpt-1">right element</div>}
			/>,
		);
		const rightEl = (await screen.findByTestId("txtnpt-1")).parentElement;
		expect(rightEl?.className).toContain("toto");
		expect(rightEl?.className).toContain("absolute");
	});

	it("should render a disabled text input", async () => {
		render(<TextInput label="hello world" name="toto" disabled />);
		const label = await screen.findAllByText("hello world");

		expect(label[0]?.className).toContain("sr-only");
		expectToHaveClasses(label[1], [
			"px-2",
			"absolute",
			"cursor-not-allowed",
			"font-medium",
			"opacity-50",
		]);
	});
});

describe("TextInput methods", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("should honor the onChange prop", async () => {
		const events = {
			onChange: () => {},
		};
		const spyOnChange = vi.spyOn(events, "onChange");
		const user = userEvent.setup();
		render(
			<TextInput
				// @ts-ignore
				onChange={spyOnChange}
				label="hello world"
				name="toto"
				data-testid="txtnpt-1"
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		await user.type(input, "aa");

		expect(spyOnChange).toHaveBeenCalledTimes(2);
	});
});

describe("TextInput accessibility", () => {
	it("should render a text input with an error message", async () => {
		render(
			<TextInput
				error
				helperText="error message"
				label="hello world"
				name="toto"
			/>,
		);
		const errorMessage = await screen.findByText("error message");
		expect(errorMessage.className).toContain("text-copy-error-light");

		const input = await screen.findByLabelText("hello world");
		expect(input.getAttribute("aria-invalid")).toBe("true");
		expect(input.getAttribute("aria-describedby")).toContain("av-text-input-");
		expect(input.getAttribute("aria-describedby")).toContain("-helper");
	});

	it("should render a text input with a live region update", () => {
		vi.useFakeTimers();
		const clearTimeout = 500;

		render(
			<TextInput
				error
				helperText="error message"
				label="hello world"
				name="toto"
			/>,
		);
		const liveRegion = screen.getByText("toto error, error message");
		expect(liveRegion.getAttribute("aria-live")).toBe("polite");
		expect(liveRegion.textContent).toBe("toto error, error message");
		act(() => {
			vi.advanceTimersByTime(clearTimeout);
		});
		expect(liveRegion.textContent).toBe("");
	});
});
