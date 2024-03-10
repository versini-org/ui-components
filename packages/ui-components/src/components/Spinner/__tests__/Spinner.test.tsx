import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import { SPINNER_CLASSNAME } from "../../../common/constants";
import { Spinner } from "../..";

describe("Spinner (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Spinner).toBeDefined();
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
			"text-copy-light",
		]);
	});

	it("should render a Spinner of type 'dots' ", async () => {
		render(<Spinner type="dots" />);
		const node = await screen.findByRole("status");
		expectToHaveClasses(node, [SPINNER_CLASSNAME]);
	});
});
