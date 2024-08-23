import { act, render, renderHook } from "@testing-library/react";

import { forwardRef } from "react";
import { useResizeObserver } from "../useResizeObserver";

class ResizeObserverMock {
	fn: any;
	static instances: ResizeObserverMock[] = [];
	/**
	 * Simulate a resize event on all instances of ResizeObserverMock
	 * It can be called with no arguments or with an optional object that
	 * contains the contentRect property.
	 *
	 * @static
	 * @param {ResizeObserverEntry[]} [entries] - The entries to simulate the resize event with.
	 * @returns {void}
	 *
	 */
	static simulateResize({
		bottom,
		height,
		left,
		right,
		top,
		width,
	}: {
		bottom?: number;
		height?: number;
		left?: number;
		right?: number;
		top?: number;
		width?: number;
	} = {}) {
		ResizeObserverMock.instances.forEach((target) => {
			target.fn([
				{
					contentRect: {
						bottom: bottom || 0,
						height: height || 0,
						left: left || 0,
						right: right || 0,
						top: top || 0,
						width: width || 0,
					},
				},
			]);
		});
	}

	constructor(fn: any) {
		this.fn = fn;
		ResizeObserverMock.instances.push(this);
	}

	observe() {
		this.fn([
			{
				contentRect: {
					bottom: 0,
					height: 0,
					left: 0,
					right: 0,
					top: 0,
					width: 0,
				},
			},
		]);
	}
	unobserve() {
		ResizeObserverMock.instances = [];
	}
	disconnect() {
		ResizeObserverMock.instances = [];
	}
}

const TestComponent = forwardRef<HTMLDivElement>((_, ref) => {
	return <div ref={ref}>hello world</div>;
});

vi.spyOn(window, "requestAnimationFrame").mockImplementation(
	(callback: FrameRequestCallback): number => {
		callback(0);
		return 0;
	},
);

describe("useResizeObserver", () => {
	const originalResizeObserver = global.ResizeObserver;
	beforeAll(() => {
		global.ResizeObserver = window.ResizeObserver = ResizeObserverMock;
	});
	afterAll(() => {
		global.ResizeObserver = window.ResizeObserver = originalResizeObserver;
	});
	it("should return 0 when first initialized", () => {
		global.ResizeObserver = window.ResizeObserver = ResizeObserverMock;
		const { result } = renderHook(() => useResizeObserver());
		expect(result.current[1].width).toBe(0);
	});

	it("should return 10 when width is resized to 10", () => {
		global.ResizeObserver = window.ResizeObserver = ResizeObserverMock;
		const { result } = renderHook(() => useResizeObserver());
		render(<TestComponent ref={result.current[0]} />);
		act(() => {
			ResizeObserverMock.simulateResize({ width: 10 });
		});
		expect(result.current[1].width).toBe(10);
	});
});
