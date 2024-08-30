import { act, render, renderHook } from "@testing-library/react";
import { forwardRef } from "react";
import { useResizeObserver } from "../useResizeObserver";
import { ResizeObserverMock } from "./__mocks__/ResizeObserver";

vi.spyOn(window, "requestAnimationFrame").mockImplementation(
	(callback: FrameRequestCallback): number => {
		callback(0);
		return 0;
	},
);
const TestComponent = forwardRef<HTMLDivElement>((_, ref) => {
	return <div ref={ref}>hello world</div>;
});

describe("useResizeObserver", () => {
	it("should return 0 when first initialized", () => {
		global.ResizeObserver = window.ResizeObserver = ResizeObserverMock;
		const { result } = renderHook(() => useResizeObserver());
		expect(result.current[0]).toBeInstanceOf(Object);
		expect(result.current[1]).toEqual({
			x: 0,
			y: 0,
			width: 0,
			height: 0,
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
		});
	});

	it("should update the sizes when the observed element changes size", async () => {
		global.ResizeObserver = window.ResizeObserver = ResizeObserverMock;
		const { result } = renderHook(() => useResizeObserver());
		render(<TestComponent ref={result.current[0]} />);
		const observer = ResizeObserverMock.instances[0];

		act(() => {
			observer.simulateResize({ width: 100, height: 200 });
		});

		expect(result.current[1].width).toBe(100);
		expect(result.current[1].height).toBe(200);
	});

	it("disconnects the observer when the component unmounts", () => {
		global.ResizeObserver = window.ResizeObserver = ResizeObserverMock;
		const { result, unmount } = renderHook(() => useResizeObserver());
		render(<TestComponent ref={result.current[0]} />);
		const observer = ResizeObserverMock.instances[0];
		unmount();
		expect(observer.disconnect).toHaveBeenCalledTimes(1);
	});
});
