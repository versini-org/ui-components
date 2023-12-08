import clsx from "clsx";

import { CARD_CLASSNAME } from "../../common/constants";

type getCardClassesProps = {
	className?: string;
	headerClassName?: string;
	footerClassName?: string;
	noBackground?: boolean;
};

export const getCardClasses = ({
	className,
	headerClassName,
	footerClassName,
	noBackground,
}: getCardClassesProps) => {
	const wrapper = className
		? className
		: clsx(CARD_CLASSNAME, "rounded-md text-copy-light", {
				"border-2 border-border-dark bg-surface-dark p-4": !noBackground,
		  });
	const header = headerClassName
		? headerClassName
		: clsx(
				`${CARD_CLASSNAME}__header mb-4 border-b-2 border-border-light text-lg font-bold`,
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
