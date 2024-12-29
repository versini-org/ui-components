import { render, screen } from "@testing-library/react";

import { Spinner } from "../..";
import { SPINNER_CLASSNAME } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";

describe("Spinner (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Spinner).toBeDefined();
	});
});

describe("Spinner spacing", () => {
	it("should render a spinner with a right margin spacing", async () => {
		render(<Spinner className="mr-2" />);
		const node = await screen.findByRole("status");
		// not only it should be there, but it should be the last entry
		expect(node.className).toContain("mr-2");
		expect(node.className.slice(-4)).toBe("mr-2");
	});
});

describe("Spinner modifiers", () => {
	it("should render a default Spinner (dark)", async () => {
		render(<Spinner />);
		const node = await screen.findByRole("status");
		expectToHaveClasses(node, [
			SPINNER_CLASSNAME,
			"inline-block",
			"h-8",
			"w-8",
			"animate-spin",
			"rounded-full",
			"border-4",
			"border-solid",
			"border-current",
			"border-r-transparent",
			"align-[-0.125em]",
			"motion-reduce:animate-[spin_1.5s_linear_infinite]",
			"text-copy-dark",
		]);
	});

	it("should render a light Spinner ", async () => {
		render(<Spinner mode="light" />);
		const node = await screen.findByRole("status");
		expectToHaveClasses(node, [
			SPINNER_CLASSNAME,
			"inline-block",
			"h-8",
			"w-8",
			"animate-spin",
			"rounded-full",
			"border-4",
			"border-solid",
			"border-current",
			"border-r-transparent",
			"align-[-0.125em]",
			"motion-reduce:animate-[spin_1.5s_linear_infinite]",
			"text-copy-accent",
		]);
	});

	it("should render a Spinner of type 'dots' ", async () => {
		render(<Spinner type="dots" />);
		const node = await screen.findByRole("status");
		expectToHaveClasses(node, [SPINNER_CLASSNAME]);
	});
});
