import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import { CARD_CLASSNAME } from "../../common/constants";

type getCardClassesProps = {
	className?: string;
	footerClassName?: string;
	headerClassName?: string;
	mode?: "dark" | "light" | "system" | "alt-system";
} & SpacingProps;

export const getCardClasses = ({
	className,
	headerClassName,
	footerClassName,
	spacing,
	mode,
}: getCardClassesProps) => {
	const wrapper = className
		? className
		: clsx(CARD_CLASSNAME, "rounded-md border-2 p-4", getSpacing(spacing), {
				"border-border-light bg-surface-dark text-copy-light": mode === "dark",
				"border-border-dark bg-surface-lighter text-copy-dark":
					mode === "light",

				"border-border-dark bg-surface-lighter text-copy-dark dark:border-border-light dark:bg-surface-dark dark:text-copy-light":
					mode === "system",
				"border-border-light bg-surface-dark text-copy-light dark:border-border-dark dark:bg-surface-lighter dark:text-copy-dark":
					mode === "alt-system",
			});
	const header = headerClassName
		? headerClassName
		: clsx(
				`${CARD_CLASSNAME}__header not-prose mb-4 border-b-2 border-border-medium text-lg font-bold`,
			);

	const footer = footerClassName
		? footerClassName
		: clsx(`${CARD_CLASSNAME}__footer pt-2`);

	return {
		wrapper,
		header,
		footer,
	};
};
