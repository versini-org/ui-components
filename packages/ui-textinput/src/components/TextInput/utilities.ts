import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import {
	TEXT_INPUT_CLASSNAME,
	TEXT_INPUT_HELPER_TEXT_CLASSNAME,
	TEXT_INPUT_WRAPPER_CLASSNAME,
} from "../../common/constants";
import type { Size } from "./TextInputTypes";

type getTextInputClassesProps = {
	disabled: boolean;
	error: boolean;
	focusMode: "dark" | "light" | "system" | "alt-system";
	mode: "dark" | "light" | "system" | "alt-system";
	noBorder: boolean;
	raw: boolean;
	size: Size;

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
}: {
	focusMode: "dark" | "light" | "system" | "alt-system";
}) => {
	return clsx("focus:outline focus:outline-2 focus:outline-offset-2", {
		"focus:outline-focus-dark": focusMode === "dark",
		"focus:outline-focus-light": focusMode === "light",
		"focus:outline-focus-light dark:focus:outline-focus-dark":
			focusMode === "alt-system",
		"focus:outline-focus-dark dark:focus:outline-focus-light":
			focusMode === "system",
	});
};

const getTextInputBorderClasses = ({
	noBorder,
	error,
}: {
	error: boolean;
	noBorder: boolean;
}) => {
	return clsx("border-2", {
		"border-border-dark": !noBorder && !error,
		"focus:border-border-dark": !noBorder && error,
		"border-border-error-dark": !noBorder && error,
		"border-transparent": noBorder,
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
	if (disabled) {
		return clsx("absolute px-2 cursor-not-allowed opacity-50 font-medium");
	}
	if (!error) {
		return clsx("absolute px-2 cursor-text font-medium", {
			"text-copy-lighter": mode === "dark",
			"text-copy-dark": mode === "light",
			"text-copy-dark dark:text-copy-lighter": mode === "system",
			"text-copy-lighter dark:text-copy-dark": mode === "alt-system",
		});
	}
	if (error) {
		return clsx("absolute px-2 cursor-text font-medium", {
			"text-copy-lighter": mode === "dark",
			"text-copy-error-dark": mode === "light",
			"text-copy-error-dark dark:text-copy-error-light dark:bg-surface-darker":
				mode === "system",
			"text-copy-lighter dark:text-copy-error-dark": mode === "alt-system",
		});
	}
};

const getTextInputHelperTextClasses = ({
	error,
	raw,
	mode,
	disabled,
}: {
	disabled: boolean;
	error: boolean;
	mode: "dark" | "light" | "system" | "alt-system";
	raw: boolean;
}) => {
	if (raw) {
		return "";
	}
	if (disabled) {
		return clsx(
			TEXT_INPUT_HELPER_TEXT_CLASSNAME,
			"absolute px-2 cursor-not-allowed opacity-50 font-medium",
		);
	}
	if (!error) {
		return clsx(TEXT_INPUT_HELPER_TEXT_CLASSNAME, "absolute px-2 font-medium", {
			"text-copy-lighter": mode === "dark",
			"text-copy-dark": mode === "light",
			"text-copy-dark dark:text-copy-lighter": mode === "system",
			"text-copy-lighter dark:text-copy-dark": mode === "alt-system",
		});
	}
	if (error) {
		return clsx(TEXT_INPUT_HELPER_TEXT_CLASSNAME, "absolute px-2 font-medium", {
			"text-copy-error-light bg-surface-darker": mode === "dark",
			"text-copy-error-dark": mode === "light",
			"text-copy-error-dark dark:text-copy-error-light dark:bg-surface-darker":
				mode === "system",
			"dark:text-copy-error-dark text-copy-error-light bg-surface-darker":
				mode === "alt-system",
		});
	}
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
	size,
}: getTextInputClassesProps) => {
	const wrapper = raw
		? className
		: clsx(
				"relative flex w-full flex-col justify-center",
				TEXT_INPUT_WRAPPER_CLASSNAME,
				className,
				getSpacing(spacing),
			);

	let heightClass = "";
	switch (size) {
		case "xs":
			heightClass = "h-8";
			break;
		case "sm":
			heightClass = "h-10";
			break;
		case "lg":
			heightClass = "h-14";
			break;
		case "xl":
			heightClass = "h-16";
			break;

		default:
			heightClass = "h-12";
			break;
	}

	const input = raw
		? clsx(inputClassName)
		: clsx(
				TEXT_INPUT_CLASSNAME,
				inputClassName,
				heightClass,
				"rounded-md text-base px-4",
				getTextInputColorClasses({ mode }),
				getTextInputFocusClasses({ focusMode }),
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
		disabled,
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
