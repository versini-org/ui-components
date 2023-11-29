import clsx from "clsx";

import {
	TEXT_INPUT_CLASSNAME,
	TEXT_INPUT_CONTROL_RIGHT_CLASSNAME,
	TEXT_INPUT_HELPER_TEXT_CLASSNAME,
	TEXT_INPUT_WRAPPER_CLASSNAME,
	VISUALLY_HIDDEN_CLASSNAME,
} from "../../common/constants";

type getTextInputClassesProps = {
	className?: string;
	inputClassName?: string;
	raw: boolean;
	focusKind: string;
	borderKind: string;
	errorKind: string;
	disabled: boolean;
	slim?: boolean;
	noBorder: boolean;
	error: boolean;
};

const getTextInputBaseClasses = () => {
	return "rounded-md text-base h-20";
};

const getTextInputSizesClasses = () => {
	return "px-4";
};

const getTextInputColorClasses = () => {
	return `bg-surface-dark text-copy-light caret-slate-100`;
};

const getTextInputFocusClasses = ({
	focusKind,
	error,
	errorKind,
}: {
	focusKind: string;
	error: boolean;
	errorKind: string;
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
	noBorder: boolean;
	error: boolean;
	borderKind: string;
	errorKind: string;
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
	raw: boolean;
	error: boolean;
	errorKind: string;
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
	raw: boolean;
	errorKind: string;
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
}: getTextInputClassesProps) => {
	const wrapper = raw
		? className
		: clsx(
				"relative flex w-full flex-col justify-center",
				TEXT_INPUT_WRAPPER_CLASSNAME,
				className,
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

	const accessibleLabel = raw ? undefined : VISUALLY_HIDDEN_CLASSNAME;

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
