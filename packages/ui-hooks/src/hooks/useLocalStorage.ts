/* eslint-disable no-console */

import { useCallback, useState } from "react";

import { useEventListener } from "./useEventListener";

const CUSTOM_EVENT_NAME = "av-local-storage";

declare global {
	interface WindowEventMap {
		[CUSTOM_EVENT_NAME]: CustomEvent;
	}
}

export interface StorageProperties<T> {
	/**
	 * Storage key.
	 */
	key: string;

	/**
	 * Default value that will be set if value is not found in storage.
	 */
	defaultValue?: T;

	/**
	 * Function to serialize value into string to be saved in storage.
	 */
	serialize?: (value: T) => string;

	/**
	 * Function to deserialize string value from storage to value.
	 */
	deserialize?: (value: string | undefined) => T;
}

const serializeJSON = <T>(value: T) => {
	try {
		return JSON.stringify(value);
		/* v8 ignore next 5 */
	} catch (error) {
		throw new Error(
			`@versini/ui-hooks useLocalStorage: Failed to serialize the value`,
		);
	}
};

const deserializeJSON = (value: string | undefined) => {
	try {
		return value && JSON.parse(value);
		/* v8 ignore next 3 */
	} catch {
		return value;
	}
};

/**
 *
 * @example
 * import { useLocalStorage } from '@versini/ui-hooks';
 * const [value, setValue] = useLocalStorage({
 *   key: 'gpt-model',
 *   defaultValue: 'gpt-3',
 * });
 *
 * setValue('gpt-4');
 * setValue((current) => (current === 'gpt-3' ? 'gpt-4' : 'gpt-3'));
 */

export function useLocalStorage<T = string>({
	key,
	defaultValue,
	deserialize = deserializeJSON,
	serialize = (value: T) => serializeJSON(value),
}: StorageProperties<T>) {
	const actualDefaultValue =
		typeof defaultValue === "function" ? defaultValue() : defaultValue;

	/**
	 * Read value from localStorage.
	 * If value is not found, update localStorage with
	 * actualDefaultValue and return it.
	 */
	const readStorageValue = useCallback((): T => {
		let storageBlockedOrSkipped;

		try {
			storageBlockedOrSkipped =
				typeof window === "undefined" ||
				!("localStorage" in window) ||
				window.localStorage === null;
			/* v8 ignore next 3 */
		} catch (_e) {
			storageBlockedOrSkipped = true;
		}

		/* v8 ignore next 4 */
		if (storageBlockedOrSkipped) {
			window.localStorage.setItem(key, serialize(actualDefaultValue as T));
			return actualDefaultValue as T;
		}

		try {
			const item = window.localStorage.getItem(key);
			// return item !== null ? deserialize(item) : (actualDefaultValue as T);
			if (item !== null) {
				return deserialize(item);
			} else {
				window.localStorage.setItem(key, serialize(actualDefaultValue as T));
				return actualDefaultValue as T;
			}
			/* v8 ignore next 4 */
		} catch (error) {
			console.warn(`Error reading localStorage key “${key}”:`, error);
			return actualDefaultValue as T;
		}
	}, [actualDefaultValue, deserialize, key, serialize]);

	const [value, setValue] = useState<T>(readStorageValue());

	/**
	 * Write value to localStorage and update state.
	 */
	const setStorageValue = useCallback(
		(val: T | ((prevState: T) => T)) => {
			try {
				const newValue = val instanceof Function ? val(value) : val;
				if (newValue === undefined) {
					return;
				}
				window.localStorage.setItem(key, serialize(newValue));
				setValue(newValue);
				window.dispatchEvent(new Event(CUSTOM_EVENT_NAME));
				/* v8 ignore next 3 */
			} catch (error) {
				console.warn(`Error setting localStorage key “${key}”:`, error);
			}
		},
		[key, serialize, value],
	);

	/**
	 * Remove value from localStorage and reset state.
	 */
	const resetStorageValue = useCallback((): T => {
		window.localStorage.removeItem(key);
		setValue(readStorageValue());
		window.dispatchEvent(new Event(CUSTOM_EVENT_NAME));
		return value;
	}, [key, readStorageValue, value]);

	/**
	 * Listen to storage change events and update state.
	 * This enables usage of `localStorage` hooks in other windows / tabs.
	 */
	const handleStorageChangeOnEvent = useCallback(
		(event: StorageEvent | CustomEvent) => {
			/* v8 ignore next 3 */
			if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
				return;
			}
			setValue(readStorageValue());
		},
		[key, readStorageValue],
	);
	useEventListener(CUSTOM_EVENT_NAME, handleStorageChangeOnEvent);

	return [value, setStorageValue, resetStorageValue] as [
		T,
		(val: T | ((prevState: T) => T)) => void,
		() => void,
	];
}
