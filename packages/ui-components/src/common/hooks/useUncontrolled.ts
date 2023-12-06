/**
 * MIT License
 *
 * Copyright (c) 2021 Vitaly Rtishchev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { useState } from "react";

interface UseUncontrolledInput<T> {
	/** Value for controlled state */
	value?: T;

	/** Initial value for uncontrolled state */
	defaultValue?: T;

	/** Final value for uncontrolled state when value and defaultValue are not provided */
	finalValue?: T;

	/** Controlled state onChange handler */
	onChange?: (value: T) => void;
}

export function useUncontrolled<T>({
	value,
	defaultValue,
	finalValue,
	onChange = () => {},
}: UseUncontrolledInput<T>): [T, (value: T) => void, boolean] {
	const [uncontrolledValue, setUncontrolledValue] = useState(
		defaultValue !== undefined ? defaultValue : finalValue,
	);

	const handleUncontrolledChange = (val: T) => {
		setUncontrolledValue(val);
		onChange?.(val);
	};

	if (value !== undefined) {
		return [value as T, onChange, true];
	}

	return [uncontrolledValue as T, handleUncontrolledChange, false];
}
