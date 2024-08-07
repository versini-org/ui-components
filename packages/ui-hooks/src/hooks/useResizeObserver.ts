/* c8 ignore start */

import { useEffect, useMemo, useRef, useState } from "react";

import { useIsMounted } from "./useIsMounted";

type ObserverRect = Omit<DOMRectReadOnly, "toJSON">;

const defaultState: ObserverRect = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
};

/**
 * A custom hook that uses the ResizeObserver API to track the size changes of a DOM element.
 *
 * @template T - The type of the DOM element being observed.
 * @param {ResizeObserverOptions} [options] - The options to configure the ResizeObserver.
 * @returns {[React.RefObject<T>, ObserverRect]} - A tuple containing the ref object and
 *                                                the observed rectangle.
 * @example
 *
 * const [rightElementRef, rect] = useResizeObserver<HTMLDivElement>();
 * <div ref={componentRef}>
 *   Observed: <code>{JSON.stringify(rect)}</code>
 * </div>
 */
export function useResizeObserver<T extends HTMLElement = any>(
	options?: ResizeObserverOptions,
) {
	const isMounted = useIsMounted();
	const frameID = useRef(0);
	const ref = useRef<T>(null);

	const [rect, setRect] = useState<ObserverRect>(defaultState);

	const observer = useMemo(
		() =>
			typeof window !== "undefined"
				? new ResizeObserver((entries: any) => {
						const entry = entries[0];

						if (entry) {
							cancelAnimationFrame(frameID.current);

							frameID.current = requestAnimationFrame(() => {
								if (ref.current && isMounted()) {
									setRect(entry.contentRect);
								}
							});
						}
					})
				: null,
		[isMounted],
	);

	useEffect(() => {
		if (ref.current) {
			observer?.observe(ref.current, options);
		}

		return () => {
			observer?.disconnect();

			if (frameID.current) {
				cancelAnimationFrame(frameID.current);
			}
		};
	}, [observer, options]);

	return [ref, rect] as const;
}

/* c8 ignore end */
