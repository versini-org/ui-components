import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TextArea } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import {
	TEXT_AREA_CLASSNAME,
	TEXT_AREA_CONTROL_RIGHT_CLASSNAME,
} from "../../../common/constants";

describe("TextArea (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(TextArea).toBeDefined();
	});
});

describe("TextArea modifiers", () => {
	it("should render a dark or light (system) text area", async () => {
		render(<TextArea label="hello world" name="toto" />);
		const label = await screen.findAllByText("hello world");
		const input = await screen.findByRole("textbox");

		expect(label[0].className).toContain("sr-only");
		expectToHaveClasses(label[1], [
			"absolute",
			"cursor-text",
			"dark:text-copy-lighter",
			"font-medium",
			"text-copy-dark",
		]);
		expectToHaveClasses(input, [
			TEXT_AREA_CLASSNAME,
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
			"h-20",
			"min-h-[80px]",
			"overflow-hidden",
			"px-4",
			"py-7",
			"resize-none",
			"rounded-md",
			"text-base",
			"text-copy-dark",
		]);
	});

	it("should render a light text area", async () => {
		render(<TextArea mode="light" label="hello world" name="toto" />);
		const label = await screen.findAllByText("hello world");
		const input = await screen.findByRole("textbox");

		expect(label[0].className).toContain("sr-only");
		expectToHaveClasses(label[1], [
			"absolute",
			"cursor-text",
			"font-medium",
			"text-copy-dark",
		]);
		expectToHaveClasses(input, [
			TEXT_AREA_CLASSNAME,
			"bg-surface-lighter",
			"border-2",
			"border-border-dark",
			"caret-copy-dark",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-20",
			"min-h-[80px]",
			"overflow-hidden",
			"px-4",
			"py-7",
			"resize-none",
			"rounded-md",
			"text-base",
			"text-copy-dark",
		]);
	});

	it("should render a dark text area", async () => {
		render(<TextArea mode="dark" label="hello world" name="toto" />);
		const label = await screen.findAllByText("hello world");
		const input = await screen.findByRole("textbox");

		expect(label[0].className).toContain("sr-only");
		expectToHaveClasses(label[1], [
			"absolute",
			"cursor-text",
			"font-medium",
			"text-copy-lighter",
		]);
		expectToHaveClasses(input, [
			TEXT_AREA_CLASSNAME,
			"bg-surface-darker",
			"border-2",
			"border-border-dark",
			"caret-copy-light",
			"dark:focus:outline-focus-light",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-20",
			"min-h-[80px]",
			"overflow-hidden",
			"px-4",
			"py-7",
			"resize-none",
			"rounded-md",
			"text-base",
			"text-copy-lighter",
		]);
	});

	it("should render a text area with an error message", async () => {
		render(
			<TextArea
				error
				helperText="error message"
				label="hello world"
				name="toto"
			/>,
		);
		const errorMessage = await screen.findByText("error message");
		expect(errorMessage.className).toContain("text-copy-error-light");
	});

	it("should render a text area with no borders", async () => {
		render(
			<TextArea label="toto" name="toto" noBorder data-testid="txtnpt-1" />,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toContain("border-transparent");
	});

	it("should render a raw text area with no styling", async () => {
		render(<TextArea label="toto" name="toto" raw data-testid="txtnpt-1" />);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toBe("");
	});

	it("should render a text area with a wrapper class", async () => {
		render(
			<TextArea
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

	it("should render a text area with an textarea class", async () => {
		render(
			<TextArea
				label="toto"
				name="toto"
				textAreaClassName="toto"
				data-testid="txtnpt-1"
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toContain("toto");
		expect(input.parentElement?.className).not.toContain("toto");
	});

	it("should render a text area with a right element", async () => {
		render(
			<TextArea
				label="toto"
				name="toto"
				rightElement={<div>right element</div>}
				data-testid="txtnpt-1"
			/>,
		);
		const rightElement = await screen.findByText("right element");
		expect(rightElement?.parentElement?.className).toContain(
			TEXT_AREA_CONTROL_RIGHT_CLASSNAME,
		);
	});

	it("should render a text area with a helper text", async () => {
		render(
			<TextArea
				label="toto"
				name="toto"
				helperText="helper text"
				data-testid="txtnpt-1"
			/>,
		);
		const helperText = await screen.findByText("helper text");
		expect(helperText.className).toContain("av-text-area-helper-text");
	});

	it("should render a text area with a helper text on focus only", async () => {
		const user = userEvent.setup();
		render(
			<TextArea
				label="toto"
				name="toto"
				helperText="helper text"
				helperTextOnFocus
				data-testid="txtnpt-1"
			/>,
		);

		await waitFor(() => {
			expect(screen.queryByText("helper text")).not.toBeInTheDocument();
		});
		const input = await screen.findByTestId("txtnpt-1");
		await user.type(input, "aa");
		expect(screen.queryByText("helper text")).toBeInTheDocument();

		await user.clear(input);
		await user.tab();
		await waitFor(() => {
			expect(screen.queryByText("helper text")).not.toBeInTheDocument();
		});
	});
});

describe("TextArea methods", () => {
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
			<TextArea
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

	it("should honor the onFocus prop", async () => {
		const events = {
			onFocus: () => {},
		};
		const spyOnFocus = vi.spyOn(events, "onFocus");
		const user = userEvent.setup();
		render(
			<TextArea
				// @ts-ignore
				onFocus={spyOnFocus}
				label="hello world"
				name="toto"
				data-testid="txtnpt-1"
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		await user.type(input, "aa");

		expect(spyOnFocus).toHaveBeenCalledTimes(1);
	});

	it("should honor the onBlur prop", async () => {
		const events = {
			onBlur: () => {},
		};
		const spyOnBlur = vi.spyOn(events, "onBlur");
		const user = userEvent.setup();
		render(
			<TextArea
				// @ts-ignore
				onBlur={spyOnBlur}
				label="hello world"
				name="toto"
				data-testid="txtnpt-1"
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		await user.type(input, "aa");
		await user.tab();

		expect(spyOnBlur).toHaveBeenCalledTimes(1);
	});
});

describe("TextArea accessibility", () => {
	it("should render a text area with an error message", async () => {
		render(
			<TextArea
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
		expect(input.getAttribute("aria-describedby")).toContain("av-text-area-");
		expect(input.getAttribute("aria-describedby")).toContain("-helper");
	});

	it("should render a text area with a live region update", () => {
		vi.useFakeTimers();
		const clearTimeout = 500;

		render(
			<TextArea
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
