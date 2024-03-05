import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import { TOGGLE_CLASSNAME } from "../../common/constants";

const getToggleBaseClasses = () => {
	return clsx(TOGGLE_CLASSNAME, "peer h-6 w-11 rounded-full");
};

const getToggleKnobClasses = () => {
	return clsx(
		"after:absolute",
		"after:h-5",
		"after:w-5",
		"after:rounded-full",
		"after:transition-all",
		"after:content-['']",
		"peer-focus:outline-none",
		"peer-focus:ring-2",
		"peer-focus:ring-white",
	);
};

const getToggleKnobOnClasses = () => {
	return clsx(
		"peer-checked:bg-[#5bc236]",
		"peer-checked:after:translate-x-full",
		"peer-checked:after:border-white",
	);
};
const getToggleKnobOffClasses = () => {
	return clsx(
		"after:left-[2px]",
		"after:top-[2px]",
		"after:border",
		"after:border-white",
		"after:bg-white",
	);
};

const getToggleColorClasses = ({ mode }: { mode: string }) => {
	return clsx({
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
	mode: string;
}) => {
	return labelHidden
		? "sr-only"
		: clsx("ml-3 text-sm", {
				"text-copy-dark": mode === "light",
				"text-copy-lighter": mode === "dark",
				"text-copy-lighter dark:text-copy-dark": mode === "alt-system",
				"text-copy-dark dark:text-copy-lighter": mode === "system",
			});
};

const getInputClasses = () => {
	return "peer sr-only";
};

const getWrapperClasses = ({ spacing }: SpacingProps) => {
	return clsx("relative flex cursor-pointer items-center", getSpacing(spacing));
};

export const getToggleClasses = ({
	mode,
	labelHidden,
	spacing,
}: {
	labelHidden: boolean;
	mode: string;
} & SpacingProps) => {
	return {
		toggle: clsx(
			getToggleBaseClasses(),
			getToggleColorClasses({ mode }),
			getToggleKnobClasses(),
			getToggleKnobOffClasses(),
			getToggleKnobOnClasses(),
		),
		label: getLabelClasses({ mode, labelHidden }),
		input: getInputClasses(),
		wrapper: getWrapperClasses({ spacing }),
	};
};
