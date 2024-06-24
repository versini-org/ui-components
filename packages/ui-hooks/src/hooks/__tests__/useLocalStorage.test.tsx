import { act, renderHook } from "@testing-library/react";

import { useLocalStorage } from "../useLocalStorage";

class LocalStorageMock {
	store: Record<string, unknown> = {};

	clear() {
		this.store = {};
	}

	getItem(key: string) {
		return this.store[key] || null;
	}

	setItem(key: string, value: unknown) {
		this.store[key] = value + "";
	}

	removeItem(key: string) {
		delete this.store[key];
	}
}

describe("useLocalStorage()", () => {
	beforeEach(() => {
		Object.defineProperty(window, "localStorage", {
			value: new LocalStorageMock(),
		});
		window.localStorage.clear();
	});
	afterEach(() => {
		vi.clearAllMocks();
		Object.defineProperty(window, "localStorage", {
			value: null,
		});
	});

	it("should return null when there is no initialValue", () => {
		const { result } = renderHook(() => useLocalStorage({ key: "key" }));
		expect(result.current[0]).toBeNull();
		expect(window.localStorage.getItem("key")).toBe(null);
	});

	it("should set state and localStorage when initialValue is a string", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", initialValue: "value" }),
		);
		expect(result.current[0]).toBe("value");
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
	});

	it("should set state and localStorage when initialValue is a function", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", initialValue: () => "value" }),
		);
		expect(result.current[0]).toBe("value");
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
	});

	it("should set state and localStorage when initialValue is an array", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", initialValue: [1, 2] }),
		);
		expect(result.current[0]).toEqual([1, 2]);
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify([1, 2]));
	});

	it("should update state and localStorage when setState is called", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", initialValue: "value" }),
		);
		act(() => {
			const setState = result.current[1];
			setState("edited");
		});
		expect(result.current[0]).toBe("edited");
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("edited"));
	});

	it("should empty state and localStorage when setState is called with null", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", initialValue: "value" }),
		);
		act(() => {
			const setState = result.current[1];
			setState("edited");
		});
		expect(result.current[0]).toBe("edited");
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("edited"));

		act(() => {
			const setState = result.current[1];
			setState(null);
		});
		expect(result.current[0]).toBeNull();
		expect(window.localStorage.getItem("key")).toBeNull();
	});

	it("should revert state and localStorage when reset is called", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", initialValue: "value" }),
		);
		act(() => {
			const setState = result.current[1];
			setState("edited");
		});
		expect(result.current[0]).toBe("edited");
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("edited"));

		act(() => {
			const reset = result.current[2];
			reset();
		});
		expect(result.current[0]).toBe("value");
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
	});

	it("should remove state and localStorage when remove is called", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", initialValue: "value" }),
		);
		act(() => {
			const setState = result.current[1];
			setState("edited");
		});
		expect(result.current[0]).toBe("edited");
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("edited"));

		act(() => {
			const remove = result.current[3];
			remove();
		});
		expect(result.current[0]).toBeNull();
		expect(window.localStorage.getItem("key")).toBeNull();
	});

	it("should update state and localStorage with a callback function", () => {
		const { result } = renderHook(() =>
			useLocalStorage({
				key: "count",
				initialValue: 2,
			}),
		);
		act(() => {
			const setState = result.current[1];
			setState((prev: any) => prev + 1);
		});
		expect(result.current[0]).toBe(3);
		expect(window.localStorage.getItem("count")).toEqual("3");
	});
});

describe("useLocalStorage() event based updates", () => {
	beforeEach(() => {
		Object.defineProperty(window, "localStorage", {
			value: new LocalStorageMock(),
		});
		window.localStorage.clear();
	});
	afterEach(() => {
		vi.clearAllMocks();
		Object.defineProperty(window, "localStorage", {
			value: null,
		});
	});

	it("should update the state of all hooks when one is updated", () => {
		const { result: A } = renderHook(() =>
			useLocalStorage({
				key: "key",
				initialValue: "value",
			}),
		);
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
		const { result: B } = renderHook(() =>
			useLocalStorage({
				key: "key",
				initialValue: "value",
			}),
		);

		act(() => {
			const setState = A.current[1];
			setState("edited");
		});
		expect(A.current[0]).toBe("edited");
		expect(B.current[0]).toBe("edited");
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("edited"));
	});

	it("should update the state of all hooks when one is reset", () => {
		const { result: A } = renderHook(() =>
			useLocalStorage({
				key: "key",
				initialValue: "value",
			}),
		);
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
		const { result: B } = renderHook(() =>
			useLocalStorage({
				key: "key",
				initialValue: "value",
			}),
		);

		act(() => {
			const resetState = A.current[2];
			resetState();
		});
		expect(A.current[0]).toBe("value");
		expect(B.current[0]).toBe("value");
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
	});

	it("should NOT update the state of all hooks when one is updated", () => {
		const { result: A } = renderHook(() =>
			useLocalStorage({
				key: "key1",
				initialValue: "value",
			}),
		);
		expect(window.localStorage.getItem("key1")).toBe(JSON.stringify("value"));
		const { result: B } = renderHook(() =>
			useLocalStorage({
				key: "key2",
				initialValue: "value",
			}),
		);
		expect(window.localStorage.getItem("key2")).toBe(JSON.stringify("value"));
		act(() => {
			const setState = A.current[1];
			setState("edited");
		});
		expect(A.current[0]).toBe("edited");
		expect(B.current[0]).toBe("value");
		expect(window.localStorage.getItem("key1")).toBe(JSON.stringify("edited"));
		expect(window.localStorage.getItem("key2")).toBe(JSON.stringify("value"));
	});

	it("should NOT update the state of all hooks when one is reset", () => {
		const { result: A } = renderHook(() =>
			useLocalStorage({
				key: "key1",
				initialValue: "value",
			}),
		);
		expect(window.localStorage.getItem("key1")).toBe(JSON.stringify("value"));
		const { result: B } = renderHook(() =>
			useLocalStorage({
				key: "key2",
				initialValue: "value",
			}),
		);
		expect(window.localStorage.getItem("key2")).toBe(JSON.stringify("value"));
		act(() => {
			const setStateA = A.current[1];
			const setStateB = B.current[1];
			const resetStateB = B.current[2];
			setStateA("edited");
			setStateB("edited");
			resetStateB();
		});
		expect(A.current[0]).toBe("edited");
		expect(B.current[0]).toBe("value");
		expect(window.localStorage.getItem("key1")).toBe(JSON.stringify("edited"));
		expect(window.localStorage.getItem("key2")).toBe(JSON.stringify("value"));
	});
});
