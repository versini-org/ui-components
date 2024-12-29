import clsx from "clsx";

import { CARD_CLASSNAME } from "../../common/constants";

type getCardClassesProps = {
	bodyClassName?: string;
	className?: string;
	compact?: boolean;
	footerClassName?: string;
	headerClassName?: string;
	mode?: "dark" | "light" | "system" | "alt-system" | "darker";
	noBorder?: boolean;
};

export const getCardClasses = ({
	className,
	headerClassName,
	bodyClassName,
	footerClassName,

	mode,
	compact,
	noBorder,
}: getCardClassesProps) => {
	const wrapper = clsx(
		CARD_CLASSNAME,
		"rounded-md",
		{
			"border-none": noBorder,
			"border-2": !noBorder,
			"p-4": !compact,
			"p-1 sm:p-2": compact,
			"border-border-accent bg-surface-darker text-copy-light":
				mode === "darker",
			"border-border-accent bg-surface-dark text-copy-light": mode === "dark",
			"border-border-dark bg-surface-lighter text-copy-dark": mode === "light",

			"border-border-dark bg-surface-lighter text-copy-dark dark:border-border-accent dark:bg-surface-dark dark:text-copy-light":
				mode === "system",
			"border-border-accent bg-surface-dark text-copy-light dark:border-border-dark dark:bg-surface-lighter dark:text-copy-dark":
				mode === "alt-system",
		},
		className,
	);
	const header = headerClassName
		? headerClassName
		: clsx(`${CARD_CLASSNAME}__header mt-0 border-b-2`, {
				"text-copy-light border-border-accent": mode === "darker",
				"border-border-accent": mode === "dark",
				"border-border-medium": mode === "light",
				"border-border-medium dark:border-border-accent": mode === "system",
				"border-border-accent dark:border-border-medium": mode === "alt-system",

				"mb-4": !compact,
				"mb-2": compact,
			});

	const body = clsx(bodyClassName);
	const footer = footerClassName
		? footerClassName
		: clsx(`${CARD_CLASSNAME}__footer pt-2`);

	return {
		wrapper,
		header,
		body,
		footer,
	};
};
