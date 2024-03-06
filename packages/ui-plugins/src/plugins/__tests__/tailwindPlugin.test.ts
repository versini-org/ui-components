import { describe, expect, it } from "vitest";

import { tailwindContentPath } from "../tailwindPlugin";

describe("Non-DOM tests", () => {
	it("should return an array with ui-system and ui-components", () => {
		expect(tailwindContentPath[0]).toContain("ui-system");
		expect(tailwindContentPath[1]).toContain("ui-components");
	});
});
