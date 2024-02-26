import { describe, expect, it } from "vitest";

import { isEmpty, truncate } from "../utilities";

describe("Non-DOM tests", () => {
	describe("truncate", () => {
		it("should truncate according to plan", () => {
			const STR = "hello world";
			expect(truncate(STR, 5).truncatedString).toBe("he...");
			expect(truncate(STR, 7).truncatedString).toBe("hell...");
			expect(truncate(STR, 10).truncatedString).toBe("hello w...");
			expect(truncate(STR, 11).truncatedString).toBe(STR);
			expect(truncate(STR, 12).truncatedString).toBe(STR);
		});
	});

	describe("when testing for isEmpty", () => {
		it("should tell if the value is empty or not", () => {
			const slice = Array.prototype.slice;
			expect(isEmpty()).toBe(true);
			expect(isEmpty({})).toBe(true);
			expect(isEmpty(null)).toBe(true);
			expect(isEmpty(true)).toBe(true);
			expect(isEmpty(666)).toBe(true);
			expect(isEmpty(slice)).toBe(true);
			expect(isEmpty(NaN)).toBe(true);
			expect(isEmpty(/x/)).toBe(true);
			expect(isEmpty(Symbol("a"))).toBe(true);

			expect(isEmpty([0])).toBe(false);
			expect(isEmpty([1, 2, 3])).toBe(false);
			expect(isEmpty("abc")).toBe(false);
			expect(isEmpty({ a: 0 })).toBe(false);
			expect(isEmpty({ length: 0 })).toBe(false);

			function Foo() {}
			Foo.prototype = { constructor: Foo };
			expect(isEmpty(Foo.prototype)).toBe(false);

			const map = new Map();
			expect(isEmpty(map)).toBe(true);
			map.set("key", { bla: 1, blabla: 2 });
			expect(isEmpty(map)).toBe(false);

			const set = new Set();
			expect(isEmpty(set)).toBe(true);
			set.add(42);
			expect(isEmpty(set)).toBe(false);
		});
	});
});
