import clsx from "clsx";

import { PILL_CLASSNAME } from "../../common/constants";
import type { PillProps } from "./PillTypes";

const getPillBorderClasses = ({ variant }: { variant?: string }) => {
	return clsx("rounded-sm border", {
		"border-border-information": variant === "information",
		"border-border-warning": variant === "warning",
		"border-border-success": variant === "success",
		"border-border-error": variant === "error",
	});
};

const getPillCopyClasses = ({ variant }: { variant?: string }) => {
	return clsx("not-prose", {
		"text-copy-information": variant === "information",
		"text-copy-warning": variant === "warning",
		"text-copy-success": variant === "success",
		"text-copy-error": variant === "error",
	});
};

const getPillBackgroundClasses = ({ variant }: { variant?: string }) => {
	return clsx({
		"bg-surface-information": variant === "information",
		"bg-surface-warning": variant === "warning",
		"bg-surface-success": variant === "success",
		"bg-surface-error": variant === "error",
	});
};

export const getPillClasses = (props: PillProps) => {
	const { className, variant } = props;

	return clsx(
		PILL_CLASSNAME,
		"px-2 py-0.5 text-xs",
		getPillBorderClasses({ variant }),
		getPillCopyClasses({ variant }),
		getPillBackgroundClasses(props),
		className,
	);
};
