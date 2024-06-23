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
		window.dispatchEvent(
			new CustomEvent("storage", {
				detail: { key, value },
			}),
		);
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

	it("should return undefined when there is no defaultValue", () => {
		const { result } = renderHook(() => useLocalStorage({ key: "key" }));
		expect(result.current[0]).toBeUndefined();
		expect(window.localStorage.getItem("key")).toBe("undefined");
	});

	it("should return the initial state when defaultValue is a string", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", defaultValue: "value" }),
		);
		expect(result.current[0]).toBe("value");
	});

	it("should initialize localStorage when defaultValue is a string", () => {
		renderHook(() => useLocalStorage({ key: "key", defaultValue: "value" }));
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
	});

	it("should return the initial state when defaultValue is a function", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", defaultValue: () => "value" }),
		);
		expect(result.current[0]).toBe("value");
	});

	it("should initialize localStorage when defaultValue is a function", () => {
		renderHook(() =>
			useLocalStorage({ key: "key", defaultValue: () => "value" }),
		);
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
	});

	it("should return the initial state when defaultValue is an array", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", defaultValue: [1, 2] }),
		);
		expect(result.current[0]).toEqual([1, 2]);
	});

	it("should initialize localStorage when defaultValue is a array", () => {
		renderHook(() => useLocalStorage({ key: "key", defaultValue: [1, 2] }));
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify([1, 2]));
	});

	it("should update the state when setState is called", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", defaultValue: "value" }),
		);
		act(() => {
			const setState = result.current[1];
			setState("edited");
		});
		expect(result.current[0]).toBe("edited");
	});

	it("should update localStorage when setState is called", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", defaultValue: "value" }),
		);
		act(() => {
			const setState = result.current[1];
			setState("edited");
		});
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("edited"));
	});

	it("should revert state and localStorage to defaultValue when reset callback is called", () => {
		const { result } = renderHook(() =>
			useLocalStorage({ key: "key", defaultValue: "value" }),
		);
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
		act(() => {
			const setState = result.current[1];
			setState("edited");
		});
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("edited"));
		expect(result.current[0]).toBe("edited");
		act(() => {
			const resetValue = result.current[2];
			resetValue();
		});
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
		expect(result.current[0]).toBe("value");
	});

	it("should retain the state when new value is undefined", () => {
		const { result } = renderHook(() =>
			useLocalStorage<string | undefined>({
				key: "key",
				defaultValue: "value",
			}),
		);
		act(() => {
			const setState = result.current[1];
			setState(undefined);
		});
		expect(result.current[0]).toBe("value");
	});

	it("should retain the localStorage when new value is undefined", () => {
		const { result } = renderHook(() =>
			useLocalStorage<string | undefined>({
				key: "key",
				defaultValue: "value",
			}),
		);
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
		act(() => {
			const setState = result.current[1];
			setState(undefined);
		});
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
	});

	it("should update the state when new value is null", () => {
		const { result } = renderHook(() =>
			useLocalStorage<string | null>({ key: "key", defaultValue: "value" }),
		);
		expect(result.current[0]).toBe("value");
		act(() => {
			const setState = result.current[1];
			setState(null);
		});
		expect(result.current[0]).toBeNull();
	});

	it("should update the localStorage when new value is null", () => {
		const { result } = renderHook(() =>
			useLocalStorage<string | null>({ key: "key", defaultValue: "value" }),
		);
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
		act(() => {
			const setState = result.current[1];
			setState(null);
		});
		expect(window.localStorage.getItem("key")).toBe("null");
	});

	it("should update the state with a callback function", () => {
		const { result } = renderHook(() =>
			useLocalStorage({
				key: "count",
				defaultValue: 2,
			}),
		);
		act(() => {
			const setState = result.current[1];
			setState((prev) => prev + 1);
		});
		expect(result.current[0]).toBe(3);
	});

	it("should update the localStorage with a callback function", () => {
		const { result } = renderHook(() =>
			useLocalStorage({
				key: "count",
				defaultValue: 2,
			}),
		);
		expect(window.localStorage.getItem("count")).toEqual("2");
		act(() => {
			const setState = result.current[1];
			setState((prev) => prev + 1);
		});
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
				defaultValue: "value",
			}),
		);
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
		const { result: B } = renderHook(() =>
			useLocalStorage({
				key: "key",
				defaultValue: "value",
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
				defaultValue: "value",
			}),
		);
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("value"));
		const { result: B } = renderHook(() =>
			useLocalStorage({
				key: "key",
				defaultValue: "value",
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
				defaultValue: "value",
			}),
		);
		expect(window.localStorage.getItem("key1")).toBe(JSON.stringify("value"));
		const { result: B } = renderHook(() =>
			useLocalStorage({
				key: "key2",
				defaultValue: "value",
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
				defaultValue: "value",
			}),
		);
		expect(window.localStorage.getItem("key1")).toBe(JSON.stringify("value"));
		const { result: B } = renderHook(() =>
			useLocalStorage({
				key: "key2",
				defaultValue: "value",
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

describe("useLocalStorage() custom serialize / deserialize ", () => {
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

	it("should return a stored value with the custom serialize function", () => {
		const { result } = renderHook(() =>
			useLocalStorage({
				key: "key",
				defaultValue: "value",
				serialize: (val) => `serialized ${val}`,
			}),
		);
		expect(result.current[0]).toBe("value");
		act(() => {
			const setState = result.current[1];
			setState("edited");
		});

		expect(result.current[0]).toBe("serialized edited");
		expect(window.localStorage.getItem("key")).toBe("serialized edited");
	});

	it("should return a stored value with the custom deserialize function", () => {
		const { result } = renderHook(() =>
			useLocalStorage({
				key: "key",
				defaultValue: "value",
				deserialize: (val) => `deserialized ${val}`,
			}),
		);
		expect(result.current[0]).toBe("value");
		act(() => {
			const setState = result.current[1];
			setState("edited");
		});

		expect(result.current[0]).toBe('deserialized "edited"');
		expect(window.localStorage.getItem("key")).toBe(JSON.stringify("edited"));
	});

	it("should return a stored value with custom de/serialize functions", () => {
		const { result } = renderHook(() =>
			useLocalStorage({
				key: "key",
				defaultValue: "value",
				serialize: (val) => `serialized ${val}`,
				deserialize: (val) => `deserialized ${val}`,
			}),
		);
		expect(result.current[0]).toBe("value");
		act(() => {
			const setState = result.current[1];
			setState("edited");
		});

		expect(result.current[0]).toBe("deserialized serialized edited");
		expect(window.localStorage.getItem("key")).toBe("serialized edited");
	});
});
