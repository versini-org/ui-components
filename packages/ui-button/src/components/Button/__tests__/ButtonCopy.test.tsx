import { act, fireEvent, render, screen } from "@testing-library/react";

import { ButtonCopy } from "../..";

describe("ButtonCopy (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(ButtonCopy).toBeDefined();
	});
});

describe("ButtonCopy spacing", () => {
	it("should render a button with a right margin spacing", async () => {
		render(<ButtonCopy copyToClipboard="lorem ipsum" className="mr-2" />);
		const button = await screen.findByRole("button");
		// not only it should be there, but it should be the last entry
		expect(button.className).toContain("mr-2");
		expect(button.className.slice(-4)).toBe("mr-2");
	});
});

describe("Copy clipboard timer", () => {
	afterEach(() => {
		vi.restoreAllMocks();
		vi.clearAllTimers();
	});
	it("should revert to copy icon after 3 seconds", async () => {
		vi.useFakeTimers();
		render(<ButtonCopy copyToClipboard="lorem ipsum" />);
		const button = screen.getByRole("button");
		screen.getByLabelText("Copy to clipboard");
		fireEvent.click(button);
		screen.getByLabelText("Copied to clipboard");

		act(() => {
			vi.advanceTimersByTime(3000);
		});

		screen.getByLabelText("Copy to clipboard");
	});
});
