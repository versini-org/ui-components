import { vi } from "vitest";

export class ResizeObserverMock {
	private static _instances: ResizeObserverMock[] = [];

	private callback: any;
	private _observe: any;
	private _unobserve: any;
	private _disconnect: any;

	constructor(callback: ResizeObserverCallback) {
		this.callback = callback;
		this.observe = vi.fn();
		this.unobserve = vi.fn();
		this.disconnect = vi.fn();
		ResizeObserverMock._instances.push(this);
	}

	public static get instances(): ResizeObserverMock[] {
		return ResizeObserverMock._instances;
	}

	public observe(element: Element): void {
		this._observe.mock.calls.push([element]);
	}

	public unobserve(element: Element): void {
		this._unobserve.mock.calls.push([element]);
	}

	public disconnect(): void {
		this._disconnect.mock.calls.push([]);
	}

	public mockTrigger(entries: ResizeObserverEntry[]): void {
		this.callback(entries, this);
	}

	public simulateResize({
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
		ResizeObserverMock._instances.forEach((target) => {
			target.callback([
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
}
