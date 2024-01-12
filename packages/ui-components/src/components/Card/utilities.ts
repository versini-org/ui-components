import clsx from "clsx";

import type { SpacingProps } from "../../common";
import { CARD_CLASSNAME } from "../../common/constants";
import { getSpacing } from "../../common/utilities";

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
				`${CARD_CLASSNAME}__header mb-4 border-b-2 border-border-medium text-lg font-bold`,
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
