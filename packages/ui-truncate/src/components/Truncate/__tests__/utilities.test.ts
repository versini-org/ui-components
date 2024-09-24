import { describe, expect, it } from "vitest";
import { truncate } from "../utilities.ts";

describe("truncate", () => {
	it("should truncate at the ideal length", () => {
		const result = truncate({
			string: "Hello, World!",
			idealLength: 6,
		});
		expect(result).toEqual({ string: "Hello,", isTruncated: true });
	});

	it("should truncate at the next space found right after the ideal length", () => {
		const result = truncate({
			string: "Hello, World!",
			idealLength: 4,
		});
		expect(result).toEqual({ string: "Hello,", isTruncated: true });
	});

	it("should truncate at the next space found right after the ideal length", () => {
		const result = truncate({
			string: "Hello, World! This is your time to shine!",
			idealLength: 8,
		});
		expect(result).toEqual({ string: "Hello, World!", isTruncated: true });
	});

	it("should handle edge case where ideal length is more than string length", () => {
		const result = truncate({
			string: "Hello, World!",
			idealLength: 20,
		});
		expect(result).toEqual({ string: "Hello, World!", isTruncated: false });
	});
});
