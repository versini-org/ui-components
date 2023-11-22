import clsx from "clsx";

import {
	TEXT_INPUT_CLASSNAME,
	TEXT_INPUT_HELPER_TEXT_CLASSNAME,
	TEXT_INPUT_WRAPPER_CLASSNAME,
	VISUALLY_HIDDEN_CLASSNAME,
} from "../../common/constants";

type getTextInputClassesProps = {
	className?: string;
	raw: boolean;
	kind: string;
	focus: string;
	border: string;
	disabled: boolean;
	fullWidth?: boolean;
	slim?: boolean;
	noBorder: boolean;
	error: boolean;
};

const getTextInputBaseClasses = () => {
	return "rounded-md text-base";
};

const getTextInputSizesClasses = () => {
	return "px-4 py-4";
};

const getTextInputColorClasses = (kind: string) => {
	return `bg-surface-${kind} text-copy-light caret-slate-100`;
};

const getTextInputFocusClasses = (focus: string, error: boolean) => {
	return clsx("focus:outline-none focus:ring-offset-0", {
		"focus:ring-2": !error,
		"focus:ring-1": error,
		[`focus:ring-focus-${focus}`]: !error,
		[`focus:ring-focus-error-${focus}`]: error,
	});
};

const getTextInputBorderClasses = (
	noBorder: boolean,
	error: boolean,
	border: string,
) => {
	const borderOpacity = noBorder ? "0" : "100";
	return error
		? "border-2 border-border-error-dark"
		: `border-2 border-border-${border}/${borderOpacity}`;
};

const getTextInputLabelClasses = (
	kind: string,
	disabled: boolean,
	raw: boolean,
) => {
	return raw
		? ""
		: clsx("cursor-text", {
				"text-copy-medium": kind === "dark",
				"text-copy-light": kind === "light",
				"cursor-not-allowed opacity-50": disabled,
		  });
};

const getTextInputHelperTextClasses = (error: boolean, raw: boolean) => {
	return raw
		? undefined
		: clsx(TEXT_INPUT_HELPER_TEXT_CLASSNAME, "text-xs", {
				"text-copy-error-dark": error,
				"text-copy-medium": !error,
		  });
};

export const getTextInputClasses = ({
	className,
	raw,
	kind,
	focus,
	border,
	disabled,
	fullWidth,
	noBorder,
	error,
}: getTextInputClassesProps) => {
	const wrapper = raw
		? undefined
		: clsx(TEXT_INPUT_WRAPPER_CLASSNAME, {
				"w-full": fullWidth,
		  });

	const input = raw
		? className
		: clsx(
				TEXT_INPUT_CLASSNAME,
				className,
				getTextInputFocusClasses(focus, error),
				getTextInputBaseClasses(),
				getTextInputSizesClasses(),
				getTextInputColorClasses(kind),
				getTextInputBorderClasses(noBorder, error, border),
				{
					"disabled:cursor-not-allowed disabled:opacity-50": disabled,
				},
		  );

	const topLabel = raw ? undefined : VISUALLY_HIDDEN_CLASSNAME;

	const bottomLabel = getTextInputLabelClasses(kind, disabled, raw);

	const helperText = getTextInputHelperTextClasses(error, raw);

	return {
		wrapper,
		input,
		topLabel,
		bottomLabel,
		helperText,
	};
};
