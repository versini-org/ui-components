import { describe, expect, it } from "vitest";

import { getSpacing } from "../utilities";

describe("Non-DOM tests", () => {
	describe("getSpacing", () => {
		it("should return the correct spacing class", () => {
			expect(getSpacing(123)).toBe("m-123");
			expect(getSpacing("123")).toBe("m-123");

			expect(getSpacing({ t: 123 })).toBe("mt-123");
			expect(getSpacing({ r: 123 })).toBe("mr-123");
			expect(getSpacing({ b: 123 })).toBe("mb-123");
			expect(getSpacing({ l: 123 })).toBe("ml-123");
			expect(getSpacing({ t: 123, r: 456 })).toBe("mt-123 mr-456");
			expect(getSpacing({ t: 123, b: 456 })).toBe("mt-123 mb-456");
			expect(getSpacing({ t: 123, l: 456 })).toBe("mt-123 ml-456");
			expect(getSpacing({ r: 123, b: 456 })).toBe("mr-123 mb-456");
			expect(getSpacing({ r: 123, l: 456 })).toBe("mr-123 ml-456");
			expect(getSpacing({ b: 123, l: 456 })).toBe("mb-123 ml-456");
		});
	});
});
