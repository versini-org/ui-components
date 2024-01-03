import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
import { BUBBLE_CLASSNAME } from "../../../common/constants";
import { Bubble } from "../..";

describe("Bubble (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Bubble).toBeDefined();
	});
});

describe("Bubble modifiers", () => {
	it("should render a left bubble", async () => {
		render(<Bubble kind="left">hello</Bubble>);
		const bubble = await screen.findByText("hello");
		expectToHaveClasses(bubble, [
			"flex",
			"flex-col",
			"empty:hidden",
			"p-4",
			"sm:max-w-md",
			"md:max-w-2xl",
			"prose",
			"prose-p:my-3",
			"prose-blockquote:my-3",
			"prose-ol:my-3",
			"prose-ul:my-3",
			"prose-ul:prose-li:marker:text-black",
			"p-4",
			"sm:max-w-md",
			"md:max-w-2xl",
			"bg-surface-lighter",
			"text-copy-dark",
			"rounded-b-xl",
			"rounded-tr-xl",
		]);
		if (bubble.parentElement) {
			expectToHaveClasses(bubble.parentElement, [
				BUBBLE_CLASSNAME,
				"flex",
				"items-start",
			]);
		}
	});

	it("should render a right bubble", async () => {
		render(<Bubble kind="right">hello</Bubble>);
		const bubble = await screen.findByText("hello");
		expectToHaveClasses(bubble, [
			"flex",
			"flex-col",
			"empty:hidden",
			"p-4",
			"sm:max-w-md",
			"md:max-w-2xl",
			"prose",
			"prose-p:my-3",
			"prose-blockquote:my-3",
			"prose-ol:my-3",
			"prose-ul:my-3",
			"prose-ul:prose-li:marker:text-black",
			"p-4",
			"sm:max-w-md",
			"md:max-w-2xl",
			"bg-surface-accent",
			"text-copy-lighter",
			"rounded-b-xl",
			"rounded-tl-xl",
		]);
		if (bubble.parentElement) {
			expectToHaveClasses(bubble.parentElement, [
				BUBBLE_CLASSNAME,
				"flex",
				"items-start",
				"flex-row-reverse",
			]);
		}
	});

	it("should render a left bubble with custom classes", async () => {
		render(
			<Bubble kind="left" className="custom-class">
				hello
			</Bubble>,
		);
		const bubble = await screen.findByText("hello");
		if (bubble.parentElement) {
			expectToHaveClasses(bubble.parentElement, [
				BUBBLE_CLASSNAME,
				"flex",
				"items-start",
				"custom-class",
			]);
		}
	});

	it("should render a right bubble with custom classes", async () => {
		render(
			<Bubble kind="right" className="custom-class">
				hello
			</Bubble>,
		);
		const bubble = await screen.findByText("hello");
		if (bubble.parentElement) {
			expectToHaveClasses(bubble.parentElement, [
				BUBBLE_CLASSNAME,
				"flex",
				"items-start",
				"custom-class",
			]);
		}
	});
});
