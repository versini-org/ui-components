/**
 * React utility to merge refs.
 *
 * When developing low level UI components, it is common to have to use a local
 * ref but also support an external one using React.forwardRef. Natively, React
 * does not offer a way to set two refs inside the ref property.
 *
 * @param Array of refs (object, function, etc.)
 *
 * @example
 *
 * const Example = React.forwardRef(function Example(props, ref) {
 *   const localRef = React.useRef();
 *   const mergedRef = useMergeRefs([localRef, ref]);
 *
 *   return <div ref={mergedRefs} />;
 * });
 *
 */

import { useMemo } from "react";
export function useMergeRefs<T = any>(
	refs: Array<
		React.MutableRefObject<T> | React.LegacyRef<T> | undefined | null
	>,
): React.RefCallback<T> {
	return useMemo(() => {
		if (refs.every((ref) => ref == null)) {
			return () => {};
		}
		return (value) => {
			refs.forEach((ref) => {
				if (typeof ref === "function") {
					ref(value);
				} else if (ref != null) {
					(ref as React.MutableRefObject<T | null>).current = value;
				}
			});
		};
	}, [refs]);
}
