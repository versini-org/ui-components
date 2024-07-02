import { useCallback, useEffect, useSyncExternalStore } from "react";

function dispatchStorageEvent(key: string, newValue: string | null) {
	window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
}

const setLocalStorageItem = (key: string, value: any) => {
	const stringifiedValue = JSON.stringify(
		typeof value === "function" ? value() : value,
	);
	window.localStorage.setItem(key, stringifiedValue);
	dispatchStorageEvent(key, stringifiedValue);
};

const removeLocalStorageItem = (key: string) => {
	window.localStorage.removeItem(key);
	dispatchStorageEvent(key, null);
};

const getLocalStorageItem = (key: string) => {
	return window.localStorage.getItem(key);
};

const useLocalStorageSubscribe = (callback: {
	(this: Window, ev: StorageEvent): any;
	(this: Window, ev: StorageEvent): any;
}) => {
	window.addEventListener("storage", callback);
	return () => window.removeEventListener("storage", callback);
};

export interface StorageProperties<T> {
	/**
	 * Storage key.
	 */
	key: string;
	/**
	 * Default value that will be set if value is not found in storage.
	 */
	initialValue?: T;
}

/**
 *
 * @example
 * import { useLocalStorage } from '@versini/ui-hooks';
 * const [value, setValue, resetValue, removeValue] = useLocalStorage({
 *   key: 'gpt-model',
 *   initialValue: 'gpt-3',
 * });
 *
 * setValue('gpt-4'); ==> "gpt-4"
 * setValue((current) => (current === 'gpt-3' ? 'gpt-4' : 'gpt-3'));
 * resetValue(); ==> "gpt-3"
 * removeValue(); ==> null
 */
export function useLocalStorage<T>({
	key,
	initialValue,
}: StorageProperties<T>) {
	const getSnapshot = () => getLocalStorageItem(key);

	const store = useSyncExternalStore(useLocalStorageSubscribe, getSnapshot);

	const setValue = useCallback(
		(v: (arg0: any) => any) => {
			try {
				const nextState =
					typeof v === "function" ? v(JSON.parse(store as string)) : v;

				if (nextState === undefined || nextState === null) {
					removeLocalStorageItem(key);
				} else {
					setLocalStorageItem(key, nextState);
				}
				/* v8 ignore next 3 */
			} catch (e) {
				console.warn(e);
			}
		},
		[key, store],
	);

	const resetValue = useCallback(() => {
		setValue(initialValue as any);
	}, [initialValue, setValue]);

	const removeValue = useCallback(() => {
		setValue(null as any);
	}, [setValue]);

	useEffect(() => {
		try {
			if (
				getLocalStorageItem(key) === null &&
				typeof initialValue !== "undefined"
			) {
				setLocalStorageItem(key, initialValue);
			}
			/* v8 ignore next 3 */
		} catch (e) {
			console.warn(e);
		}
	}, [key, initialValue]);

	return [store ? JSON.parse(store) : null, setValue, resetValue, removeValue];
}
