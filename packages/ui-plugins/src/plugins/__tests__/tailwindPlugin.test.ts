import { describe, expect, it } from "vitest";

import { customContentPath } from "../tailwindcss/tailwindPlugin";

describe("Non-DOM tests", () => {
	it("should return an array with ui-system and ui-components", () => {
		expect(customContentPath[0]).toContain("node_modules/@versini/ui-system");
		expect(customContentPath[1]).toContain(
			"node_modules/@versini/ui-components",
		);
	});
});
