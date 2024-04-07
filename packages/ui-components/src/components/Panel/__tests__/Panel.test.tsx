import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import {
	MESSAGEBOX_CLASSNAME,
	PANEL_CLASSNAME,
} from "../../../common/constants";
import { Panel } from "../..";

const PANEL_CONTENT = "Panel Content Lorem";

const SimplePanel = ({ ...props }) => (
	<Panel title="Panel Header" open onOpenChange={() => {}} {...props}>
		<span>{PANEL_CONTENT}</span>
	</Panel>
);

describe("Panel (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(Panel).toBeDefined();
	});
});

describe("Panel modifiers", () => {
	it("should render a responsive panel", async () => {
		render(<SimplePanel />);
		const panel = screen.getByRole("dialog");

		expectToHaveClasses(panel, [
			PANEL_CLASSNAME,
			"flex",
			"h-full",
			"min-h-[95%]",
			"w-full",
			"flex-col",
			"bg-surface-medium",
			"sm:h-auto",
			"sm:min-h-[10rem]",
			"sm:w-[95%]",
			"sm:rounded-lg",
			"sm:border-2",
			"sm:border-border-accent",
			"md:max-w-2xl",
		]);
	});

	it("should render a responsive panel with dark borders", async () => {
		render(<SimplePanel borderMode="dark" />);
		const panel = screen.getByRole("dialog");

		expectToHaveClasses(panel, [
			PANEL_CLASSNAME,
			"flex",
			"h-full",
			"min-h-[95%]",
			"w-full",
			"flex-col",
			"bg-surface-medium",
			"sm:h-auto",
			"sm:min-h-[10rem]",
			"sm:w-[95%]",
			"sm:rounded-lg",
			"sm:border-2",
			"sm:border-border-dark",
			"md:max-w-2xl",
		]);
	});

	it("should render a responsive messagebox", async () => {
		render(<SimplePanel kind="messagebox" />);
		const panel = screen.getByRole("dialog");

		expectToHaveClasses(panel, [
			MESSAGEBOX_CLASSNAME,
			"bg-surface-medium",
			"border-2",
			"border-border-accent",
			"flex-col",
			"flex",
			"md:max-w-2xl",
			"prose-lighter",
			"prose",
			"rounded-lg",
			"sm:w-[50%]",
			"w-[95%]",
		]);
	});

	it("should render a responsive messagebox with dark borders", async () => {
		render(<SimplePanel kind="messagebox" borderMode="dark" />);
		const panel = screen.getByRole("dialog");

		expectToHaveClasses(panel, [
			MESSAGEBOX_CLASSNAME,
			"bg-surface-medium",
			"border-2",
			"border-border-dark",
			"flex-col",
			"flex",
			"md:max-w-2xl",
			"prose-lighter",
			"prose",
			"rounded-lg",
			"sm:w-[50%]",
			"w-[95%]",
		]);
	});

	it("should render the panel content", () => {
		render(<SimplePanel />);
		expect(screen.getByText(PANEL_CONTENT)).toBeInTheDocument();
	});

	it("should render the panel footer", () => {
		render(<SimplePanel footer={<span>Footer</span>} />);
		expect(screen.getByText("Footer")).toBeInTheDocument();
	});
});

describe("Page and Panel titles", () => {
	it("should reflect the panel title props in the browser title", () => {
		document.title = "My page";
		render(<SimplePanel title="Panel Header" open />);
		expect(document.title).toBe("Panel Header | My page");
	});

	it("should return the document title to what it was before the panel opened", () => {
		document.title = "My page";
		const docTitle = document.title;
		const { unmount } = render(<SimplePanel title="Panel Header" open />);
		unmount();
		expect(document.title).toBe(docTitle);
	});

	it('Should set the document title to the Panel title after the "title" prop change', () => {
		document.title = "My page";
		const { rerender } = render(<SimplePanel title="Panel Header 2" open />);
		expect(document.title).toBe("Panel Header 2 | My page");
		rerender(<SimplePanel title="Panel Header 1" open />);
		expect(document.title).toBe("Panel Header 1 | My page");
	});
});
