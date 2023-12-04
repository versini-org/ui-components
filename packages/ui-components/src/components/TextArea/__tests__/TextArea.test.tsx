/* eslint-disable @typescript-eslint/ban-ts-comment */

import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { TEXT_AREA_CONTROL_RIGHT_CLASSNAME } from "../../../common/constants";
import { TextArea } from "../..";

describe("TextArea (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(TextArea).toBeDefined();
	});
});

describe("TextArea modifiers", () => {
	it("should render a default text area", async () => {
		render(<TextArea label="hello world" name="toto" />);
		const input = await screen.findAllByText("hello world");
		expect(input[0].className).toContain("av-visually-hidden");
		expectToHaveClasses(input[1], ["cursor-text", "text-copy-medium"]);
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
