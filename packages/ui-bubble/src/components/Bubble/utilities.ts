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
		"prose prose-dark dark:prose-lighter prose-p:my-3 prose-blockquote:my-3 prose-ol:my-3 prose-ul:my-3 prose-ul:prose-li:marker:text-black",
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
}: {
	kind: string;
	className?: string;
}) => {
	const wrapper = clsx(
		BUBBLE_CLASSNAME,
		"flex items-start",
		{
			"flex-row-reverse": kind === "right",
		},
		className,
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
