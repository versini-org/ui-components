import { describe, expect, it } from "vitest";

import { twPlugin } from "..";
import { customContentPath } from "../tailwindcss/tailwindPlugin";

describe("Non-DOM tests", () => {
	it("should return an array with ui-system and ui-components", () => {
		expect(
			customContentPath.some((path) => path.includes("ui-system")),
		).toBeTruthy();
		expect(
			customContentPath.some((path) => path.includes("ui-components")),
		).toBeTruthy();
	});

	it("should return a default configuration", () => {
		const config: any = {};

		const mergedConfig = twPlugin.merge(config);
		const content = (mergedConfig.content as string[]).join(" ");

		expect(content).not.toContain("./src/*.{js,ts,jsx,tsx}");

		expect(content).toContain("node_modules/@versini/ui-anchor");
		expect(content).toContain("node_modules/@versini/ui-bubble");
		expect(content).toContain("node_modules/@versini/ui-button");
		expect(content).toContain("node_modules/@versini/ui-card");
		expect(content).toContain("node_modules/@versini/ui-footer");
		expect(content).toContain("node_modules/@versini/ui-header");
		expect(content).toContain("node_modules/@versini/ui-hooks");
		expect(content).toContain("node_modules/@versini/ui-icons");
		expect(content).toContain("node_modules/@versini/ui-main");
		expect(content).toContain("node_modules/@versini/ui-menu");
		expect(content).toContain("node_modules/@versini/ui-panel");
		expect(content).toContain("node_modules/@versini/ui-pill");
		expect(content).toContain("node_modules/@versini/ui-spinner");
		expect(content).toContain("node_modules/@versini/ui-system");
		expect(content).toContain("node_modules/@versini/ui-table");
		expect(content).toContain("node_modules/@versini/ui-textarea");
		expect(content).toContain("node_modules/@versini/ui-textinput");
		expect(content).toContain("node_modules/@versini/ui-toggle");
		expect(content).toContain("node_modules/@versini/ui-components");
		expect(content).toContain("node_modules/@versini/ui-form");

		expect(mergedConfig.safelist).toContain("mt-0");
		expect(mergedConfig.safelist).toContain("mt-52");
		expect(mergedConfig.safelist).not.toContain("mt-53");
		expect(mergedConfig.safelist).not.toContain("safelist");

		expect(mergedConfig.plugins).not.toContain("plugins");
		expect(mergedConfig.plugins).toHaveLength(2);
	});

	it("should return a merged configuration", () => {
		const config: any = {
			content: ["./src/*.{js,ts,jsx,tsx}"],
			safelist: ["safelist"],
			plugins: ["plugins"],
		};

		const mergedConfig = twPlugin.merge(config);
		const content = (mergedConfig.content as string[]).join(" ");

		expect(content).toContain("./src/*.{js,ts,jsx,tsx}");

		expect(content).toContain("node_modules/@versini/ui-anchor");
		expect(content).toContain("node_modules/@versini/ui-bubble");
		expect(content).toContain("node_modules/@versini/ui-button");
		expect(content).toContain("node_modules/@versini/ui-card");
		expect(content).toContain("node_modules/@versini/ui-footer");
		expect(content).toContain("node_modules/@versini/ui-header");
		expect(content).toContain("node_modules/@versini/ui-hooks");
		expect(content).toContain("node_modules/@versini/ui-icons");
		expect(content).toContain("node_modules/@versini/ui-main");
		expect(content).toContain("node_modules/@versini/ui-menu");
		expect(content).toContain("node_modules/@versini/ui-panel");
		expect(content).toContain("node_modules/@versini/ui-pill");
		expect(content).toContain("node_modules/@versini/ui-spinner");
		expect(content).toContain("node_modules/@versini/ui-system");
		expect(content).toContain("node_modules/@versini/ui-table");
		expect(content).toContain("node_modules/@versini/ui-textarea");
		expect(content).toContain("node_modules/@versini/ui-textinput");
		expect(content).toContain("node_modules/@versini/ui-toggle");
		expect(content).toContain("node_modules/@versini/ui-components");
		expect(content).toContain("node_modules/@versini/ui-form");

		expect(mergedConfig.safelist).toContain("mt-0");
		expect(mergedConfig.safelist).toContain("mt-52");
		expect(mergedConfig.safelist).not.toContain("mt-53");
		expect(mergedConfig.safelist).toContain("safelist");

		expect(mergedConfig.plugins).toContain("plugins");
		expect(mergedConfig.plugins).toHaveLength(3);
	});

	it("should return a custom configuration for button", () => {
		const config: any = {};

		const mergedConfig = twPlugin.merge(config, "button");
		const content = (mergedConfig.content as string[]).join(" ");

		expect(content).not.toContain("./src/*.{js,ts,jsx,tsx}");

		expect(content).toContain("node_modules/@versini/ui-anchor");
		expect(content).toContain("node_modules/@versini/ui-bubble");
		expect(content).toContain("node_modules/@versini/ui-button");
		expect(content).toContain("node_modules/@versini/ui-card");
		expect(content).toContain("node_modules/@versini/ui-footer");
		expect(content).toContain("node_modules/@versini/ui-header");
		expect(content).toContain("node_modules/@versini/ui-hooks");
		expect(content).toContain("node_modules/@versini/ui-icons");
		expect(content).toContain("node_modules/@versini/ui-main");
		expect(content).toContain("node_modules/@versini/ui-menu");
		expect(content).toContain("node_modules/@versini/ui-panel");
		expect(content).toContain("node_modules/@versini/ui-pill");
		expect(content).toContain("node_modules/@versini/ui-spinner");
		expect(content).toContain("node_modules/@versini/ui-system");
		expect(content).toContain("node_modules/@versini/ui-table");
		expect(content).toContain("node_modules/@versini/ui-textarea");
		expect(content).toContain("node_modules/@versini/ui-textinput");
		expect(content).toContain("node_modules/@versini/ui-toggle");
		expect(content).toContain("node_modules/@versini/ui-components");
		expect(content).toContain("node_modules/@versini/ui-form");

		expect(mergedConfig.safelist).not.toContain("mt-0");
		expect(mergedConfig.safelist).not.toContain("mt-52");
		expect(mergedConfig.safelist).not.toContain("mt-53");
		expect(mergedConfig.safelist).not.toContain("safelist");

		expect(mergedConfig.plugins).not.toContain("plugins");
		expect(mergedConfig.plugins).toHaveLength(2);
	});
});
