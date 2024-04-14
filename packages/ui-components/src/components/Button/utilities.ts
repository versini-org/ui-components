import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import { BUTTON_CLASSNAME } from "../../common/constants";

export const TYPE_ICON = "icon";
export const TYPE_BUTTON = "button";
export const TYPE_LINK = "link";

type getButtonClassesProps = {
	disabled: boolean;
	focusMode: "dark" | "light" | "system" | "alt-system";
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
	noTruncate?: boolean;
	variant?: "primary" | "secondary" | "danger";
} & SpacingProps;

const getButtonSizesClasses = ({
	type,
	size,
	labelRight,
	labelLeft,
}: {
	size: string;
	type: typeof TYPE_BUTTON | typeof TYPE_ICON | typeof TYPE_LINK;
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
	noTruncate,
	variant,
}: {
	mode: "dark" | "light" | "system" | "alt-system";
	variant: "primary" | "secondary" | "danger";
	noBackground?: boolean;
	noTruncate?: boolean;
}) => {
	if (noBackground) {
		return "not-prose rounded-full";
	}

	if (variant === "primary") {
		return clsx("not-prose rounded-full", {
			truncate: !noTruncate,
			"bg-action-dark text-copy-light": mode === "dark",
			"bg-action-light text-copy-lighter": mode === "light",
			"bg-action-dark text-copy-light dark:bg-action-light dark:text-copy-lighter":
				mode === "system",
			"bg-action-light text-copy-lighter dark:bg-action-dark dark:text-copy-light":
				mode === "alt-system",
		});
	}
	if (variant === "secondary") {
		return clsx("not-prose rounded-full", {
			truncate: !noTruncate,
			"bg-action-dark text-copy-light": mode === "light",
			"bg-action-light text-copy-lighter": mode === "dark",
			"bg-action-dark text-copy-light dark:bg-action-light dark:text-copy-lighter":
				mode === "alt-system",
			"bg-action-light text-copy-lighter dark:bg-action-dark dark:text-copy-light":
				mode === "system",
		});
	}
	if (variant === "danger") {
		return clsx("not-prose rounded-full", {
			truncate: !noTruncate,
			"bg-action-danger-dark text-copy-light": mode === "dark",
			"bg-action-danger-light text-copy-lighter": mode === "light",
			"bg-action-danger-dark text-copy-light dark:bg-action-danger-light dark:text-copy-lighter":
				mode === "system",
			"bg-action-danger-light text-copy-lighter dark:bg-action-danger-dark dark:text-copy-light":
				mode === "alt-system",
		});
	}
};

const getButtonHoverClasses = ({
	mode,
	disabled,
	variant,
}: {
	disabled: boolean;
	mode: "dark" | "light" | "system" | "alt-system";
	variant: "primary" | "secondary" | "danger";
}) => {
	if (disabled) {
		return "";
	}
	if (variant === "primary") {
		return clsx("hover:text-copy-light-hover", {
			"hover:bg-action-dark-hover": mode === "dark",
			"hover:bg-action-light-hover": mode === "light",
			"hover:bg-action-dark-hover dark:hover:bg-action-light-hover":
				mode === "system",
			"hover:bg-action-light-hover dark:hover:bg-action-dark-hover":
				mode === "alt-system",
		});
	}
	if (variant === "secondary") {
		return clsx("hover:text-copy-light-hover", {
			"hover:bg-action-dark-hover": mode === "light",
			"hover:bg-action-light-hover": mode === "dark",
			"hover:bg-action-dark-hover dark:hover:bg-action-light-hover":
				mode === "alt-system",
			"hover:bg-action-light-hover dark:hover:bg-action-dark-hover":
				mode === "system",
		});
	}
	if (variant === "danger") {
		return clsx("hover:text-copy-light-hover", {
			"hover:bg-action-danger-dark-hover": mode === "dark",
			"hover:bg-action-danger-light-hover": mode === "light",
			"hover:bg-action-danger-dark-hover dark:hover:bg-action-danger-light-hover":
				mode === "system",
			"hover:bg-action-danger-light-hover dark:hover:bg-action-danger-dark-hover":
				mode === "alt-system",
		});
	}
};

const getButtonActiveClasses = ({
	mode,
	disabled,
	variant,
}: {
	disabled: boolean;
	mode: "dark" | "light" | "system" | "alt-system";
	variant: "primary" | "secondary" | "danger";
}) => {
	if (disabled) {
		return "";
	}
	if (variant === "primary") {
		return clsx("active:text-copy-light-active", {
			"active:bg-action-dark-active": mode === "dark",
			"active:bg-action-light-active": mode === "light",
			"active:bg-action-dark-active dark:active:bg-action-light-active":
				mode === "system",
			"active:bg-action-light-active dark:active:bg-action-dark-active":
				mode === "alt-system",
		});
	}
	if (variant === "secondary") {
		return clsx("active:text-copy-light-active", {
			"active:bg-action-dark-active": mode === "light",
			"active:bg-action-light-active": mode === "dark",
			"active:bg-action-dark-active dark:active:bg-action-light-active":
				mode === "alt-system",
			"active:bg-action-light-active dark:active:bg-action-dark-active":
				mode === "system",
		});
	}
	if (variant === "danger") {
		return clsx("active:text-copy-lighter-active", {
			"active:bg-action-danger-dark-active": mode === "dark",
			"active:bg-action-danger-light-active": mode === "light",
			"active:bg-action-danger-dark-active dark:active:bg-action-danger-light-active":
				mode === "system",
			"active:bg-action-danger-light-active dark:active:bg-action-danger-dark-active":
				mode === "alt-system",
		});
	}
};

const getButtonBorderClasses = ({
	mode,
	noBorder,
	variant,
}: {
	mode: "dark" | "light" | "system" | "alt-system";
	noBorder: boolean;
	variant: "primary" | "secondary" | "danger";
}) => {
	if (noBorder) {
		return "border border-transparent";
	}
	if (variant === "primary") {
		return clsx("border", {
			"border-border-dark": mode === "dark",
			"border-border-accent": mode === "light",
			"border-border-dark dark:border-border-accent": mode === "system",
			"border-border-accent dark:border-border-dark": mode === "alt-system",
		});
	}
	if (variant === "secondary") {
		return clsx("border", {
			"border-border-dark": mode === "light",
			"border-border-accent": mode === "dark",
			"border-border-dark dark:border-border-accent": mode === "alt-system",
			"border-border-accent dark:border-border-dark": mode === "system",
		});
	}
	if (variant === "danger") {
		return clsx("border", {
			"border-border-danger-dark": mode === "dark",
			"border-border-danger-medium": mode === "light",
			"border-border-danger-dark dark:border-border-danger-medium":
				mode === "system",
			"border-border-danger-medium dark:border-border-danger-dark":
				mode === "alt-system",
		});
	}
};

const getButtonFocusClasses = ({ focusMode }: { focusMode: string }) => {
	return clsx("focus:outline", "focus:outline-2", "focus:outline-offset-2", {
		"focus:outline-focus-dark": focusMode === "dark",
		"focus:outline-focus-light": focusMode === "light",

		"focus:outline-focus-light dark:focus:outline-focus-dark":
			focusMode === "alt-system",

		"focus:outline-focus-dark dark:focus:outline-focus-light":
			focusMode === "system",
	});
};

export const getButtonClasses = ({
	type,
	className,
	raw,
	mode,
	focusMode,
	disabled,
	fullWidth,
	size,
	noBorder,
	labelRight,
	labelLeft,
	spacing,
	noBackground,
	variant,
	noTruncate,
}: getButtonClassesProps) => {
	if (!variant) {
		variant = "primary";
	}
	return raw
		? clsx(BUTTON_CLASSNAME, className)
		: clsx(
				BUTTON_CLASSNAME,
				className,
				getSpacing(spacing),
				getButtonBaseClasses({ mode, variant, noBackground, noTruncate }),
				getButtonSizesClasses({ type, size, labelRight, labelLeft }),
				getButtonBorderClasses({ mode, variant, noBorder }),
				getButtonFocusClasses({ focusMode }),
				getButtonHoverClasses({ mode, variant, disabled }),
				getButtonActiveClasses({ mode, variant, disabled }),
				{
					"w-full": fullWidth,
					"disabled:cursor-not-allowed disabled:opacity-50": disabled,
				},
			);
};
