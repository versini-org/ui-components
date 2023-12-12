import { render, screen } from "@testing-library/react";

import { expectToHaveClasses } from "../../../common/__tests__/helpers";
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
			"flex",
			"h-full",
			"min-h-[95%]",
			"w-full",
			"flex-col",
			"bg-surface-light",
			"sm:h-auto",
			"sm:min-h-[10rem]",
			"sm:w-[95%]",
			"sm:rounded-lg",
			"sm:border-2",
			"sm:border-border-light",
			"md:max-w-2xl",
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
});
