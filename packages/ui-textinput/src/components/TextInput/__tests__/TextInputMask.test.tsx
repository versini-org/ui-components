import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { TextInputMask } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";

const MyButtonIcon = ({
	children,
	noInternalClick,
	focusMode,
	mode,
	label,
	...props
}: any) => (
	<button aria-label={label} {...props}>
		{children}
	</button>
);
MyButtonIcon.displayName = "ButtonIcon";

const MyIconHide = () => (
	<svg>
		<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
	</svg>
);

function renderWithUserEvent(jsx: React.ReactElement) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

describe("TextInputMask (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(TextInputMask).toBeDefined();
	});
});

describe("TextInputMask spacing", () => {
	it("should render a text input with a right margin spacing", async () => {
		render(
			<TextInputMask
				label="toto"
				name="toto"
				className="mr-2"
				data-testid="txtnpt-1"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
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

describe("TextInputMask modifiers", () => {
	it("should render a dark or light (system) text input", async () => {
		render(
			<TextInputMask
				label="hello world"
				name="toto"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);
		const label = await screen.findAllByText("hello world");

		expectToHaveClasses(label[1], [
			"absolute",
			"cursor-text",
			"dark:text-copy-lighter",
			"font-medium",
			"text-copy-dark",
		]);
	});

	it("should render a text input with an error message", async () => {
		render(
			<TextInputMask
				error
				helperText="error message"
				label="hello world"
				name="toto"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);
		const errorMessage = await screen.findByText("error message");
		expect(errorMessage.className).toContain("text-copy-error-light");
	});

	it("should render a text input with no borders", async () => {
		render(
			<TextInputMask
				label="toto"
				name="toto"
				noBorder
				data-testid="txtnpt-1"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toContain("border-transparent");
	});

	it("should render a text input with a hidden label", async () => {
		render(
			<TextInputMask
				label="hello world"
				name="toto"
				labelHidden
				data-testid="txtnpt-1"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);
		const label = await screen.findAllByText("hello world");
		screen.debug(label);
		expect(label.length).toBe(1);
	});

	it("should render a raw text input with no styling", async () => {
		render(
			<TextInputMask
				label="toto"
				name="toto"
				raw
				data-testid="txtnpt-1"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toBe("");
	});

	it("should render a text input with a wrapper class", async () => {
		render(
			<TextInputMask
				label="toto"
				name="toto"
				className="toto"
				data-testid="txtnpt-1"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
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

	it("should render a text input with a custom class", async () => {
		render(
			<TextInputMask
				label="toto"
				name="toto"
				inputClassName="toto"
				data-testid="txtnpt-1"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toContain("toto");
		expect(input.parentElement?.className).not.toContain("toto");
	});

	it("should render a disabled text input", async () => {
		render(
			<TextInputMask
				disabled
				label="hello world"
				name="toto"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);
		const label = await screen.findAllByText("hello world");

		expectToHaveClasses(label[1], [
			"px-2",
			"absolute",
			"cursor-not-allowed",
			"font-medium",
			"opacity-50",
		]);
	});
});

describe("TextInputMask methods", () => {
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
			<TextInputMask
				// @ts-ignore
				onChange={spyOnChange}
				label="hello world"
				name="toto"
				data-testid="txtnpt-1"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		await user.type(input, "aa");

		expect(spyOnChange).toHaveBeenCalledTimes(2);
	});

	it("should call the `onMaskChange` function with correct parameters on Show/Hide button click", () => {
		const onMaskChangeHandler = vi.fn();

		render(
			<TextInputMask
				name="hello"
				label="hello world"
				onMaskChange={onMaskChangeHandler}
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		const button = screen.getByRole("button");
		fireEvent.click(button);
		expect(onMaskChangeHandler).toHaveBeenCalledWith(false);
		fireEvent.click(button);
		expect(onMaskChangeHandler).toHaveBeenCalledWith(true);
	});

	it("should call the `onTextInputMaskBlur` callback when focus moves from the input outside the component", async () => {
		const onTextInputMaskBlurMock = vi.fn();

		const { user } = renderWithUserEvent(
			<TextInputMask
				name="hello"
				label="hello world"
				data-testid="txtnptmsk-1"
				onTextInputMaskBlur={onTextInputMaskBlurMock}
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		const input = screen.getByTestId("txtnptmsk-1");

		await user.type(input, "aa");
		expect(input).toHaveFocus();

		await user.clear(input);
		await user.tab({ shift: true });
		expect(document.body).toHaveFocus();
		expect(onTextInputMaskBlurMock).toHaveBeenCalledTimes(1);
	});

	it("should call the `onTextInputMaskBlur` callback when focus moves from the Show/Hide button outside the component", async () => {
		const onTextInputMaskBlurMock = vi.fn();

		const { user } = renderWithUserEvent(
			<TextInputMask
				name="hello"
				label="hello world"
				data-testid="txtnptmsk-1"
				onTextInputMaskBlur={onTextInputMaskBlurMock}
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		const input = screen.getByTestId("txtnptmsk-1");
		const button = screen.getByRole("button");

		await user.clear(input);
		await user.tab();
		expect(button).toHaveFocus();

		await user.tab();
		expect(document.body).toHaveFocus();
		expect(onTextInputMaskBlurMock).toHaveBeenCalledTimes(1);
	});

	it("should not call the `onTextInputMaskBlur` callback when focus moves from the input to the Show/Hide button", async () => {
		const onTextInputMaskBlurMock = vi.fn();

		const { user } = renderWithUserEvent(
			<TextInputMask
				name="hello"
				label="hello world"
				data-testid="txtnptmsk-1"
				onTextInputMaskBlur={onTextInputMaskBlurMock}
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		const input = screen.getByTestId("txtnptmsk-1");
		const button = screen.getByRole("button");

		await user.clear(input);
		await user.tab();

		expect(button).toHaveFocus();
		expect(onTextInputMaskBlurMock).not.toHaveBeenCalled();
	});

	it("should not call the `onTextInputMaskBlur` callback when focus moves from the Show/Hide button back to the input", async () => {
		const onTextInputMaskBlurMock = vi.fn();

		const { user } = renderWithUserEvent(
			<TextInputMask
				name="hello"
				label="hello world"
				data-testid="txtnptmsk-1"
				onTextInputMaskBlur={onTextInputMaskBlurMock}
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		const input = screen.getByTestId("txtnptmsk-1");
		const button = screen.getByRole("button");

		await user.clear(input);
		await user.tab();
		expect(button).toHaveFocus();

		await user.tab({ shift: true });
		expect(input).toHaveFocus();
		expect(onTextInputMaskBlurMock).not.toHaveBeenCalled();
	});

	it("should call the `onBlur` callback when focus moves from the input", async () => {
		const onBlurMock = vi.fn();
		const { user } = renderWithUserEvent(
			<TextInputMask
				name="hello"
				label="hello world"
				data-testid="txtnptmsk-1"
				onBlur={onBlurMock}
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		const input = screen.getByTestId("txtnptmsk-1");
		await user.clear(input);
		await user.tab();

		expect(onBlurMock).toHaveBeenCalled();
	});

	it("should call the `onFocus` callback when focus moves into the input", async () => {
		const onFocusMock = vi.fn();
		const { user } = renderWithUserEvent(
			<TextInputMask
				name="hello"
				label="hello world"
				data-testid="txtnptmsk-1"
				onFocus={onFocusMock}
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		const input = screen.getByTestId("txtnptmsk-1");
		await user.clear(input);

		expect(onFocusMock).toHaveBeenCalled();
	});
});

describe("TextInputMask accessibility", () => {
	it("should render a text input with an error message", async () => {
		render(
			<TextInputMask
				error
				helperText="error message"
				label="hello world"
				name="toto"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
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
			<TextInputMask
				error
				helperText="error message"
				label="hello world"
				name="toto"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
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

describe("TextInputMask show/hide button tests", () => {
	it("should initially render with 'Show' Button label", () => {
		render(
			<TextInputMask
				name="hello"
				label="hello world"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		screen.debug();
		const buttonLabel = screen.getByLabelText("Show");
		expect(buttonLabel).toBeInTheDocument();
	});

	it("should toggle the button label to 'Hide'", () => {
		render(
			<TextInputMask
				name="hello"
				label="hello world"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		let buttonLabel = screen.getByLabelText("Show");
		expect(buttonLabel).toBeInTheDocument();
		const button = screen.getByRole("button");
		fireEvent.click(button);
		buttonLabel = screen.getByLabelText("Hide");
		expect(buttonLabel).toBeInTheDocument();
	});

	it("should announce the default 'Characters showing' text when the 'Show' button is clicked", () => {
		render(
			<TextInputMask
				name="hello"
				label="hello world"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		const buttonLabel = screen.getByLabelText("Show");
		expect(buttonLabel).toBeInTheDocument();
		const button = screen.getByRole("button");
		fireEvent.click(button);
		const announcementContainer = screen.queryByRole("status");
		expect(announcementContainer).toHaveTextContent("Characters showing");
	});

	it("should toggle the button label back to 'Show'", () => {
		render(
			<TextInputMask
				name="hello"
				label="hello world"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		let buttonLabel = screen.getByLabelText("Show");
		expect(buttonLabel).toBeInTheDocument();
		const button = screen.getByRole("button");
		fireEvent.click(button);
		buttonLabel = screen.getByLabelText("Hide");
		expect(buttonLabel).toBeInTheDocument();
		fireEvent.click(button);
		buttonLabel = screen.getByLabelText("Show");
		expect(buttonLabel).toBeInTheDocument();
	});
});

describe("TextInputMask timer tests", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});
	it("should mask characters after a delay", () => {
		vi.useFakeTimers();

		render(
			<TextInputMask
				data-testid="txtnptmsk-1"
				name="hello"
				label="hello world"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		const buttonLabel = screen.getByLabelText("Show");
		expect(buttonLabel).toBeInTheDocument();
		const button = screen.getByRole("button");
		const input = screen.getByTestId("txtnptmsk-1");
		expect(input).toHaveAttribute("type", "password");

		fireEvent.click(button);

		expect(input).toHaveAttribute("type", "text");

		act(() => {
			vi.advanceTimersByTime(20000);
		});
		expect(input).toHaveAttribute("type", "password");
	});

	it("should mask characters after an extended delay when focus/keypress", () => {
		vi.useFakeTimers();
		render(
			<TextInputMask
				data-testid="txtnptmsk-1"
				name="hello"
				label="hello world"
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		const buttonLabel = screen.getByLabelText("Show");
		expect(buttonLabel).toBeInTheDocument();

		const button = screen.getByRole("button");
		const input = screen.getByTestId("txtnptmsk-1");
		expect(input).toHaveAttribute("type", "password");
		fireEvent.click(button);
		expect(input).toHaveAttribute("type", "text");

		act(() => {
			vi.advanceTimersByTime(10000);
			fireEvent.change(input, { target: { value: "hello" } });
			vi.advanceTimersByTime(10000);
		});
		expect(input).toHaveAttribute("type", "text");

		act(() => {
			vi.advanceTimersByTime(20000);
		});
		expect(input).toHaveAttribute("type", "password");

		fireEvent.click(button);
		expect(input).toHaveAttribute("type", "text");

		act(() => {
			vi.advanceTimersByTime(10000);
			fireEvent.change(input, { target: { value: "" } });
			vi.advanceTimersByTime(10000);
		});
		expect(input).toHaveAttribute("type", "text");

		act(() => {
			vi.advanceTimersByTime(20000);
		});
		expect(input).toHaveAttribute("type", "password");

		fireEvent.click(button);
		expect(input).toHaveAttribute("type", "text");
		act(() => {
			vi.advanceTimersByTime(10000);

			// need to focus and blur to reset the internal timeout
			fireEvent.focus(input);
			fireEvent.blur(input);

			vi.advanceTimersByTime(10000);
		});
		expect(input).toHaveAttribute("type", "text");
	});

	it("should call the `onMaskChange` function with correct parameters after a delay", () => {
		const onMaskChangeHandler = vi.fn();

		render(
			<TextInputMask
				data-testid="txtnptmsk-1"
				name="hello"
				label="hello world"
				onMaskChange={onMaskChangeHandler}
				rightElement={
					<MyButtonIcon>
						<MyIconHide />
					</MyButtonIcon>
				}
			/>,
		);

		const button = screen.getByRole("button");
		fireEvent.click(button);
		expect(onMaskChangeHandler).toHaveBeenCalledWith(false);
		act(() => {
			vi.advanceTimersByTime(20000);
		});
		expect(onMaskChangeHandler).toHaveBeenCalledWith(true);
	});
});
