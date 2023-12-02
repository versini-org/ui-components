/* eslint-disable @typescript-eslint/ban-ts-comment */

import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { TextInputMask } from "../..";

describe("TextInputMask (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(TextInputMask).toBeDefined();
	});
});

describe("TextInputMask modifiers", () => {
	it("should render a default text input", async () => {
		render(<TextInputMask label="hello world" name="toto" />);
		const input = await screen.findAllByText("hello world");
		expect(input[0].className).toContain("av-visually-hidden");
		expectToHaveClasses(input[1], ["cursor-text", "text-copy-medium"]);
	});

	it("should render a text input with an error message", async () => {
		render(
			<TextInputMask
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
			<TextInputMask
				label="toto"
				name="toto"
				noBorder
				data-testid="txtnpt-1"
			/>,
		);
		const input = await screen.findByTestId("txtnpt-1");
		expect(input.className).toContain("border-transparent");
	});

	it("should render a raw text input with no styling", async () => {
		render(
			<TextInputMask label="toto" name="toto" raw data-testid="txtnpt-1" />,
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

	it("should render a text input with an input class", async () => {
		render(
			<TextInputMask
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

	it.skip("should call the `onMaskChange` function with correct parameters on Show/Hide button click", async () => {
		const user = userEvent.setup();
		const onMaskChangeHandler = jest.fn();
		await act(async () => {
			render(
				<ThemeProvider>
					<TextInputMask
						name="hello"
						label="hello world"
						onMaskChange={onMaskChangeHandler}
					/>
				</ThemeProvider>,
			);
		});
		const button = screen.getByRole("button");
		await user.click(button);
		expect(onMaskChangeHandler).toHaveBeenCalledWith({
			e: expect.anything(),
			masked: false,
		});
		await user.click(button);
		expect(onMaskChangeHandler).toHaveBeenCalledWith({
			e: expect.anything(),
			masked: true,
		});
	});
	it.skip("should handle the onTextInputMaskBlur blur event when focus moves from the input outside the component", async () => {
		const user = userEvent.setup();
		const onTextInputMaskBlurMock = jest.fn();
		await act(async () => {
			render(
				<ThemeProvider>
					<TextInputMask
						name="hello"
						label="hello world"
						data-testid="txtnptmsk-1"
						onTextInputMaskBlur={onTextInputMaskBlurMock}
					/>
				</ThemeProvider>,
			);
		});

		const input = screen.getByTestId("txtnptmsk-1");

		await user.clear(input);
		await user.tab({ shift: true });

		expect(document.body).toHaveFocus();
		expect(onTextInputMaskBlurMock).toHaveBeenCalledTimes(1);
	});
	it.skip("should handle the onTextInputMaskBlur blur event when focus moves from the Show/Hide button outside the component", async () => {
		const user = userEvent.setup();
		const onTextInputMaskBlurMock = jest.fn();
		await act(async () => {
			render(
				<ThemeProvider>
					<TextInputMask
						name="hello"
						label="hello world"
						data-testid="txtnptmsk-1"
						onTextInputMaskBlur={onTextInputMaskBlurMock}
					/>
				</ThemeProvider>,
			);
		});

		const input = screen.getByTestId("txtnptmsk-1");
		const button = screen.getByRole("button");

		await user.clear(input);
		await user.tab();

		expect(button).toHaveFocus();

		await user.tab();

		expect(document.body).toHaveFocus();
		expect(onTextInputMaskBlurMock).toHaveBeenCalledTimes(1);
	});
	it.skip("should not handle the onTextInputMaskBlur blur event when focus moves from the input to the Show/Hide button", async () => {
		const user = userEvent.setup();
		const onTextInputMaskBlurMock = jest.fn();
		await act(async () => {
			render(
				<ThemeProvider>
					<TextInputMask
						name="hello"
						label="hello world"
						data-testid="txtnptmsk-1"
						onTextInputMaskBlur={onTextInputMaskBlurMock}
					/>
				</ThemeProvider>,
			);
		});

		const input = screen.getByTestId("txtnptmsk-1");
		const button = screen.getByRole("button");

		await user.clear(input);
		await user.tab();

		expect(button).toHaveFocus();

		expect(onTextInputMaskBlurMock).not.toHaveBeenCalled();
	});
	it.skip("should not handle the onTextInputMaskBlur blur event when focus moves from the Show/Hide button to the input", async () => {
		const user = userEvent.setup();
		const onTextInputMaskBlurMock = jest.fn();
		await act(async () => {
			render(
				<ThemeProvider>
					<TextInputMask
						name="hello"
						label="hello world"
						data-testid="txtnptmsk-1"
						onTextInputMaskBlur={onTextInputMaskBlurMock}
					/>
				</ThemeProvider>,
			);
		});

		const input = screen.getByTestId("txtnptmsk-1");
		const button = screen.getByRole("button");

		await user.clear(input);
		await user.tab();

		expect(button).toHaveFocus();

		await user.tab({ shift: true });

		expect(input).toHaveFocus();
		expect(onTextInputMaskBlurMock).not.toHaveBeenCalled();
	});
	it.skip("should handle the onBlur blur event when focus moves from the input", async () => {
		const user = userEvent.setup();
		const onBlurMock = jest.fn();
		await act(async () => {
			render(
				<ThemeProvider>
					<TextInputMask
						name="hello"
						label="hello world"
						data-testid="txtnptmsk-1"
						onBlur={onBlurMock}
					/>
				</ThemeProvider>,
			);
		});

		const input = screen.getByTestId("txtnptmsk-1");
		await user.clear(input);
		await user.tab();

		expect(onBlurMock).toHaveBeenCalled();
	});
	it.skip("should call the onValueChange handler when field value is changed", async () => {
		const user = userEvent.setup();
		let result = null;
		const handleSubmit = jest.fn();
		const handleOnValueChange = (values) => {
			result = values;
		};

		await act(async () => {
			render(
				<ThemeProvider>
					<Form onSubmit={handleSubmit}>
						<TextInputMask
							name="hello"
							label="hello world"
							data-testid="txtnptmsk-1"
							onValueChange={handleOnValueChange}
						/>
					</Form>
				</ThemeProvider>,
			);
		});

		const input = screen.getByTestId("txtnptmsk-1");
		await user.type(input, "a");
		const { e, value, name, id, type } = result;
		expect(value).toBe("a");
		expect(name).toBe("hello");
		expect(type).toBe("password");
		expect(typeof id).toBe("string");
		expect(typeof e).toBe("object");
	});
	it.skip("should receive focus when a form is submitted with an empty required field", async () => {
		const user = userEvent.setup();
		const handleSubmit = jest.fn();

		await act(async () => {
			render(
				<ThemeProvider>
					<Form onSubmit={handleSubmit}>
						<TextInputMask
							name="hello"
							label="hello world"
							data-testid="txtnptmsk-1"
							required
						/>
						<Button type="submit">Submit</Button>
					</Form>
				</ThemeProvider>,
			);
		});

		const input = screen.getByTestId("txtnptmsk-1");
		const button = screen.getByText("Submit").parentElement;
		await user.click(button);
		expect(handleSubmit.mock.calls).toHaveLength(0);
		const errorNode = await screen.findAllByText("Enter hello world");
		expect(errorNode[0]).toHaveAttribute("aria-hidden", "true");
		expect(input).toHaveFocus();
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
			/>,
		);

		const button = screen.getByRole("button");
		fireEvent.click(button);
		expect(onMaskChangeHandler).toHaveBeenCalledWith({
			e: expect.anything(),
			masked: false,
		});
		fireEvent.click(button);
		expect(onMaskChangeHandler).toHaveBeenCalledWith({
			e: expect.anything(),
			masked: true,
		});
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
		render(<TextInputMask name="hello" label="hello world" />);

		const buttonLabel = screen.getByLabelText("Show");
		expect(buttonLabel).toBeInTheDocument();
	});

	it("should toggle the button label to 'Hide'", () => {
		render(<TextInputMask name="hello" label="hello world" />);

		let buttonLabel = screen.getByLabelText("Show");
		expect(buttonLabel).toBeInTheDocument();
		const button = screen.getByRole("button");
		fireEvent.click(button);
		buttonLabel = screen.getByLabelText("Hide");
		expect(buttonLabel).toBeInTheDocument();
	});

	it("should announce the default 'Characters showing' text when the 'Show' button is clicked", () => {
		render(<TextInputMask name="hello" label="hello world" />);

		const buttonLabel = screen.getByLabelText("Show");
		expect(buttonLabel).toBeInTheDocument();
		const button = screen.getByRole("button");
		fireEvent.click(button);
		const announcementContainer = screen.queryByRole("status");
		expect(announcementContainer).toHaveTextContent("Characters showing");
	});

	it("should toggle the button label back to 'Show'", () => {
		render(<TextInputMask name="hello" label="hello world" />);

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
});
