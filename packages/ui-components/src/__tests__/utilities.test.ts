import { customCSS, tokens, twPlugin } from "../utilities";

describe("utilities", () => {
	it("should work", () => {
		expect(tokens.colors).toBeDefined();
		expect(customCSS).toBeDefined();
		expect(twPlugin).toBeDefined();
	});
});
