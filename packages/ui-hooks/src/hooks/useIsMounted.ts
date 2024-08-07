import { useCallback, useEffect, useRef } from "react";

/**
 * Custom hook that returns a function indicating whether the component
 * is mounted or not.
 *
 * @returns A function that returns a boolean value indicating whether
 *          the component is mounted.
 *
 * @example
 * const isMounted = useIsMounted();
 * console.log(isMounted()); // true
 *
 */
export function useIsMounted(): () => boolean {
	const isMounted = useRef(false);
	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);
	return useCallback(() => isMounted.current, []);
}
