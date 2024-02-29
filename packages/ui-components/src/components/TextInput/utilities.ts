import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import {
	TEXT_INPUT_CLASSNAME,
	TEXT_INPUT_CONTROL_RIGHT_CLASSNAME,
	TEXT_INPUT_HELPER_TEXT_CLASSNAME,
	TEXT_INPUT_SIMPLE_CLASSNAME,
	TEXT_INPUT_WRAPPER_CLASSNAME,
} from "../../common/constants";

type getTextInputClassesProps = {
	borderKind: string;
	disabled: boolean;
	error: boolean;
	errorKind: string;
	focusKind: string;
	noBorder: boolean;
	raw: boolean;
	simple: boolean;

	className?: string;
	inputClassName?: string;
	slim?: boolean;
} & SpacingProps;

const getTextInputBaseClasses = ({ simple }: { simple: boolean }) => {
	return clsx("rounded-md text-base", {
		"h-20": !simple,
		"h-12": simple,
	});
};

const getTextInputSizesClasses = ({ simple }: { simple: boolean }) => {
	return clsx("px-4", {
		"pt-4": simple,
	});
};

const getTextInputColorClasses = () => {
	return `bg-surface-darker text-copy-light caret-copy-light`;
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
		"focus:ring-focus-dark": !error && focusKind === "dark",
		"focus:ring-focus-light": !error && focusKind === "light",
		"focus:ring-focus-error-dark": error && errorKind === "dark",
		"focus:ring-focus-error-light": error && errorKind === "light",
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
		"border-border-dark": !noBorder && borderKind === "dark",
		"border-border-light": !noBorder && borderKind === "light",
		"border-transparent": noBorder,
		"border-border-error-dark": error && errorKind === "dark",
		"border-border-error-light": error && errorKind === "light",
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
				"text-copy-error-dark": error && errorKind === "dark",
				"text-copy-error-light": error && errorKind === "light",
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
				"text-copy-error-dark": error && errorKind === "dark",
				"text-copy-error-light": error && errorKind === "light",
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
	simple,
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
				simple ? TEXT_INPUT_SIMPLE_CLASSNAME : TEXT_INPUT_CLASSNAME,
				inputClassName,
				getTextInputBaseClasses({ simple }),
				getTextInputSizesClasses({ simple }),
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
