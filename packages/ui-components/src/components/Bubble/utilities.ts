import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import { BUBBLE_CLASSNAME } from "../../common/constants";

const getBubbleSizesClasses = () => {
	return "p-4 sm:max-w-md md:max-w-2xl";
};

const getBubbleColorClasses = ({ kind }: { kind: string }) => {
	return clsx({
		"bg-surface-lighter dark:bg-surface-dark": kind === "left",
		"bg-surface-accent": kind === "right",
	});
};

const getBubbleTypographyClasses = ({ kind }: { kind: string }) => {
	return clsx(
		"verse verse-dark dark:verse-lighter verse-p:my-3 verse-blockquote:my-3 verse-ol:my-3 verse-ul:my-3 verse-ul:verse-li:marker:text-black",
		{
			"text-copy-lighter": kind === "right",
		},
	);
};

const getBubbleBorderClasses = ({ kind }: { kind: string }) => {
	return clsx("rounded-b-xl", {
		"rounded-tr-xl": kind === "left",
		"rounded-tl-xl": kind === "right",
	});
};

export const getBubbleClasses = ({
	kind,
	className,
	spacing,
}: {
	kind: string;
	className?: string;
} & SpacingProps) => {
	const wrapper = clsx(
		className,
		BUBBLE_CLASSNAME,
		"flex items-start",
		getSpacing(spacing),
		{
			"flex-row-reverse": kind === "right",
		},
	);
	const main = clsx(
		"flex flex-col empty:hidden",
		getBubbleSizesClasses(),
		getBubbleTypographyClasses({ kind }),
		getBubbleColorClasses({ kind }),
		getBubbleBorderClasses({ kind }),
	);
	const footer = "pr-2 pt-1 text-end text-xs text-copy-light";
	const copyButton = clsx("flex flex-col-reverse gap-2 sm:flex-row", {
		"ml-2": kind === "left",
		"mr-2": kind === "right",
	});

	return {
		wrapper,
		main,
		footer,
		copyButton,
	};
};
