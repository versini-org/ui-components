import clsx from "clsx";

import type { SpacingProps } from "../../common";
import { TOGGLE_CLASSNAME } from "../../common/constants";
import { getSpacing } from "../../common/utilities";

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

const getToggleColorClasses = ({ kind }: { kind: string }) => {
	return clsx({
		"border-border-dark bg-surface-medium": kind === "light",
		"border-border-light bg-surface-dark": kind === "dark",
	});
};

const getLabelClasses = ({
	kind,
	labelHidden,
}: {
	kind: string;
	labelHidden: boolean;
}) => {
	return labelHidden
		? "sr-only"
		: clsx("ml-3 text-sm", {
				"text-copy-medium": kind === "light",
				"text-copy-light": kind === "dark",
			});
};

const getInputClasses = () => {
	return "peer sr-only";
};

const getWrapperClasses = ({ spacing }: SpacingProps) => {
	return clsx("relative flex cursor-pointer items-center", getSpacing(spacing));
};

export const getToggleClasses = ({
	kind,
	labelHidden,
	spacing,
}: {
	kind: string;
	labelHidden: boolean;
} & SpacingProps) => {
	return {
		toggle: clsx(
			getToggleBaseClasses(),
			getToggleColorClasses({ kind }),
			getToggleKnobClasses(),
			getToggleKnobOffClasses(),
			getToggleKnobOnClasses(),
		),
		label: getLabelClasses({ kind, labelHidden }),
		input: getInputClasses(),
		wrapper: getWrapperClasses({ spacing }),
	};
};
