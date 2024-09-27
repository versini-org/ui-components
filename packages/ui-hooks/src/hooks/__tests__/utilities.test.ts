import { describe, expect, it, vi } from "vitest";

import { getHotkeyHandler, getHotkeyMatcher, parseHotkey } from "../utilities";
import type { HotkeyItemOptions } from "../utilities";

describe("@mantine/hooks/use-hot-key/parse-hotkey", () => {
	it("should parse hotkey correctly", () => {
		expect(parseHotkey("meta+S")).toMatchObject({
			alt: false,
			ctrl: false,
			meta: true,
			mod: false,
			shift: false,
			key: "s",
		});

		expect(parseHotkey("alt+shift+L")).toMatchObject({
			alt: true,
			ctrl: false,
			meta: false,
			mod: false,
			shift: true,
			key: "l",
		});

		expect(parseHotkey("mod+K")).toMatchObject({
			alt: false,
			ctrl: false,
			meta: false,
			mod: true,
			shift: false,
			key: "k",
		});

		expect(parseHotkey("ctrl+shift+alt+K")).toMatchObject({
			alt: true,
			ctrl: true,
			meta: false,
			mod: false,
			shift: true,
			key: "k",
		});

		expect(parseHotkey("mod+S+A")).toMatchObject({
			alt: false,
			ctrl: false,
			meta: false,
			mod: true,
			shift: false,
			key: "s",
		});
	});

	it("should detect exact hotkey", () => {
		expect(
			getHotkeyMatcher("ctrl+alt+I")(
				new KeyboardEvent("keydown", {
					ctrlKey: true,
					altKey: true,
					key: "I",
				}),
			),
		).toBe(true);

		expect(
			getHotkeyMatcher("mod+E")(
				new KeyboardEvent("keydown", {
					ctrlKey: true,
					key: "E",
				}),
			),
		).toBe(true);

		expect(
			getHotkeyMatcher("mod+E")(
				new KeyboardEvent("keydown", {
					metaKey: true,
					key: "E",
				}),
			),
		).toBe(true);

		expect(
			getHotkeyMatcher("mod+S")(
				new KeyboardEvent("keydown", {
					metaKey: true,
					key: "E",
				}),
			),
		).toBe(false);

		expect(
			getHotkeyMatcher("mod+S")(
				new KeyboardEvent("keydown", {
					shiftKey: true,
					metaKey: true,
					key: "E",
				}),
			),
		).toBe(false);

		expect(
			getHotkeyMatcher("mod+S")(
				new KeyboardEvent("keydown", {
					metaKey: true,
					shiftKey: true,
					key: "E",
				}),
			),
		).toBe(false);

		expect(
			getHotkeyMatcher("shift+alt+O")(
				new KeyboardEvent("keydown", {
					ctrlKey: true,
					altKey: true,
					shiftKey: true,
					key: "O",
				}),
			),
		).toBe(false);
	});
});

//----------------------------------------------

describe("parseHotkey", () => {
	it("should parse a hotkey string into a Hotkey object", () => {
		expect(parseHotkey("ctrl+alt+shift+a")).toEqual({
			ctrl: true,
			alt: true,
			shift: true,
			mod: false,
			meta: false,
			key: "a",
		});

		expect(parseHotkey("mod+b")).toEqual({
			ctrl: false,
			alt: false,
			shift: false,
			mod: true,
			meta: false,
			key: "b",
		});

		expect(parseHotkey("meta+c")).toEqual({
			ctrl: false,
			alt: false,
			shift: false,
			mod: false,
			meta: true,
			key: "c",
		});
	});

	it("should handle hotkeys without a free key", () => {
		expect(parseHotkey("ctrl+alt+shift")).toEqual({
			ctrl: true,
			alt: true,
			shift: true,
			mod: false,
			meta: false,
			key: undefined,
		});
	});
});

describe("getHotkeyMatcher", () => {
	it("should match the correct hotkey event", () => {
		const matcher = getHotkeyMatcher("ctrl+alt+a");

		const event = new KeyboardEvent("keydown", {
			ctrlKey: true,
			altKey: true,
			key: "a",
		});

		expect(matcher(event)).toBe(true);
	});

	it("should not match an incorrect hotkey event", () => {
		const matcher = getHotkeyMatcher("ctrl+alt+b");

		const event = new KeyboardEvent("keydown", {
			ctrlKey: true,
			altKey: true,
			key: "a",
		});

		expect(matcher(event)).toBe(false);
	});

	it("should not match if mod key is expected but neither ctrl nor meta is pressed", () => {
		const matcher = getHotkeyMatcher("mod+a");

		const event = new KeyboardEvent("keydown", {
			key: "a",
		});

		expect(matcher(event)).toBe(false);
	});

	it("should match if mod key is expected and ctrl is pressed", () => {
		const matcher = getHotkeyMatcher("mod+a");

		const event = new KeyboardEvent("keydown", {
			ctrlKey: true,
			key: "a",
		});

		expect(matcher(event)).toBe(true);
	});

	it("should match if mod key is expected and meta is pressed", () => {
		const matcher = getHotkeyMatcher("mod+a");

		const event = new KeyboardEvent("keydown", {
			metaKey: true,
			key: "a",
		});

		expect(matcher(event)).toBe(true);
	});

	it("should not match if meta key is expected but not pressed", () => {
		const matcher = getHotkeyMatcher("meta+a");

		const event = new KeyboardEvent("keydown", {
			key: "a",
		});

		expect(matcher(event)).toBe(false);
	});

	it("should match if meta key is expected and pressed", () => {
		const matcher = getHotkeyMatcher("meta+a");

		const event = new KeyboardEvent("keydown", {
			metaKey: true,
			key: "a",
		});

		expect(matcher(event)).toBe(true);
	});
});

describe("getHotkeyHandler", () => {
	it("should call the correct handler for a matching hotkey", () => {
		const handler = vi.fn();
		const hotkeys: [string, (event: any) => void, HotkeyItemOptions?][] = [
			["ctrl+a", handler],
		];

		const event = new KeyboardEvent("keydown", {
			ctrlKey: true,
			key: "a",
		});

		const hotkeyHandler = getHotkeyHandler(hotkeys);
		hotkeyHandler(event);

		expect(handler).toHaveBeenCalledTimes(1);
	});

	it("should prevent default if option is set", () => {
		const handler = vi.fn();
		const hotkeys: [string, (event: any) => void, HotkeyItemOptions?][] = [
			["ctrl+a", handler, { preventDefault: true }],
		];

		const event = new KeyboardEvent("keydown", {
			ctrlKey: true,
			key: "a",
		});

		const preventDefaultSpy = vi.spyOn(event, "preventDefault");

		const hotkeyHandler = getHotkeyHandler(hotkeys);
		hotkeyHandler(event);

		expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
	});

	it("should not prevent default if option is not set", () => {
		const handler = vi.fn();
		const hotkeys: [string, (event: any) => void, HotkeyItemOptions?][] = [
			["ctrl+a", handler, { preventDefault: false }],
		];

		const event = new KeyboardEvent("keydown", {
			ctrlKey: true,
			key: "a",
		});

		const preventDefaultSpy = vi.spyOn(event, "preventDefault");

		const hotkeyHandler = getHotkeyHandler(hotkeys);
		hotkeyHandler(event);

		expect(preventDefaultSpy).not.toHaveBeenCalled();
	});

	it("should handle events with nativeEvent correctly", () => {
		const handler = vi.fn();
		const hotkeys: [string, (event: any) => void, HotkeyItemOptions?][] = [
			["ctrl+a", handler],
		];

		const nativeEvent = new KeyboardEvent("keydown", {
			ctrlKey: true,
			key: "a",
		});

		const event = {
			nativeEvent,
			preventDefault: vi.fn(),
		};

		const hotkeyHandler = getHotkeyHandler(hotkeys);
		hotkeyHandler(event as unknown as React.KeyboardEvent<HTMLElement>);

		expect(handler).toHaveBeenCalledTimes(1);
		expect(event.preventDefault).toHaveBeenCalledTimes(1);
	});
});
