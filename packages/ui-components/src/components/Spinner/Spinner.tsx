import clsx from "clsx";

import { SPINNER_CLASSNAME } from "../../common/constants";
import type { SpinnerProps } from "./SpinnerTypes";

export const Spinner = ({
	spinnerRef,
	kind = "dark",
	type = "circle",
}: SpinnerProps) => {
	const spinnerClassName =
		type === "circle"
			? clsx(
					SPINNER_CLASSNAME,
					"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
					{
						"text-copy-dark": kind === "dark",
						"text-copy-light": kind === "light",
					},
			  )
			: "";

	const dotClassName = clsx("av-spinner__dot", {
		"fill-copy-dark": kind === "dark",
		"fill-copy-light": kind === "light",
	});

	return (
		<div ref={spinnerRef} className={spinnerClassName} role="status">
			{type === "dots" && (
				<svg className="h-8 w-8">
					<circle className={dotClassName} cx="10" cy="50%" r="3" />
					<circle className={dotClassName} cx="18" cy="50%" r="3" />
					<circle className={dotClassName} cx="26" cy="50%" r="3" />
				</svg>
			)}
			<span className="sr-only">Loading...</span>
		</div>
	);
};
