import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Toggle } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";

describe("Toggle (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Toggle).toBeDefined();
	});
});

describe("Toggle modifiers", () => {
	it("should render a default Toggle (dark)", async () => {
		render(
			<Toggle
				mode="dark"
				name="toto"
				label="toto"
				checked
				onChange={() => {}}
			/>,
		);
		const label = screen.getByText("toto");
		const input = screen.getByRole("checkbox");
		const toggle = input.nextElementSibling;

		expectToHaveClasses(label, ["ml-2", "text-sm", "text-copy-lighter"]);
		if (toggle) {
			expectToHaveClasses(toggle, [
				"after:absolute",
				"after:bg-surface-light",
				"after:border-surface-light",
				"after:border",
				"after:content-['']",
				"after:h-5",
				"after:left-[2px]",
				"after:rounded-full",
				"after:top-[2px]",
				"after:transition-all",
				"after:w-5",
				"bg-surface-darker",
				"border-border-light",
				"dark:after:bg-surface-medium",
				"dark:after:border-surface-medium",
				"dark:peer-focus:outline-focus-light",
				"h-6",
				"peer-checked:after:bg-white",
				"peer-checked:after:border-white",
				"peer-checked:after:translate-x-full",
				"peer-checked:bg-violet-500",
				"peer-focus:outline-2",
				"peer-focus:outline-focus-dark",
				"peer-focus:outline-offset-2",
				"peer-focus:outline",
				"peer",
				"rounded-full",
				"w-11",
			]);
		}
	});

	it("should render a light Toggle", async () => {
		render(
			<Toggle
				mode="light"
				name="toto"
				label="toto"
				checked
				onChange={() => {}}
			/>,
		);

		const label = screen.getByText("toto");
		const input = screen.getByRole("checkbox");
		const toggle = input.nextElementSibling;
		expectToHaveClasses(label, ["ml-2", "text-sm", "text-copy-dark"]);
		if (toggle) {
			expectToHaveClasses(toggle, [
				"peer",
				"h-6",
				"w-11",
				"rounded-full",
				"border-border-dark",
				"bg-surface-medium",
				"peer-focus:outline",
				"peer-focus:outline-2",
				"peer-focus:outline-offset-2",
				"peer-focus:outline-focus-dark",
				"dark:peer-focus:outline-focus-light",
				"after:left-[2px]",
				"after:top-[2px]",
				"after:border",
				"after:border-surface-light",
				"dark:after:border-surface-medium",
				"after:bg-surface-light",
				"dark:after:bg-surface-medium",
				"after:absolute",
				"after:h-5",
				"after:w-5",
				"after:rounded-full",
				"after:transition-all",
				"after:content-['']",
				"peer-checked:bg-violet-500",
				"peer-checked:after:translate-x-full",
				"peer-checked:after:bg-white",
				"peer-checked:after:border-white",
			]);
		}
	});

	it("should render a Toggle with no label", async () => {
		render(
			<Toggle
				mode="dark"
				name="toto"
				label="toto"
				labelHidden
				checked
				onChange={() => {}}
			/>,
		);
		const node = screen.getByText("toto");
		expectToHaveClasses(node, ["sr-only"]);
	});
});

describe("Toggle methods", () => {
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
			<Toggle
				// @ts-ignore
				onChange={spyOnChange}
				mode="dark"
				name="toto"
				label="toto"
				// labelHidden
				checked
			/>,
		);
		const input = screen.getByRole("checkbox");
		await user.click(input);

		expect(spyOnChange).toHaveBeenCalledTimes(1);
	});
});
