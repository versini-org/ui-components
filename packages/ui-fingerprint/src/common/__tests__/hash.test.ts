import { hashFromString } from "../utilities";

describe("hash happy path", () => {
	it("should return correct hash when given a simple string", async () => {
		const input = "hello";
		const expectedHash =
			"2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824";
		const result = await hashFromString(input);
		expect(result).toBe(expectedHash);
	});

	it("should hash an empty string correctly", async () => {
		const input = "";
		const expectedHash = "";
		const result = await hashFromString(input);
		expect(result).toBe(expectedHash);
	});

	// hashes a string with special characters correctly
	it("should hash a string with special characters correctly", async () => {
		const input = "Special!@#$%^&*()_+Characters";
		const expectedHash =
			"be9d7689cca679f9e797f80c9511a3181ba27b9207a20a5932127a9f4e45cc83";
		const result = await hashFromString(input);
		expect(result).toBe(expectedHash);
	});
});

describe("hash edge cases", () => {
	it("should return a hash when given a very large input string", async () => {
		const input = "a".repeat(10 ** 6); // 1 million characters
		const result = await hashFromString(input);
		expect(result).toHaveLength(64); // SHA-256 hash length in hex is 64 characters
	});

	// handles non-ASCII characters
	it("should return correct hash when given non-ASCII characters", async () => {
		const input = "你好世界"; // Non-ASCII characters
		const expectedHash =
			"beca6335b20ff57ccc47403ef4d9e0b8fccb4442b3151c2e7d50050673d43172"; // Expected hash for the input
		const result = await hashFromString(input);
		expect(result).toBe(expectedHash);
	});

	it("should return empty hash when input is whitespace", async () => {
		const input = "   ";
		const expectedHash =
			"0aad7da77d2ed59c396c99a74e49f3a4524dcdbcb5163251b1433d640247aeb4";
		const result = await hashFromString(input);
		expect(result).toBe(expectedHash);
	});
});
