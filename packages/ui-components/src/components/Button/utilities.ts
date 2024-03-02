import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import { BUTTON_CLASSNAME } from "../../common/constants";

export const TYPE_ICON = "icon";
export const TYPE_BUTTON = "button";
export const TYPE_LINK = "link";

type getButtonClassesProps = {
	disabled: boolean;
	focus: "dark" | "light" | "system" | "alt-system";
	fullWidth: boolean;
	mode: "dark" | "light" | "system" | "alt-system";

	noBorder: boolean;
	raw: boolean;
	size: string;
	type: typeof TYPE_BUTTON | typeof TYPE_ICON | typeof TYPE_LINK;

	className?: string;
	labelLeft?: string;
	labelRight?: string;
	noBackground?: boolean;
} & SpacingProps;

const getButtonSizesClasses = ({
	type,
	size,
	labelRight,
	labelLeft,
}: {
	size: string;
	type: string;
	labelLeft?: string;
	labelRight?: string;
}) => {
	const smallClasses = "text-sm font-medium max-h-8 py-0";
	const mediumClasses = "text-base font-medium max-h-9 py-1";
	const largeClasses = "text-lg font-medium max-h-12 py-2";

	switch (type) {
		case TYPE_BUTTON:
			return clsx("px-4", {
				[smallClasses]: size === "small",
				[mediumClasses]: size === "medium",
				[largeClasses]: size === "large",
			});

		case TYPE_LINK:
			return clsx("px-4 text-center", {
				[smallClasses]: size === "small",
				[mediumClasses]: size === "medium",
				[largeClasses]: size === "large",
			});

		case TYPE_ICON:
			return clsx("inline-flex items-center justify-center", {
				"h-6 w-6 p-0": size === "small" && !(labelRight || labelLeft),
				"h-6 px-4 text-sm font-medium":
					size === "small" && (labelRight || labelLeft),
				"h-8 w-8 p-1": size === "medium" && !(labelRight || labelLeft),
				"h-8 px-4 text-base font-medium":
					size === "medium" && (labelRight || labelLeft),
				"h-12 w-12 p-2": size === "large" && !(labelRight || labelLeft),
				"h-12 px-4 text-lg font-medium":
					size === "large" && (labelRight || labelLeft),
			});
	}
};

const getButtonBaseClasses = ({
	mode,
	noBackground,
}: {
	mode: string;
	noBackground?: boolean;
}) => {
	return clsx("not-prose rounded-full", {
		"bg-action-dark text-copy-light": mode === "dark" && !noBackground,
		"bg-action-light text-copy-lighter": mode === "light" && !noBackground,
		"bg-action-dark text-copy-light dark:bg-action-light dark:text-copy-lighter":
			mode === "system" && !noBackground,
		"bg-action-light text-copy-lighter dark:bg-action-dark dark:text-copy-light":
			mode === "alt-system" && !noBackground,
	});
};

const getButtonHoverClasses = ({
	mode,
	disabled,
}: {
	disabled: boolean;
	mode: string;
}) => {
	return disabled
		? ""
		: clsx("hover:text-copy-light-hover", {
				"hover:bg-action-dark-hover": mode === "dark",
				"hover:bg-action-light-hover": mode === "light",
				"hover:bg-action-dark-hover dark:hover:bg-action-light-hover":
					mode === "system",
				"hover:bg-action-light-hover dark:hover:bg-action-dark-hover":
					mode === "alt-system",
			});
};

const getButtonActiveClasses = ({
	mode,
	disabled,
}: {
	disabled: boolean;
	mode: string;
}) => {
	return disabled
		? ""
		: clsx("active:text-copy-light-active", {
				"active:bg-action-dark-active": mode === "dark",
				"active:bg-action-light-active": mode === "light",
				"active:bg-action-dark-active dark:active:bg-action-light-active":
					mode === "system",
				"active:bg-action-light-active dark:active:bg-action-dark-active":
					mode === "alt-system",
			});
};

const getButtonBorderClasses = ({
	mode,
	noBorder,
}: {
	mode: string;
	noBorder: boolean;
}) => {
	return clsx("border", {
		"border-border-dark": !noBorder && mode === "dark",
		"border-border-light": !noBorder && mode === "light",
		"border-border-dark dark:border-border-light":
			!noBorder && mode === "system",
		"border-border-light dark:border-border-dark":
			!noBorder && mode === "alt-system",
		"border-transparent": noBorder,
	});
};

const getButtonFocusClasses = ({ focus }: { focus: string }) => {
	return clsx("focus:outline", "focus:outline-2", "focus:outline-offset-2", {
		"focus:outline-focus-dark": focus === "dark",
		"focus:outline-focus-light": focus === "light",

		"focus:outline-focus-light dark:focus:outline-focus-dark":
			focus === "alt-system",

		"focus:outline-focus-dark dark:focus:outline-focus-light":
			focus === "system",
	});
};

export const getButtonClasses = ({
	type,
	className,
	raw,
	mode,
	focus,
	disabled,
	fullWidth,
	size,
	noBorder,
	labelRight,
	labelLeft,
	spacing,
	noBackground,
}: getButtonClassesProps) => {
	return raw
		? clsx(BUTTON_CLASSNAME, className)
		: clsx(
				BUTTON_CLASSNAME,
				className,
				getSpacing(spacing),
				getButtonBaseClasses({ mode, noBackground }),
				getButtonSizesClasses({ type, size, labelRight, labelLeft }),
				getButtonBorderClasses({ mode, noBorder }),
				getButtonFocusClasses({ focus }),
				getButtonHoverClasses({ mode, disabled }),
				getButtonActiveClasses({ mode, disabled }),
				{
					"w-full": fullWidth,
					"disabled:cursor-not-allowed disabled:opacity-50": disabled,
				},
			);
};
