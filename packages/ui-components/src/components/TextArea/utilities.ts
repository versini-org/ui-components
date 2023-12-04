import clsx from "clsx";

import {
	TEXT_AREA_CLASSNAME,
	TEXT_AREA_CONTROL_RIGHT_CLASSNAME,
	TEXT_AREA_HELPER_TEXT_CLASSNAME,
	TEXT_AREA_WRAPPER_CLASSNAME,
	VISUALLY_HIDDEN_CLASSNAME,
} from "../../common/constants";

type getTextAreaClassesProps = {
	className?: string;
	textAreaClassName?: string;
	raw: boolean;
	focusKind: string;
	borderKind: string;
	errorKind: string;
	disabled: boolean;
	noBorder: boolean;
	error: boolean;
};

const TRANSLATION_OFFSET = 12;
const ROW_HEIGHT = 24;

const getTextAreaBaseClasses = () => {
	return "rounded-md text-base h-20 min-h-[80px] resize-none";
};

const getTextAreaSizesClasses = () => {
	return "px-4 py-7";
};

const getTextAreaColorClasses = () => {
	return `bg-surface-dark text-copy-light caret-slate-100`;
};

const getTextAreaFocusClasses = ({
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

const getTextAreaBorderClasses = ({
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

const getTextAreaLabelClasses = ({
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

const getTextAreaHelperTextClasses = ({
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
}: getTextAreaClassesProps) => {
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

	const accessibleLabel = raw ? undefined : VISUALLY_HIDDEN_CLASSNAME;

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
	textAreaRef,
	textAreaHeightRef,
	labelOffsetRef,
	labelRef,
	helperTextOffsetRef,
	helperTextRef,
}: {
	textAreaRef: React.MutableRefObject<HTMLTextAreaElement | null>;
	textAreaHeightRef: React.MutableRefObject<number>;
	labelOffsetRef: React.MutableRefObject<number>;
	labelRef: React.MutableRefObject<HTMLLabelElement | null>;
	helperTextOffsetRef: React.MutableRefObject<number>;
	helperTextRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
	if (
		textAreaRef.current &&
		textAreaRef.current.scrollHeight > 0 &&
		textAreaHeightRef.current !== textAreaRef.current.scrollHeight
	) {
		const diff = textAreaRef.current.scrollHeight - textAreaHeightRef.current;
		const totalRows = Math.abs(diff / ROW_HEIGHT);

		/**
		 * The label and helper text are moved by the same amount
		 * as the textarea. This is done by multiplying the
		 * difference by the number of rows that have been added
		 * or removed.
		 * The label is moved in the opposite direction of the
		 * textarea, so that it appears to be moving up as the
		 * textarea grows.
		 * The helper text is moved in the same direction as the
		 * textarea, so that it appears to be moving down as the
		 * textarea grows.
		 */
		labelOffsetRef.current =
			labelOffsetRef.current +
			-1 * Math.sign(diff) * (TRANSLATION_OFFSET * totalRows);

		helperTextOffsetRef.current =
			helperTextOffsetRef.current +
			Math.sign(diff) * (TRANSLATION_OFFSET * totalRows);

		labelRef?.current?.style.setProperty(
			"--av-text-area-label",
			`${labelOffsetRef.current}px`,
		);
		helperTextRef?.current?.style.setProperty(
			"--av-text-area-helper-text",
			`${helperTextOffsetRef.current}px`,
		);

		textAreaHeightRef.current = textAreaRef.current.scrollHeight;
	}
};
