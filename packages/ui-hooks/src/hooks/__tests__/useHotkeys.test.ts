import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { shouldFireEvent, useHotkeys } from "../useHotkeys";

const dispatchEvent = (data: any) => {
	const event = new KeyboardEvent("keydown", data);
	document.documentElement.dispatchEvent(event);
};

describe("useHotkey", () => {
	it("should listen to document events", () => {
		const handler = vi.fn();
		renderHook(() => useHotkeys([["shift+ctrl+S", handler]]));
		dispatchEvent({ shiftKey: true, ctrlKey: true, key: "S" });
		expect(handler).toHaveBeenCalled();
	});

	it("should not fire when keys mismatch", () => {
		const handler = vi.fn();
		renderHook(() => useHotkeys([["alt+L", handler]]));
		dispatchEvent({ metaKey: true, key: "L" });
		expect(handler).not.toHaveBeenCalled();
	});

	it("should not fire when event is no exact match", () => {
		const handler = vi.fn();
		renderHook(() => useHotkeys([["mod+P", handler]]));
		dispatchEvent({ metaKey: true, altKey: true, key: "P" });
		expect(handler).not.toHaveBeenCalled();
	});
});

describe("shouldFireEvent", () => {
	it("should return true if event target is not an HTML element", () => {
		const event = { target: null } as KeyboardEvent;
		expect(shouldFireEvent(event, [])).toBe(true);
	});

	it("should return true if event target is an HTML element and not content editable", () => {
		const event = {
			target: document.createElement("div"),
		} as unknown as KeyboardEvent;
		expect(shouldFireEvent(event, [])).toBe(true);
	});

	it("should return false if event target is an ignored tag", () => {
		const input = document.createElement("input");
		const event = { target: input } as unknown as KeyboardEvent;
		expect(shouldFireEvent(event, ["INPUT"])).toBe(false);
	});

	it("should return true if event target is content editable and triggerOnContentEditable is true", () => {
		const div = document.createElement("div");
		div.contentEditable = "true";
		const event = { target: div } as unknown as KeyboardEvent;
		expect(shouldFireEvent(event, [], true)).toBe(true);
	});
});
