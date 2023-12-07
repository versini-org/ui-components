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
		: clsx(CARD_CLASSNAME, "rounded-md text-slate-200", {
				"border-2 border-slate-900 bg-slate-900 p-4": !noBackground,
		  });
	const header = headerClassName
		? headerClassName
		: clsx(`${CARD_CLASSNAME}__header pb-2 text-lg font-bold`);

	const footer = footerClassName
		? footerClassName
		: clsx(`${CARD_CLASSNAME}__footer pt-2`);

	return {
		wrapper,
		header,
		footer,
	};
};
