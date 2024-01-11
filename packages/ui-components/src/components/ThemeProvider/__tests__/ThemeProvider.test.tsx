import { act, render, screen } from "@testing-library/react";

import { ThemeProvider } from "../..";

const customTheme = {
	"--test-color-primary": "red",
	"--test-color-secondary": "yellow",
};

describe("ThemeProvider (exceptions)", () => {
	it("should be able to require/import from root", () => {
		expect(ThemeProvider).toBeDefined();
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
