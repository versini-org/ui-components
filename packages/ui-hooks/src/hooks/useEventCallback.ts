import { useCallback, useEffect, useRef } from "react";

export function useEventCallback<Args extends unknown[], R>(
	fn: (...args: Args) => R,
) {
	const ref = useRef<typeof fn>(() => {
		/* v8 ignore next 1 */
		throw new Error("Cannot call an event handler while rendering.");
	});

	useEffect(() => {
		ref.current = fn;
	}, [fn]);

	// biome-ignore lint/correctness/useExhaustiveDependencies:
	return useCallback((...args: Args) => ref.current(...args), [ref]);
}
