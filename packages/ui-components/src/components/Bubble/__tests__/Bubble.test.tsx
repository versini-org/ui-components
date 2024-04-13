/* eslint-disable @typescript-eslint/ban-ts-comment */

import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import { BUBBLE_CLASSNAME, BUTTON_CLASSNAME } from "../../../common/constants";
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
			"bg-surface-lighter",
			"dark:bg-surface-dark",
			"dark:prose-lighter",
			"empty:hidden",
			"flex-col",
			"flex",
			"md:max-w-2xl",
			"p-4",
			"prose-blockquote:my-3",
			"prose-dark",
			"prose-ol:my-3",
			"prose-p:my-3",
			"prose-ul:my-3",
			"prose-ul:prose-li:marker:text-black",
			"prose",
			"rounded-b-xl",
			"rounded-tr-xl",
			"sm:max-w-md",
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
			"bg-surface-accent",
			"dark:prose-lighter",
			"empty:hidden",
			"flex-col",
			"flex",
			"md:max-w-2xl",
			"p-4",
			"prose-blockquote:my-3",
			"prose-dark",
			"prose-ol:my-3",
			"prose-p:my-3",
			"prose-ul:my-3",
			"prose-ul:prose-li:marker:text-black",
			"prose",
			"rounded-b-xl",
			"rounded-tl-xl",
			"sm:max-w-md",
			"text-copy-lighter",
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

	it("should render a default (system) copy button", async () => {
		render(
			<Bubble kind="left" copyToClipboard>
				hello
			</Bubble>,
		);
		await screen.findByText("hello");
		await screen.findByLabelText("Copy to clipboard");
		const button = await screen.findByRole("button");
		expect(button).toBeInTheDocument();
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"active:bg-action-dark-active",
			"active:text-copy-light-active",
			"border-transparent",
			"border",
			"dark:active:bg-action-light-active",
			"dark:focus:outline-focus-light",
			"dark:hover:bg-action-light-hover",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-8",
			"hover:bg-action-dark-hover",
			"hover:text-copy-light-hover",
			"inline-flex",
			"items-center",
			"justify-center",
			"not-prose",
			"p-1",
			"rounded-full",
			"w-8",
		]);
	});

	it("should render a light copy button", async () => {
		render(
			<Bubble kind="left" copyToClipboard copyToClipboardMode="light">
				hello
			</Bubble>,
		);
		await screen.findByText("hello");
		await screen.findByLabelText("Copy to clipboard");
		const button = await screen.findByRole("button");
		expect(button).toBeInTheDocument();
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"active:bg-action-light-active",
			"active:text-copy-light-active",
			"border-transparent",
			"border",
			"dark:focus:outline-focus-light",
			"focus:outline-2",
			"focus:outline-focus-dark",
			"focus:outline-offset-2",
			"focus:outline",
			"h-8",
			"hover:bg-action-light-hover",
			"hover:text-copy-light-hover",
			"inline-flex",
			"items-center",
			"justify-center",
			"not-prose",
			"p-1",
			"rounded-full",
			"w-8",
		]);
	});

	it("should render a light copy button with light focus", async () => {
		render(
			<Bubble
				kind="left"
				copyToClipboard
				copyToClipboardMode="light"
				copyToClipboardFocusMode="light"
			>
				hello
			</Bubble>,
		);
		await screen.findByText("hello");
		await screen.findByLabelText("Copy to clipboard");
		const button = await screen.findByRole("button");
		expect(button).toBeInTheDocument();
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"active:bg-action-light-active",
			"active:text-copy-light-active",
			"border-transparent",
			"border",
			"focus:outline-2",
			"focus:outline-focus-light",
			"focus:outline-offset-2",
			"focus:outline",
			"h-8",
			"hover:bg-action-light-hover",
			"hover:text-copy-light-hover",
			"inline-flex",
			"items-center",
			"justify-center",
			"not-prose",
			"p-1",
			"rounded-full",
			"w-8",
		]);
	});

	it("should render a light copy button with dark focus", async () => {
		render(
			<Bubble
				kind="left"
				copyToClipboard
				copyToClipboardMode="light"
				copyToClipboardFocusMode="dark"
			>
				hello
			</Bubble>,
		);
		await screen.findByText("hello");
		await screen.findByLabelText("Copy to clipboard");
		const button = await screen.findByRole("button");
		expect(button).toBeInTheDocument();
		expectToHaveClasses(button, [
			BUTTON_CLASSNAME,
			"not-prose",
			"rounded-full",
			"inline-flex",
			"items-center",
			"justify-center",
			"h-8",
			"w-8",
			"p-1",
			"border",
			"border-transparent",
			"focus:outline",
			"focus:outline-2",
			"focus:outline-offset-2",
			"focus:outline-focus-dark",
			"hover:text-copy-light-hover",
			"hover:bg-action-light-hover",
			"active:text-copy-light-active",
			"active:bg-action-light-active",
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
