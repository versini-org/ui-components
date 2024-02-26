import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import { CARD_CLASSNAME } from "../../common/constants";

type getCardClassesProps = {
	className?: string;
	footerClassName?: string;
	headerClassName?: string;
	noBackground?: boolean;
} & SpacingProps;

export const getCardClasses = ({
	className,
	headerClassName,
	footerClassName,
	noBackground,
	spacing,
}: getCardClassesProps) => {
	const wrapper = className
		? className
		: clsx(CARD_CLASSNAME, "rounded-md text-copy-light", getSpacing(spacing), {
				"border-2 border-border-dark bg-surface-dark p-4": !noBackground,
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
