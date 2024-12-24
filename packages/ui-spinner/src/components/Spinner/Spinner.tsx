import { getSpacing } from "@versini/ui-spacing";
import clsx from "clsx";

import { SPINNER_CLASSNAME } from "../../common/constants";
import type { SpinnerProps } from "./SpinnerTypes";

export const Spinner = ({
	spinnerRef,
	mode = "system",
	type = "circle",
	spacing,
}: SpinnerProps) => {
	const spinnerClassName =
		type === "circle"
			? clsx(
					SPINNER_CLASSNAME,
					getSpacing(spacing),
					"h-8 w-8",
					"align-[-0.125em]",
					"border-4",
					"inline-block animate-spin rounded-full border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]",
					{
						"text-copy-dark": mode === "dark",
						"text-copy-accent": mode === "light",
						"text-copy-dark dark:text-copy-accent": mode === "system",
						"text-copy-accent dark:text-copy-dark": mode === "alt-system",
					},
				)
			: clsx(SPINNER_CLASSNAME, getSpacing(spacing));

	const dotClassName = clsx("av-spinner__dot", {
		"fill-copy-dark": mode === "dark",
		"fill-copy-accent": mode === "light",
		"fill-copy-dark dark:fill-copy-accent": mode === "system",
		"fill-copy-accent dark:fill-copy-dark": mode === "alt-system",
	});

	return (
		<div ref={spinnerRef} className={spinnerClassName} role="status">
			{type === "dots" && (
				<svg className="h-8 w-8">
					<circle className={dotClassName} cx="6" cy="50%" r="3" />
					<circle className={dotClassName} cx="50%" cy="50%" r="3" />
					<circle className={dotClassName} cx="80%" cy="50%" r="3" />
				</svg>
			)}
			<span className="sr-only">Loading...</span>
		</div>
	);
};
