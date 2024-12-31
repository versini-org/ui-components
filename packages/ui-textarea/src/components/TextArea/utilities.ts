import clsx from "clsx";

import {
	TEXT_AREA_CLASSNAME,
	TEXT_AREA_CONTROL_LEFT_CLASSNAME,
	TEXT_AREA_CONTROL_RIGHT_CLASSNAME,
	TEXT_AREA_HELPER_TEXT_CLASSNAME,
	TEXT_AREA_WRAPPER_CLASSNAME,
} from "../../common/constants";
import type { TextAreaProps } from "./TextAreaTypes";

type GetTextAreaClassesProps = Pick<
	TextAreaProps,
	| "mode"
	| "focusMode"
	| "error"
	| "disabled"
	| "noBorder"
	| "raw"
	| "className"
	| "textAreaClassName"
> & {
	rightElement?: boolean;
	leftElement?: boolean;
};

const getTextAreaBaseClasses = () => {
	/**
	 * overflow-hidden is needed to prevent the text area from
	 * showing a scrollbar. We automatically expand the text area
	 * when the user types more than one line, so there is no
	 * need for a scrollbar.
	 */
	return "rounded-md text-base h-20 min-h-[80px] resize-none overflow-hidden px-4 py-7";
};

const getTextAreaColorClasses = ({ mode }: Pick<TextAreaProps, "mode">) => {
	return clsx({
		"bg-surface-darker text-copy-lighter caret-copy-light": mode === "dark",
		"bg-surface-lighter text-copy-dark caret-copy-dark": mode === "light",
		"bg-surface-lighter text-copy-dark caret-copy-dark dark:bg-surface-darker dark:text-copy-lighter dark:caret-copy-light":
			mode === "system",
		"bg-surface-darker text-copy-lighter caret-copy-light dark:bg-surface-lighter dark:text-copy-dark dark:caret-copy-dark":
			mode === "alt-system",
	});
};

const getTextAreaFocusClasses = ({
	focusMode,
}: Pick<TextAreaProps, "focusMode">) => {
	return clsx("focus:outline focus:outline-2 focus:outline-offset-2", {
		"focus:outline-focus-dark": focusMode === "dark",
		"focus:outline-focus-light": focusMode === "light",
		"focus:outline-focus-light dark:focus:outline-focus-dark":
			focusMode === "alt-system",
		"focus:outline-focus-dark dark:focus:outline-focus-light":
			focusMode === "system",
	});
};

const getTextAreaBorderClasses = ({
	noBorder,
	error,
}: Pick<TextAreaProps, "error" | "noBorder">) => {
	return clsx("border-2", {
		"border-border-dark": !noBorder && !error,
		"focus:border-border-dark": !noBorder && error,
		"border-border-error-dark": !noBorder && error,
		"border-transparent": noBorder,
	});
};

const getTextAreaLabelClasses = ({
	disabled,
	raw,
	error,
	mode,
	leftElement,
	rightElement,
}: Pick<TextAreaProps, "mode" | "disabled" | "raw" | "error"> & {
	leftElement?: boolean;
	rightElement?: boolean;
}) => {
	if (raw) {
		return "";
	}
	if (disabled) {
		return clsx(
			"transform translate-y-0 scale-100 absolute px-2 cursor-not-allowed opacity-50 font-medium",
			{
				"translate-x-[12px]":
					(rightElement === true && !leftElement) ||
					(!rightElement && !leftElement),
			},
		);
	}
	if (!error) {
		return clsx(
			"absolute px-2 cursor-text font-medium transform translate-y-0 scale-100",
			{
				"translate-x-[12px]":
					(rightElement === true && !leftElement) ||
					(!rightElement && !leftElement),
				"text-copy-medium": mode === "dark",
				"text-copy-dark": mode === "light",
				"text-copy-dark dark:text-copy-medium": mode === "system",
				"text-copy-medium dark:text-copy-dark": mode === "alt-system",
			},
		);
	}
	if (error) {
		return clsx(
			"absolute px-2 cursor-text font-medium transform translate-y-0 scale-100",
			{
				"translate-x-[12px]":
					(rightElement === true && !leftElement) ||
					(!rightElement && !leftElement),
				"text-copy-medium": mode === "dark",
				"text-copy-error-dark": mode === "light",
				"text-copy-error-dark dark:text-copy-error-light": mode === "system",
				"text-copy-medium dark:text-copy-error-dark": mode === "alt-system",
			},
		);
	}
};

const getTextAreaHelperTextClasses = ({
	error,
	raw,
	mode,
	disabled,
}: Pick<TextAreaProps, "mode" | "disabled" | "raw" | "error">) => {
	if (raw) {
		return "";
	}
	if (disabled) {
		return clsx(
			TEXT_AREA_HELPER_TEXT_CLASSNAME,
			"absolute px-2 cursor-not-allowed opacity-50 font-medium",
		);
	}
	if (!error) {
		return clsx(TEXT_AREA_HELPER_TEXT_CLASSNAME, "absolute px-2 font-medium", {
			"text-copy-medium": mode === "dark",
			"text-copy-dark": mode === "light",
			"text-copy-dark dark:text-copy-medium": mode === "system",
			"text-copy-medium dark:text-copy-dark": mode === "alt-system",
		});
	}
	if (error) {
		return clsx(TEXT_AREA_HELPER_TEXT_CLASSNAME, "absolute px-2 font-medium", {
			"text-copy-error-light": mode === "dark",
			"text-copy-error-dark": mode === "light",
			"text-copy-error-dark dark:text-copy-error-light": mode === "system",
			"dark:text-copy-error-dark text-copy-error-light": mode === "alt-system",
		});
	}
};

export const getTextAreaClasses = ({
	className,
	textAreaClassName,
	raw,
	focusMode,
	disabled,
	noBorder,
	error,
	mode,
	leftElement,
	rightElement,
}: GetTextAreaClassesProps) => {
	const wrapper = raw
		? className
		: clsx(
				"relative flex w-full flex-col justify-center",
				TEXT_AREA_WRAPPER_CLASSNAME,
				className,
			);

	const textArea = raw
		? clsx(textAreaClassName)
		: clsx(
				TEXT_AREA_CLASSNAME,
				textAreaClassName,
				getTextAreaBaseClasses(),
				getTextAreaColorClasses({ mode }),
				getTextAreaFocusClasses({ focusMode }),
				getTextAreaBorderClasses({
					noBorder,
					error,
				}),
				{
					"disabled:cursor-not-allowed disabled:opacity-50": disabled,
				},
			);

	const accessibleLabel = raw ? undefined : "sr-only";

	const visibleLabel = getTextAreaLabelClasses({
		disabled,
		raw,
		error,
		mode,
		rightElement,
		leftElement,
	});

	const helperText = getTextAreaHelperTextClasses({
		error,
		raw,
		mode,
		disabled,
	});

	const rightClasses = raw
		? undefined
		: clsx(TEXT_AREA_CONTROL_RIGHT_CLASSNAME, "absolute");

	const leftClasses = raw
		? undefined
		: clsx(TEXT_AREA_CONTROL_LEFT_CLASSNAME, "absolute");

	return {
		wrapper,
		textArea,
		accessibleLabel,
		visibleLabel,
		helperText,
		rightElement: rightClasses,
		leftElement: leftClasses,
	};
};

export const adjustLabelAndHelperText = ({
	scrollHeight,
	currentHeight,
	currentLabelOffset = 0,
	currentHelperTextOffset = 0,
}: {
	currentHeight: number;
	currentHelperTextOffset: number;
	currentLabelOffset: number;
	scrollHeight: number;
}) => {
	const TRANSLATION_OFFSET = 12;
	const ROW_HEIGHT = 24;
	let labelOffset, helperTextOffset;

	if (scrollHeight > 0 && scrollHeight !== currentHeight) {
		const diff = scrollHeight - currentHeight;
		const totalRows = Math.abs(diff / ROW_HEIGHT);

		labelOffset =
			currentLabelOffset +
			-1 * Math.sign(diff) * (TRANSLATION_OFFSET * totalRows);
		helperTextOffset =
			currentHelperTextOffset +
			Math.sign(diff) * (TRANSLATION_OFFSET * totalRows);
	}
	return {
		labelOffset,
		helperTextOffset,
		scrollHeight,
	};
};
