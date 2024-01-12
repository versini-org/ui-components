import clsx from "clsx";

import type { SpacingProps } from "../../common";
import {
	TEXT_INPUT_CLASSNAME,
	TEXT_INPUT_CONTROL_RIGHT_CLASSNAME,
	TEXT_INPUT_HELPER_TEXT_CLASSNAME,
	TEXT_INPUT_WRAPPER_CLASSNAME,
} from "../../common/constants";
import { getSpacing } from "../../common/utilities";

type getTextInputClassesProps = {
	borderKind: string;
	disabled: boolean;
	error: boolean;
	errorKind: string;
	focusKind: string;
	noBorder: boolean;
	raw: boolean;

	className?: string;
	inputClassName?: string;
	slim?: boolean;
} & SpacingProps;

const getTextInputBaseClasses = () => {
	return "rounded-md text-base h-20";
};

const getTextInputSizesClasses = () => {
	return "px-4";
};

const getTextInputColorClasses = () => {
	return `bg-surface-dark text-copy-light caret-copy-light`;
};

const getTextInputFocusClasses = ({
	focusKind,
	error,
	errorKind,
}: {
	error: boolean;
	errorKind: string;
	focusKind: string;
}) => {
	return clsx("focus:outline-none focus:ring-offset-0", {
		"focus:ring-2": !error,
		"focus:ring-1": error,
		[`focus:ring-focus-${focusKind}`]: !error,
		[`focus:ring-focus-error-${errorKind}`]: error,
	});
};

const getTextInputBorderClasses = ({
	noBorder,
	error,
	borderKind,
	errorKind,
}: {
	borderKind: string;
	error: boolean;
	errorKind: string;
	noBorder: boolean;
}) => {
	return clsx("border-2", {
		[`border-border-${borderKind}`]: !noBorder,
		"border-transparent": noBorder,
		[`border-border-error-${errorKind}`]: error,
	});
};

const getTextInputLabelClasses = ({
	disabled,
	raw,
	error,
	errorKind,
}: {
	disabled: boolean;
	error: boolean;
	errorKind: string;
	raw: boolean;
}) => {
	return raw
		? ""
		: clsx("absolute cursor-text font-medium", {
				[`text-copy-error-${errorKind}`]: error,
				"text-copy-medium": !error,
				"cursor-not-allowed opacity-50": disabled,
			});
};

const getTextInputHelperTextClasses = ({
	error,
	raw,
	errorKind,
}: {
	error: boolean;
	errorKind: string;
	raw: boolean;
}) => {
	return raw
		? undefined
		: clsx(TEXT_INPUT_HELPER_TEXT_CLASSNAME, "absolute font-medium", {
				[`text-copy-error-${errorKind}`]: error,
				"text-copy-medium": !error,
			});
};

export const getTextInputClasses = ({
	className,
	inputClassName,
	raw,
	focusKind,
	borderKind,
	errorKind,
	disabled,
	noBorder,
	error,
	spacing,
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
				getTextInputBaseClasses(),
				getTextInputSizesClasses(),
				getTextInputColorClasses(),
				getTextInputFocusClasses({ focusKind, error, errorKind }),
				getTextInputBorderClasses({ noBorder, error, borderKind, errorKind }),
				{
					"disabled:cursor-not-allowed disabled:opacity-50": disabled,
				},
			);

	const accessibleLabel = raw ? undefined : "sr-only";

	const visibleLabel = getTextInputLabelClasses({
		disabled,
		raw,
		error,
		errorKind,
	});

	const helperText = getTextInputHelperTextClasses({
		error,
		raw,
		errorKind,
	});

	const rightElement = raw
		? undefined
		: clsx(TEXT_INPUT_CONTROL_RIGHT_CLASSNAME, "absolute");

	return {
		wrapper,
		input,
		accessibleLabel,
		visibleLabel,
		helperText,
		rightElement,
	};
};
