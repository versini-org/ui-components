import { act, render, screen } from "@testing-library/react";

import { ThemeProvider } from "../..";
import { expectToHaveClasses } from "../../../../../../configuration/tests-helpers";
import { THEMEPROVIDER_CLASSNAME } from "../../../common/constants";

const customTheme = {
	"--test-color-primary": "red",
	"--test-color-secondary": "yellow",
};

describe("ThemeProvider (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(ThemeProvider).toBeDefined();
	});
});

describe("ThemeProvider props tests", () => {
	it("should have default and custom classes", async () => {
		await act(async () => {
			render(<ThemeProvider className="toto">Hello World</ThemeProvider>);
		});
		const node = await screen.findByText("Hello World");
		expectToHaveClasses(node, [THEMEPROVIDER_CLASSNAME, "contents", "toto"]);
	});

	it("should respect the spacing prop", async () => {
		await act(async () => {
			render(
				<ThemeProvider className="toto" spacing={20}>
					Hello World
				</ThemeProvider>,
			);
		});
		const node = await screen.findByText("Hello World");
		expectToHaveClasses(node, [THEMEPROVIDER_CLASSNAME, "contents", "toto"]);
		expect(node.parentElement).toHaveClass("m-20");
	});

	it("should respect the spacing prop even if global is true", async () => {
		await act(async () => {
			render(
				<ThemeProvider className="toto" spacing={20} global>
					Hello World
				</ThemeProvider>,
			);
		});
		const node = await screen.findByText("Hello World");
		expect(node).toHaveClass("m-20");
	});
});

describe("ThemeProvider injection tests", () => {
	it("should NOT inject a custom theme locally [no custom theme]", async () => {
		await act(async () => {
			render(<ThemeProvider>Hello World</ThemeProvider>);
		});
		const node = await screen.findByText("Hello World");
		expect(node).not.toHaveStyle("--test-color-primary: red");
		expect(node).not.toHaveStyle("--test-color-secondary: yellow");
	});

	it("should NOT inject a custom theme globally [no custom theme]", async () => {
		await act(async () => {
			render(<ThemeProvider global>Hello World</ThemeProvider>);
		});
		await screen.findByText("Hello World");
		expect(document.documentElement).not.toHaveStyle(
			"--test-color-primary: red",
		);
		expect(document.documentElement).not.toHaveStyle(
			"--test-color-secondary: yellow",
		);
	});

	it("should inject a custom theme locally", async () => {
		await act(async () => {
			render(
				<ThemeProvider customTheme={customTheme}>Hello World</ThemeProvider>,
			);
		});
		const node = await screen.findByText("Hello World");
		expect(node).toHaveStyle("--test-color-primary: red");
		expect(node).toHaveStyle("--test-color-secondary: yellow");
	});

	it("should inject a custom theme globally", async () => {
		await act(async () => {
			render(
				<ThemeProvider global customTheme={customTheme}>
					Hello World
				</ThemeProvider>,
			);
		});
		await screen.findByText("Hello World");
		expect(document.documentElement).toHaveStyle("--test-color-primary: red");
		expect(document.documentElement).toHaveStyle(
			"--test-color-secondary: yellow",
		);
	});
});
