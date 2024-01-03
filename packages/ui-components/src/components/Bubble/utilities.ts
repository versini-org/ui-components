import clsx from "clsx";

import { BUBBLE_CLASSNAME } from "../../common/constants";

const getBubbleSizesClasses = () => {
	return "p-4 sm:max-w-md md:max-w-2xl";
};

const getBubbleColorClasses = ({ kind }: { kind: string }) => {
	return clsx({
		"bg-surface-lighter text-copy-dark": kind === "left",
		"bg-surface-accent text-copy-lighter": kind === "right",
	});
};

const getBubbleTypographyClasses = () => {
	return "prose prose-p:my-3 prose-blockquote:my-3 prose-ol:my-3 prose-ul:my-3 prose-ul:prose-li:marker:text-black";
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
	const wrapper = clsx(className, BUBBLE_CLASSNAME, "flex items-start", {
		"flex-row-reverse": kind === "right",
	});
	const main = clsx(
		"flex flex-col empty:hidden",
		getBubbleSizesClasses(),
		getBubbleTypographyClasses(),
		getBubbleColorClasses({ kind }),
		getBubbleBorderClasses({ kind }),
	);

	return {
		wrapper,
		main,
	};
};