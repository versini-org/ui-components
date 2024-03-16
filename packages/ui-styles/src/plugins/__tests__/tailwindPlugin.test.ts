import { describe, expect, it } from "vitest";

import { twPlugin } from "..";
import { customContentPath } from "../tailwindcss/tailwindPlugin";

describe("Non-DOM tests", () => {
	it("should return an array with ui-system and ui-components", () => {
		expect(customContentPath[0]).toContain(
			"node_modules/@versini/ui-components",
		);
		expect(customContentPath[1]).toContain("node_modules/@versini/ui-form");
		expect(customContentPath[2]).toContain("node_modules/@versini/ui-icons");
		expect(customContentPath[3]).toContain("node_modules/@versini/ui-system");
	});

	it("should return a default configuration", () => {
		const config: any = {};

		const mergedConfig = twPlugin.merge(config);
		const content = (mergedConfig.content as string[]).join(" ");

		expect(content).not.toContain("./src/*.{js,ts,jsx,tsx}");
		expect(content).toContain("node_modules/@versini/ui-components");
		expect(content).toContain("node_modules/@versini/ui-form");
		expect(content).toContain("node_modules/@versini/ui-icons");
		expect(content).toContain("node_modules/@versini/ui-system");

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
		expect(content).toContain("node_modules/@versini/ui-components");
		expect(content).toContain("node_modules/@versini/ui-form");
		expect(content).toContain("node_modules/@versini/ui-icons");
		expect(content).toContain("node_modules/@versini/ui-system");

		expect(mergedConfig.safelist).toContain("mt-0");
		expect(mergedConfig.safelist).toContain("mt-52");
		expect(mergedConfig.safelist).not.toContain("mt-53");
		expect(mergedConfig.safelist).toContain("safelist");

		expect(mergedConfig.plugins).toContain("plugins");
		expect(mergedConfig.plugins).toHaveLength(3);
	});
});
