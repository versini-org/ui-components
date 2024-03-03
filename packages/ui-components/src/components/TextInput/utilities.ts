import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import {
	TEXT_INPUT_CLASSNAME,
	TEXT_INPUT_HELPER_TEXT_CLASSNAME,
	TEXT_INPUT_WRAPPER_CLASSNAME,
} from "../../common/constants";

type getTextInputClassesProps = {
	disabled: boolean;
	error: boolean;
	focusMode: "dark" | "light" | "system" | "alt-system";
	mode: "dark" | "light" | "system" | "alt-system";
	noBorder: boolean;
	raw: boolean;

	className?: string;
	inputClassName?: string;
} & SpacingProps;

const getTextInputColorClasses = ({
	mode,
}: {
	mode: "dark" | "light" | "system" | "alt-system";
}) => {
	return clsx({
		"bg-surface-darker text-copy-lighter caret-copy-light": mode === "dark",
		"bg-surface-lighter text-copy-dark caret-copy-dark": mode === "light",
		"bg-surface-lighter text-copy-dark caret-copy-dark dark:bg-surface-darker dark:text-copy-lighter dark:caret-copy-light":
			mode === "system",
		"bg-surface-darker text-copy-lighter caret-copy-light dark:bg-surface-lighter dark:text-copy-dark dark:caret-copy-dark":
			mode === "alt-system",
	});
};

const getTextInputFocusClasses = ({
	focusMode,
	error,
}: {
	error: boolean;
	focusMode: "dark" | "light" | "system" | "alt-system";
}) => {
	if (error) {
		return "focus:outline focus:outline-2 focus:outline-focus-error-dark";
	} else {
		return clsx("focus:outline focus:outline-2 focus:outline-offset-2", {
			"focus:outline-focus-dark": focusMode === "dark",
			"focus:outline-focus-light": focusMode === "light",
			"focus:outline-focus-light dark:focus:outline-focus-dark":
				focusMode === "alt-system",
			"focus:outline-focus-dark dark:focus:outline-focus-light":
				focusMode === "system",
		});
	}
};

const getTextInputBorderClasses = ({
	noBorder,
	error,
}: {
	error: boolean;
	noBorder: boolean;
}) => {
	return clsx("border-2", {
		"border-border-dark": !noBorder,
		"border-transparent": noBorder,
		"border-border-error-dark": error,
	});
};

const getTextInputLabelClasses = ({
	disabled,
	raw,
	error,
	mode,
}: {
	disabled: boolean;
	error: boolean;
	mode: "dark" | "light" | "system" | "alt-system";
	raw: boolean;
}) => {
	if (raw) {
		return "";
	}
	return clsx("absolute cursor-text font-medium", {
		"text-copy-lighter": !error && mode === "dark",
		"text-copy-dark": !error && mode === "light",
		"cursor-not-allowed opacity-50": disabled,
	});
};

const getTextInputHelperTextClasses = ({
	error,
	raw,
	mode,
}: {
	error: boolean;
	mode: "dark" | "light" | "system" | "alt-system";
	raw: boolean;
}) => {
	return raw
		? undefined
		: clsx(TEXT_INPUT_HELPER_TEXT_CLASSNAME, "absolute px-2 font-medium", {
				"rounded-md bg-surface-darker text-copy-error-light": error,
				"text-copy-lighter": !error && mode === "dark",
				"text-copy-dark": !error && mode === "light",
			});
};

export const getTextInputClasses = ({
	className,
	inputClassName,
	raw,
	disabled,
	noBorder,
	error,
	spacing,
	mode,
	focusMode,
}: getTextInputClassesProps) => {
	const wrapper = raw
		? className
		: clsx(
				"relative flex w-full flex-col justify-center",
				TEXT_INPUT_WRAPPER_CLASSNAME,
				className,
				getSpacing(spacing),
			);

	const input = raw
		? clsx(inputClassName)
		: clsx(
				TEXT_INPUT_CLASSNAME,
				inputClassName,
				"h-12 rounded-md px-4 text-base",
				getTextInputColorClasses({ mode }),
				getTextInputFocusClasses({ focusMode, error }),
				getTextInputBorderClasses({ noBorder, error }),
				{
					"disabled:cursor-not-allowed disabled:opacity-50": disabled,
				},
			);

	const accessibleLabel = raw ? undefined : "sr-only";

	const visibleLabel = getTextInputLabelClasses({
		disabled,
		raw,
		error,
		mode,
	});

	const helperText = getTextInputHelperTextClasses({
		error,
		raw,
		mode,
	});

	const rightElement = raw ? undefined : "absolute right-3";

	return {
		wrapper,
		input,
		accessibleLabel,
		visibleLabel,
		helperText,
		rightElement,
	};
};
