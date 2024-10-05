import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import {
	TOGGLEGROUP_CLASSNAME,
	TOGGLEGROUP_ITEM_CLASSNAME,
	TOGGLEGROUP_ITEM_WRAPPER_CLASSNAME,
} from "../../common/constants";
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

const getToggleGroupItemSizeClasses = ({ size }: { size: Size }) => {
	return clsx({
		"h-5 px-2": size === "small",
		"h-6 px-3": size === "medium",
		"h-7 px-4": size === "large",
	});
};

const getToggleGroupItemWrapperClasses = ({ mode }: { mode: Mode }) => {
	return clsx(
		TOGGLEGROUP_ITEM_WRAPPER_CLASSNAME,
		"px-1",
		"relative",
		"border-r",
		"last:border-transparent",
		"has-[button[aria-checked='true']]:border-transparent",
		"has-[+_*_button[aria-checked='false']]:border-border-medium",
		{
			"border-surface-light": mode === "light",
			"border-surface-darker": mode === "dark",
			"border-surface-light dark:border-surface-darker": mode === "system",
			"border-surface-darker dark:border-surface-light": mode === "alt-system",
		},
	);
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
	return {
		wrapperClass: getToggleGroupItemWrapperClasses({ mode }),

		itemClass: clsx(
			TOGGLEGROUP_ITEM_CLASSNAME,
			"flex items-center justify-center bg-transparent",
			"rounded-sm",
			"transition duration-200 ease",

			getToggleGroupItemSizeClasses({ size }),
			getToggleGroupItemFocusClasses({ focusMode }),
			getToggleGroupItemActiveClasses({ mode }),
		),
	};
};

export const getToggleGroupClasses = ({
	mode,
	spacing,
}: { mode: Mode } & SpacingProps) => {
	return clsx(
		TOGGLEGROUP_CLASSNAME,
		getSpacing(spacing),
		"inline-flex p-1",
		"rounded-sm",
		{
			"bg-surface-light text-copy-dark": mode === "light",
			"bg-surface-darker text-copy-lighter": mode === "dark",
			"bg-surface-light text-copy-dark dark:bg-surface-darker dark:text-copy-lighter":
				mode === "system",
			"bg-surface-darker text-copy-lighter dark:bg-surface-light dark:text-copy-dark":
				mode === "alt-system",
		},
	);
};
