import clsx from "clsx";

import { FLEXGRID_ITEM_CLASSNAME } from "../../common/constants";

export const getFlexItemClasses = ({
	className,
	span,
}: {
	className?: string;
	span?: number | "auto";
}) => {
	if (typeof span === "number") {
		return clsx(className, FLEXGRID_ITEM_CLASSNAME, "box-border max-w-full", {
			"basis-1/12": span === 1,
			"basis-2/12": span === 2,
			"basis-3/12": span === 3,
			"basis-4/12": span === 4,
			"basis-5/12": span === 5,
			"basis-6/12": span === 6,
			"basis-7/12": span === 7,
			"basis-8/12": span === 8,
			"basis-9/12": span === 9,
			"basis-10/12": span === 10,
			"basis-11/12": span === 11,
			"basis-12/12": span === 12,
		});
	}
	return clsx(className, FLEXGRID_ITEM_CLASSNAME, "box-border basis-auto", {
		"max-w-full grow": span === "auto",
	});
};
