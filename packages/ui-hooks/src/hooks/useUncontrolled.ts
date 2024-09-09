import { useEffect, useState } from "react";

interface UseUncontrolledInput<T> {
	/** Value for controlled state */
	value?: T;

	/** Initial value for uncontrolled state */
	defaultValue?: T;

	/** Final value for uncontrolled state when value and defaultValue are not provided */
	finalValue?: T;

	/** Controlled state onChange handler */
	onChange?: (value: T) => void;

	/** Initial delay for controlled state */
	initialControlledDelay?: number;
}

export function useUncontrolled<T>({
	value,
	defaultValue,
	finalValue,
	onChange = () => {},
	initialControlledDelay = 0,
}: UseUncontrolledInput<T>): [T, (value: T) => void, boolean] {
	const [initialDelayDone, setInitialDelayDone] = useState(false);
	const [uncontrolledValue, setUncontrolledValue] = useState(
		defaultValue !== undefined ? defaultValue : finalValue,
	);

	const handleUncontrolledChange = (val: T) => {
		setUncontrolledValue(val);
		onChange?.(val);
	};

	useEffect(() => {
		(async () => {
			/**
			 * If initialControlledDelay is provided, wait for the delay.
			 */
			if (value !== undefined) {
				/* c8 ignore start */
				if (!initialDelayDone && initialControlledDelay > 0) {
					await new Promise((resolve) =>
						setTimeout(resolve, initialControlledDelay),
					);
					setInitialDelayDone(true);
				}
				/* c8 ignore end */
			}
		})();
	}, [value, initialControlledDelay, initialDelayDone]);

	/**
	 * If value is provided, return the controlled value.
	 * If there is a delay, we need to wait for the delay: we need to first send
	 * back a value of an empty string, then after the delay
	 * we can send the actual value.
	 */
	if (value !== undefined) {
		if (!initialDelayDone && initialControlledDelay > 0) {
			return ["" as T, onChange, true];
		} else {
			return [value as T, onChange, true];
		}
	}

	/**
	 * If value is not provided, return the uncontrolled value.
	 */
	return [uncontrolledValue as T, handleUncontrolledChange, false];
}
