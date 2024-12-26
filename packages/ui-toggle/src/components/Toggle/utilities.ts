import { getSpacing } from "@versini/ui-spacing";
import type { SpacingTypes } from "@versini/ui-types";
import clsx from "clsx";

import { TOGGLE_CLASSNAME } from "../../common/constants";

const getToggleBaseClasses = () => {
	return clsx("peer", "h-6", "w-11", "rounded-full");
};

const getToggleKnobFocusClasses = ({
	focusMode,
}: {
	focusMode?: "dark" | "light" | "system" | "alt-system";
}) => {
	return clsx(
		"peer-focus:outline",
		"peer-focus:outline-2",
		"peer-focus:outline-offset-2",
		{
			"peer-focus:outline-focus-dark": focusMode === "dark",
			"peer-focus:outline-focus-light": focusMode === "light",

			"peer-focus:outline-focus-light dark:peer-focus:outline-focus-dark":
				focusMode === "alt-system",

			"peer-focus:outline-focus-dark dark:peer-focus:outline-focus-light":
				focusMode === "system",
		},
	);
};

const getToggleKnobOnClasses = () => {
	return clsx(
		"peer-checked:after:translate-x-full",

		// background color when checked
		"peer-checked:bg-violet-500",

		// knob circle and border color when checked
		"peer-checked:after:bg-white",
		"peer-checked:after:border-white",
	);
};
const getToggleKnobOffClasses = () => {
	return clsx(
		"after:left-[2px]",
		"after:top-[2px]",
		"after:border",
		"after:border-surface-light dark:after:border-surface-medium",
		"after:bg-surface-light dark:after:bg-surface-medium",
		"after:absolute",
		"after:h-5",
		"after:w-5",
		"after:rounded-full",
		"after:transition-all",
		"after:content-['']",
	);
};

const getToggleColorClasses = ({
	mode,
	noBorder,
}: {
	mode: "dark" | "light" | "system" | "alt-system";
	noBorder: boolean;
}) => {
	return clsx({
		border: !noBorder,
		"border-border-dark bg-surface-medium": mode === "light",
		"border-border-light bg-surface-darker": mode === "dark",
		"border-border-light bg-surface-darker dark:border-border-dark dark:bg-surface-medium":
			mode === "alt-system",
		"border-border-dark bg-surface-medium dark:border-border-light dark:bg-surface-darker":
			mode === "system",
	});
};

const getLabelClasses = ({
	mode,
	labelHidden,
}: {
	labelHidden: boolean;
	mode: "dark" | "light" | "system" | "alt-system";
}) => {
	return labelHidden
		? "sr-only"
		: clsx("ml-2 text-sm", {
				"text-copy-dark": mode === "light",
				"text-copy-lighter": mode === "dark",
				"text-copy-lighter dark:text-copy-dark": mode === "alt-system",
				"text-copy-dark dark:text-copy-lighter": mode === "system",
			});
};

const getWrapperClasses = ({ spacing }: SpacingTypes.Props) => {
	return clsx(
		TOGGLE_CLASSNAME,
		"relative flex cursor-pointer items-center",
		getSpacing(spacing),
	);
};

export const getToggleClasses = ({
	mode,
	focusMode,
	labelHidden,
	spacing,
	noBorder,
}: {
	focusMode: "dark" | "light" | "system" | "alt-system";
	labelHidden: boolean;
	mode: "dark" | "light" | "system" | "alt-system";
	noBorder: boolean;
} & SpacingTypes.Props) => {
	return {
		toggle: clsx(
			getToggleBaseClasses(),
			getToggleColorClasses({ mode, noBorder }),
			getToggleKnobFocusClasses({ focusMode }),
			getToggleKnobOffClasses(),
			getToggleKnobOnClasses(),
		),
		label: getLabelClasses({ mode, labelHidden }),
		input: "peer sr-only",
		wrapper: getWrapperClasses({ spacing }),
	};
};
