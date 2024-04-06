import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import { CARD_CLASSNAME } from "../../common/constants";

type getCardClassesProps = {
	bodyClassName?: string;
	className?: string;
	compact?: boolean;
	footerClassName?: string;
	headerClassName?: string;
	mode?: "dark" | "light" | "system" | "alt-system";
} & SpacingProps;

export const getCardClasses = ({
	className,
	headerClassName,
	bodyClassName,
	footerClassName,
	spacing,
	mode,
	compact,
}: getCardClassesProps) => {
	const wrapper = clsx(
		CARD_CLASSNAME,
		className,
		"rounded-md border-2",
		getSpacing(spacing),
		{
			"p-4": !compact,
			"p-2": compact,
			"border-border-light bg-surface-dark text-copy-light": mode === "dark",
			"border-border-dark bg-surface-lighter text-copy-dark": mode === "light",

			"border-border-dark bg-surface-lighter text-copy-dark dark:border-border-light dark:bg-surface-dark dark:text-copy-light":
				mode === "system",
			"border-border-light bg-surface-dark text-copy-light dark:border-border-dark dark:bg-surface-lighter dark:text-copy-dark":
				mode === "alt-system",
		},
	);
	const header = headerClassName
		? headerClassName
		: clsx(`${CARD_CLASSNAME}__header mt-0 border-b-2 border-border-medium`, {
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
