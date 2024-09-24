import { fireEvent, render, screen } from "@testing-library/react";

import { Truncate } from "../..";

describe("Truncate (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Truncate).toBeDefined();
	});
});

describe("Truncate Component", () => {
	it("should render children when children is not a string", () => {
		const children = <div>Not a string</div>;
		render(<Truncate>{children}</Truncate>);
		expect(screen.getByText("Not a string")).toBeInTheDocument();
	});

	it('should render truncated text and "more..." button when children is a string and exceeds length', () => {
		const text = "This is a long text that needs to be truncated.";
		render(<Truncate length={20}>{text}</Truncate>);
		expect(screen.getByText("This is a long text that")).toBeInTheDocument();
		expect(screen.getByText("more...")).toBeInTheDocument();
	});

	it('should render full text and "less..." button when "more..." button is clicked', () => {
		const text = "This is a long text that needs to be truncated.";
		render(<Truncate length={20}>{text}</Truncate>);

		fireEvent.click(screen.getByText("more..."));

		expect(
			screen.getByText("This is a long text that needs to be truncated."),
		).toBeInTheDocument();
		expect(screen.getByText("less...")).toBeInTheDocument();
	});

	it('should not render "more..." button when children is a string and does not exceed length', () => {
		const text = "Short text";
		render(<Truncate length={20}>{text}</Truncate>);
		expect(screen.getByText("Short text")).toBeInTheDocument();
		expect(screen.queryByText("more...")).toBeNull();
	});
});
