import { describe, expect, it } from "vitest";
import { truncate } from "../utilities.ts"; // Adjust the import path as needed

describe("truncate", () => {
	it("should return the original string if length is greater than or equal to string length", () => {
		const result = truncate({
			string: "Hello, World!",
			length: 20,
		});
		expect(result).toEqual({ string: "Hello, World!", isTruncated: false });
	});

	it("should truncate the string if length is less than string length", () => {
		const result = truncate({
			string: "Hello, World!",
			length: 5,
			omission: "...",
		});
		expect(result).toEqual({ string: "He", isTruncated: true });
	});

	it("should return an empty string if length is less than omission length", () => {
		const result = truncate({
			string: "Hello, World!",
			length: 2,
			omission: "...",
		});
		expect(result).toEqual({ string: "", isTruncated: true });
	});

	it("should handle edge case where length equals omission length", () => {
		const result = truncate({
			string: "Hello, World!",
			length: 3,
			omission: "...",
		});
		expect(result).toEqual({ string: "", isTruncated: true });
	});

	it("should handle edge case where omission is an empty string", () => {
		const result = truncate({
			string: "Hello, World!",
			length: 5,
			omission: "",
		});
		expect(result).toEqual({ string: "Hello", isTruncated: true });
	});
});
