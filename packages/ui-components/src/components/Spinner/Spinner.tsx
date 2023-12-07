import clsx from "clsx";

import {
	SPINNER_CLASSNAME,
	VISUALLY_HIDDEN_CLASSNAME,
} from "../../common/constants";
import type { SpinnerProps } from "./SpinnerTypes";

export const Spinner = ({ spinnerRef, kind = "dark" }: SpinnerProps) => {
	const spinnerClassName = clsx(
		SPINNER_CLASSNAME,
		"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
		{
			"text-copy-dark": kind === "dark",
			"text-copy-light": kind === "light",
		},
	);
	return (
		<div ref={spinnerRef} className={spinnerClassName} role="status">
			<span className={VISUALLY_HIDDEN_CLASSNAME}>Loading...</span>
		</div>
	);
};
