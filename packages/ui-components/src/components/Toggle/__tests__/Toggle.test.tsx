/* eslint-disable @typescript-eslint/ban-ts-comment */

import { fireEvent, render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { Toggle } from "../..";

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
		const node = screen.getByText("toto");
		expectToHaveClasses(node, ["ml-3", "text-sm", "text-copy-lighter"]);
	});

	it("should render a light Toggle ", async () => {
		render(
			<Toggle
				mode="light"
				name="toto"
				label="toto"
				checked
				onChange={() => {}}
			/>,
		);
		const node = screen.getByText("toto");
		expectToHaveClasses(node, ["ml-3", "text-sm", "text-copy-dark"]);
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
		render(
			<Toggle
				// @ts-ignore
				onChange={spyOnChange}
				mode="dark"
				name="toto"
				label="toto"
				labelHidden
				checked
			/>,
		);
		const node = screen.getByText("toto");
		fireEvent.click(node);

		expect(spyOnChange).toHaveBeenCalledTimes(1);
	});
});
