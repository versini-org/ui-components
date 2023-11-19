import { renderHook } from "@testing-library/react";

import useUniqueId from "../useUniqueId";

describe("useUniqueId tests", () => {
	it("should return two unique random numbers", () => {
		const res1 = renderHook(() => useUniqueId());
		const res2 = renderHook(() => useUniqueId());
		expect(res1.result.current).not.toEqual(res2.result.current);
	});

	it("should return two prefixed, unique random numbers", () => {
		const randomString1 = renderHook(() => useUniqueId("av-"));
		const randomString2 = renderHook(() => useUniqueId("av-"));
		expect(randomString1.result.current).toMatch(/av-[0-9]{10,}/);
		expect(randomString1.result.current).not.toEqual(
			randomString2.result.current,
		);
	});

	it("should return the id that was given", () => {
		const res1 = renderHook(() => useUniqueId({ id: 42 }));
		expect(res1.result.current).toBe("42");

		const res2 = renderHook(() => useUniqueId({ id: "42" }));
		expect(res2.result.current).toBe("42");
	});

	it("should use the prefix that was given via object", () => {
		const res1 = renderHook(() => useUniqueId({ prefix: "hello" }));
		expect(res1.result.current).toContain("hello");
	});
});
