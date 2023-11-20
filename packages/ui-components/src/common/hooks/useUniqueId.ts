import { nanoid } from "nanoid";
import { useRef } from "react";

/**
 * Hook that generates a unique id that will retain its value
 * during the lifecycle of the calling functional component.
 *
 * The parameters are either
 * - nothing: a unique id will simply be generated with no prefix.
 * - a string: a prefix to prepend to the generated id.
 * - an object with the following props:
 *    - id: if this is a number or a string, it will be returned as is
 *    - prefix: prefix to prepend to the generated id.
 *
 * @param {string | object} options
 * @returns a unique id
 *
 * @example
 *
 * const myId = "42";
 * const errorId = useUniqueId("pnr-text-input-error-");
 * const inputId = useUniqueId({ id: myId, prefix: "pnr-text-input-" });
 * const inputHintId = useUniqueId({
 *   prefix: "pnr-text-input-hint-",
 *
 * });
 *
 */

export type UseUniqueIdOptions =
	| string
	| number
	| {
			id?: string | number;
			prefix?: string;
	  };

function useUniqueId(options?: UseUniqueIdOptions) {
	const generatedId = useRef(nanoid(10)).current;

	if (!options) {
		return generatedId;
	}

	if (typeof options === "number" || typeof options === "string") {
		return `${options}${generatedId}`;
	}

	if (typeof options === "object") {
		const { id, prefix = "" } = options;

		if (typeof id === "number" || typeof id === "string") {
			return `${id}`;
		}
		return `${prefix}${generatedId}`;
	}
}

export default useUniqueId;
