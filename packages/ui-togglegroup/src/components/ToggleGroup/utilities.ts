import clsx from "clsx";
import { TOGGLEGROUP_CLASSNAME } from "../../common/constants";
import type { Mode, Size } from "./ToggleGroupTypes";

const getToggleGroupItemFocusClasses = ({ focusMode }: { focusMode: Mode }) => {
	return clsx("focus:outline", "focus:outline-2", "focus:outline-offset", {
		"focus:outline-focus-light": focusMode === "light",
		"focus:outline-focus-dark": focusMode === "dark",

		"focus:outline-focus-light dark:focus:outline-focus-dark":
			focusMode === "alt-system",

		"focus:outline-focus-dark dark:focus:outline-focus-light":
			focusMode === "system",
	});
};

const getToggleGroupItemActiveClasses = ({ mode }: { mode: Mode }) => {
	return clsx({
		"data-[state=on]:bg-surface-medium": mode === "dark",
		"data-[state=on]:bg-surface-lightest": mode === "light",
		"data-[state=on]:bg-surface-lightest dark:data-[state=on]:bg-surface-medium":
			mode === "system",
		"data-[state=on]:bg-surface-medium dark:data-[state=on]:bg-surface-lightest":
			mode === "alt-system",
	});
};

const getToggleItemGroupSizeClasses = ({ size }: { size: Size }) => {
	return clsx("mx-1", "first:ml-0 last:mr-0", {
		"h-5 px-2": size === "small",
		"h-6 px-3": size === "medium",
		"h-7 px-4": size === "large",
	});
};

export const getToggleGroupItemClasses = ({
	focusMode,
	mode,
	size,
}: {
	focusMode: Mode;
	mode: Mode;
	size: Size;
}) => {
	return clsx(
		"flex items-center justify-center bg-transparent",
		"rounded-sm",
		"transition duration-200 ease",
		getToggleItemGroupSizeClasses({ size }),
		getToggleGroupItemFocusClasses({ focusMode }),
		getToggleGroupItemActiveClasses({ mode }),
	);
};

export const getToggleGroupClasses = ({ mode }: { mode: Mode }) => {
	return clsx(TOGGLEGROUP_CLASSNAME, "inline-flex p-1", "rounded-sm", {
		"bg-surface-light text-copy-dark": mode === "light",
		"bg-surface-darker text-copy-lighter": mode === "dark",
		"bg-surface-light text-copy-dark dark:bg-surface-darker dark:text-copy-lighter":
			mode === "system",
		"bg-surface-darker text-copy-lighter dark:bg-surface-light dark:text-copy-dark":
			mode === "alt-system",
	});
};
