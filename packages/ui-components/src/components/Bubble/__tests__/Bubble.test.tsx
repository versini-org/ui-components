/* eslint-disable @typescript-eslint/ban-ts-comment */

import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
		if (bubble.parentElement?.parentElement) {
			expectToHaveClasses(bubble.parentElement.parentElement, [
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
			"text-copy-dark",
			"rounded-b-xl",
			"rounded-tl-xl",
		]);
		if (bubble.parentElement?.parentElement) {
			expectToHaveClasses(bubble.parentElement.parentElement, [
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
		if (bubble.parentElement?.parentElement) {
			expectToHaveClasses(bubble.parentElement.parentElement, [
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
		if (bubble.parentElement?.parentElement) {
			expectToHaveClasses(bubble.parentElement.parentElement, [
				BUBBLE_CLASSNAME,
				"flex",
				"items-start",
				"custom-class",
			]);
		}
	});

	it("should render a right bubble with a standard footer", async () => {
		render(
			<Bubble
				kind="right"
				footer={{
					Model: "gpt-4-1106-preview",
					Plugin: "OpenAI",
					ThisShouldNotBeRendered: null,
					["Processing time"]: "1234ms",
				}}
			>
				hello
			</Bubble>,
		);
		const bubbleFooter1 = await screen.findByText("Model: gpt-4-1106-preview");
		const bubbleFooter2 = await screen.findByText("Plugin: OpenAI");
		const bubbleFooter3 = await screen.findByText("Processing time: 1234ms");
		const bubbleFooter4 = screen.queryByText("ThisShouldNotBeRendered");

		expectToHaveClasses(bubbleFooter1, [
			"pr-2",
			"pt-1",
			"text-end",
			"text-xs",
			"text-copy-light",
		]);
		expectToHaveClasses(bubbleFooter2, [
			"pr-2",
			"pt-1",
			"text-end",
			"text-xs",
			"text-copy-light",
		]);
		expectToHaveClasses(bubbleFooter3, [
			"pr-2",
			"pt-1",
			"text-end",
			"text-xs",
			"text-copy-light",
		]);
		expect(bubbleFooter4).toBeNull();
	});

	it("should render a right bubble with a raw footer", async () => {
		const rawFooterClasses = "pl-2 pt-1 text-start text-xs text-red-500";
		render(
			<Bubble
				kind="right"
				rawFooter={
					<>
						<p className={rawFooterClasses}>Model: gpt-4-1106-preview</p>
						<p className={rawFooterClasses}>Plugin: OpenAI</p>
						<p className={rawFooterClasses}>Processing time: 1234ms</p>
					</>
				}
			>
				hello
			</Bubble>,
		);
		const bubbleFooter1 = await screen.findByText("Model: gpt-4-1106-preview");
		const bubbleFooter2 = await screen.findByText("Plugin: OpenAI");
		const bubbleFooter3 = await screen.findByText("Processing time: 1234ms");
		expectToHaveClasses(bubbleFooter1, [
			"pl-2",
			"pt-1",
			"text-start",
			"text-xs",
			"text-red-500",
		]);
		expectToHaveClasses(bubbleFooter2, [
			"pl-2",
			"pt-1",
			"text-start",
			"text-xs",
			"text-red-500",
		]);
		expectToHaveClasses(bubbleFooter3, [
			"pl-2",
			"pt-1",
			"text-start",
			"text-xs",
			"text-red-500",
		]);
	});
});

describe("Bubble methods", () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("should honor the copyToClipboard prop as a function", async () => {
		const events = {
			onClick: () => {},
		};
		const spyOnCopyToClipboard = vi.spyOn(events, "onClick");
		const user = userEvent.setup();

		render(
			// @ts-ignore
			<Bubble kind="left" copyToClipboard={spyOnCopyToClipboard}>
				<p>hello</p>
			</Bubble>,
		);
		await screen.findByText("hello");
		await screen.findByLabelText("Copy to clipboard");
		const button = await screen.findByRole("button");
		await user.click(button);
		await screen.findByLabelText("Copied to clipboard");

		expect(spyOnCopyToClipboard).toHaveBeenCalledTimes(1);
	});

	it("should honor the copyToClipboard prop as a boolean", async () => {
		const user = userEvent.setup();

		Object.defineProperty(navigator, "clipboard", {
			value: {
				writeText: async () => {},
			},
		});

		render(
			// @ts-ignore
			<Bubble kind="left" copyToClipboard>
				hello
			</Bubble>,
		);
		await screen.findByText("hello");
		await screen.findByLabelText("Copy to clipboard");
		const button = await screen.findByRole("button");
		await user.click(button);
		await screen.findByLabelText("Copied to clipboard");
	});

	it("should honor the copyToClipboard prop as a string", async () => {
		const user = userEvent.setup();

		Object.defineProperty(navigator, "clipboard", {
			value: {
				writeText: async () => {},
			},
		});

		render(
			// @ts-ignore
			<Bubble kind="left" copyToClipboard="a string to copy">
				<div>hello</div>
			</Bubble>,
		);
		await screen.findByText("hello");
		await screen.findByLabelText("Copy to clipboard");
		const button = await screen.findByRole("button");
		await user.click(button);
		await screen.findByLabelText("Copied to clipboard");
	});
});

describe("Bubble copy clipboard timer", () => {
	afterEach(() => {
		vi.restoreAllMocks();
		vi.clearAllTimers();
	});
	it("should revert to copy icon after 3 seconds", async () => {
		vi.useFakeTimers();
		render(
			<Bubble kind="left" copyToClipboard>
				hello
			</Bubble>,
		);
		const button = screen.getByRole("button");
		screen.getByText("hello");
		screen.getByLabelText("Copy to clipboard");
		fireEvent.click(button);
		screen.getByLabelText("Copied to clipboard");

		act(() => {
			vi.advanceTimersByTime(3000);
		});

		screen.getByLabelText("Copy to clipboard");
	});
});
