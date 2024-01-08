import clsx from "clsx";

import type { SpacingType } from "../../common";
import { BUTTON_CLASSNAME } from "../../common/constants";
import { getSpacing } from "../../common/utilities";

export const TYPE_ICON = "icon";
export const TYPE_BUTTON = "button";
export const TYPE_LINK = "link";

type getButtonClassesProps = {
	type: typeof TYPE_BUTTON | typeof TYPE_ICON | typeof TYPE_LINK;
	raw: boolean;
	kind: string;
	focus: string;
	disabled: boolean;
	fullWidth: boolean;
	size: string;
	noBorder: boolean;

	className?: string;
	slim?: boolean;
	labelRight?: string;
	spacing?: SpacingType;
};

const getButtonSizesClasses = ({
	type,
	slim,
	size,
	labelRight,
}: {
	type: string;
	size: string;
	slim?: boolean;
	labelRight?: string;
}) => {
	const smallClasses = "text-sm font-medium max-h-8 py-0";
	const mediumClasses = "text-base font-medium max-h-9 py-1";
	const largeClasses = "text-lg font-medium max-h-12 py-2";

	switch (type) {
		case TYPE_BUTTON:
			return clsx("px-4", {
				[smallClasses]: size === "small" || slim,
				[mediumClasses]: size === "medium" && !slim,
				[largeClasses]: size === "large" && !slim,
			});

		case TYPE_LINK:
			return clsx("px-4 text-center", {
				[smallClasses]: size === "small" || slim,
				[mediumClasses]: size === "medium" && !slim,
				[largeClasses]: size === "large" && !slim,
			});

		case TYPE_ICON:
			return clsx("inline-flex items-center justify-center", {
				"h-6 w-6 p-0": (size === "small" || slim) && !labelRight,
				"h-6 pl-2 pr-4 text-sm font-medium":
					(size === "small" || slim) && labelRight,

				"h-8 w-8 p-1": size === "medium" && !slim && !labelRight,
				"h-8 pl-2 pr-4 text-base font-medium":
					size === "medium" && !slim && labelRight,

				"h-12 w-12 p-2": size === "large" && !slim && !labelRight,
				"h-12 pl-2 pr-4 text-lg font-medium":
					size === "large" && !slim && labelRight,
			});
	}
};

const getButtonBaseClasses = ({ kind }: { kind: string }) => {
	return `rounded-full bg-action-${kind} text-copy-light`;
};

const getButtonHoverClasses = ({
	kind,
	disabled,
}: {
	kind: string;
	disabled: boolean;
}) => {
	return disabled
		? ""
		: `hover:bg-action-${kind}-hover hover:text-copy-light-hover`;
};

const getButtonActiveClasses = ({
	kind,
	disabled,
}: {
	kind: string;
	disabled: boolean;
}) => {
	return disabled
		? ""
		: `active:bg-action-${kind}-active active:text-copy-light-active`;
};

const getButtonBorderClasses = ({
	kind,
	noBorder,
}: {
	kind: string;
	noBorder: boolean;
}) => {
	return clsx("border", {
		[`border-border-${kind}`]: !noBorder,
		"border-transparent": noBorder,
		"focus:border-white": !noBorder,
	});
};

const getButtonFocusClasses = ({ focus }: { focus: string }) => {
	return `focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-focus-${focus}`;
};

export const getButtonClasses = ({
	type,
	className,
	raw,
	kind,
	focus,
	disabled,
	fullWidth,
	slim,
	size,
	noBorder,
	labelRight,
	spacing,
}: getButtonClassesProps) => {
	return raw
		? clsx(BUTTON_CLASSNAME, className)
		: clsx(
				BUTTON_CLASSNAME,
				className,
				getSpacing(spacing),
				getButtonBaseClasses({ kind }),
				getButtonSizesClasses({ type, slim, size, labelRight }),
				getButtonBorderClasses({ kind, noBorder }),
				getButtonFocusClasses({ focus }),
				getButtonHoverClasses({ kind, disabled }),
				getButtonActiveClasses({ kind, disabled }),
				{
					"w-full": fullWidth,
					"disabled:cursor-not-allowed disabled:opacity-50": disabled,
				},
			);
};
