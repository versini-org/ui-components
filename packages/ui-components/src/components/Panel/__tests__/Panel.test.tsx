import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
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
			"sm:border-border-light",
			"md:max-w-2xl",
		]);
	});

	it("should render a responsive panel with dark borders", async () => {
		render(<SimplePanel borderKind="dark" />);
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
			"w-[95%]",
			"rounded-lg",
			"sm:w-[50%]",
			"border-2",
			"border-border-light",
		]);
	});

	it("should render a responsive messagebox wit dark borders", async () => {
		render(<SimplePanel kind="messagebox" borderKind="dark" />);
		const panel = screen.getByRole("dialog");

		expectToHaveClasses(panel, [
			MESSAGEBOX_CLASSNAME,
			"w-[95%]",
			"rounded-lg",
			"sm:w-[50%]",
			"border-2",
			"border-border-dark",
		]);
	});

	it("should reflect the panel title props in the browser title", () => {
		render(<SimplePanel title="Panel Header" open />);
		expect(document.title).toBe("Panel Header");
	});

	it("should return the document title to what it was before the panel opened", () => {
		const docTitle = document.title;
		const { unmount } = render(<SimplePanel title="Panel Header" open />);
		unmount();
		expect(document.title).toBe(docTitle);
	});

	it('Should set the document title to the Panel title after the "title" prop change', () => {
		const { rerender } = render(<SimplePanel title="Panel Header 2" open />);
		expect(document.title).toBe("Panel Header 2");
		rerender(<SimplePanel title="Panel Header 1" open />);
		expect(document.title).toBe("Panel Header 1");
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
