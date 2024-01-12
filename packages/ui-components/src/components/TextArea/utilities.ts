import clsx from "clsx";

import type { SpacingProps } from "../../common";
import {
	TEXT_AREA_CLASSNAME,
	TEXT_AREA_CONTROL_RIGHT_CLASSNAME,
	TEXT_AREA_HELPER_TEXT_CLASSNAME,
	TEXT_AREA_WRAPPER_CLASSNAME,
} from "../../common/constants";
import { getSpacing } from "../../common/utilities";

type getTextAreaClassesProps = {
	borderKind: string;
	disabled: boolean;
	error: boolean;
	errorKind: string;
	focusKind: string;
	noBorder: boolean;
	raw: boolean;

	className?: string;
	textAreaClassName?: string;
} & SpacingProps;

const getTextAreaBaseClasses = () => {
	/**
	 * overflow-hidden is needed to prevent the text area from
	 * showing a scrollbar. We automatically expand the text area
	 * when the user types more than one line, so there is no need
	 * for a scrollbar.
	 */
	return "rounded-md text-base h-20 min-h-[80px] resize-none overflow-hidden";
};

const getTextAreaSizesClasses = () => {
	return "px-4 py-7";
};

const getTextAreaColorClasses = () => {
	return `bg-surface-dark text-copy-light caret-copy-light`;
};

const getTextAreaFocusClasses = ({
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

const getTextAreaBorderClasses = ({
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

const getTextAreaLabelClasses = ({
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

const getTextAreaHelperTextClasses = ({
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
		: clsx(TEXT_AREA_HELPER_TEXT_CLASSNAME, "absolute font-medium", {
				[`text-copy-error-${errorKind}`]: error,
				"text-copy-medium": !error,
			});
};

export const getTextAreaClasses = ({
	className,
	textAreaClassName,
	raw,
	focusKind,
	borderKind,
	errorKind,
	disabled,
	noBorder,
	error,
	spacing,
}: getTextAreaClassesProps) => {
	const wrapper = raw
		? className
		: clsx(
				"relative flex w-full flex-col justify-center",
				TEXT_AREA_WRAPPER_CLASSNAME,
				className,
				getSpacing(spacing),
			);

	const textArea = raw
		? clsx(textAreaClassName)
		: clsx(
				TEXT_AREA_CLASSNAME,
				textAreaClassName,
				getTextAreaBaseClasses(),
				getTextAreaSizesClasses(),
				getTextAreaColorClasses(),
				getTextAreaFocusClasses({ focusKind, error, errorKind }),
				getTextAreaBorderClasses({
					noBorder,
					error,
					borderKind,
					errorKind,
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
		errorKind,
	});

	const helperText = getTextAreaHelperTextClasses({
		error,
		raw,
		errorKind,
	});

	const rightElement = raw
		? undefined
		: clsx(TEXT_AREA_CONTROL_RIGHT_CLASSNAME, "absolute");

	return {
		wrapper,
		textArea,
		accessibleLabel,
		visibleLabel,
		helperText,
		rightElement,
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
