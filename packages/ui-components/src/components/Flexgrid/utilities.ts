import clsx from "clsx";

import { FLEXGRID_ITEM_CLASSNAME } from "../../common/constants";

const getBasisClass = (span: number, breakpoint?: string) => {
	return clsx({
		"basis-1/12": span === 1 && !breakpoint,
		"sm:basis-1/12": span === 1 && breakpoint === "sm",
		"md:basis-1/12": span === 1 && breakpoint === "md",
		"lg:basis-1/12": span === 1 && breakpoint === "lg",
		"xl:basis-1/12": span === 1 && breakpoint === "xl",
		"2xl:basis-1/12": span === 1 && breakpoint === "2xl",
		"basis-2/12": span === 2 && !breakpoint,

		"sm:basis-2/12": span === 2 && breakpoint === "sm",
		"md:basis-2/12": span === 2 && breakpoint === "md",
		"lg:basis-2/12": span === 2 && breakpoint === "lg",
		"xl:basis-2/12": span === 2 && breakpoint === "xl",
		"2xl:basis-2/12": span === 2 && breakpoint === "2xl",

		"basis-3/12": span === 3 && !breakpoint,
		"sm:basis-3/12": span === 3 && breakpoint === "sm",
		"md:basis-3/12": span === 3 && breakpoint === "md",
		"lg:basis-3/12": span === 3 && breakpoint === "lg",
		"xl:basis-3/12": span === 3 && breakpoint === "xl",
		"2xl:basis-3/12": span === 3 && breakpoint === "2xl",

		"basis-4/12": span === 4 && !breakpoint,
		"sm:basis-4/12": span === 4 && breakpoint === "sm",
		"md:basis-4/12": span === 4 && breakpoint === "md",
		"lg:basis-4/12": span === 4 && breakpoint === "lg",
		"xl:basis-4/12": span === 4 && breakpoint === "xl",
		"2xl:basis-4/12": span === 4 && breakpoint === "2xl",

		"basis-5/12": span === 5 && !breakpoint,
		"sm:basis-5/12": span === 5 && breakpoint === "sm",
		"md:basis-5/12": span === 5 && breakpoint === "md",
		"lg:basis-5/12": span === 5 && breakpoint === "lg",
		"xl:basis-5/12": span === 5 && breakpoint === "xl",
		"2xl:basis-5/12": span === 5 && breakpoint === "2xl",

		"basis-6/12": span === 6 && !breakpoint,
		"sm:basis-6/12": span === 6 && breakpoint === "sm",
		"md:basis-6/12": span === 6 && breakpoint === "md",
		"lg:basis-6/12": span === 6 && breakpoint === "lg",
		"xl:basis-6/12": span === 6 && breakpoint === "xl",
		"2xl:basis-6/12": span === 6 && breakpoint === "2xl",

		"basis-7/12": span === 7 && !breakpoint,
		"sm:basis-7/12": span === 7 && breakpoint === "sm",
		"md:basis-7/12": span === 7 && breakpoint === "md",
		"lg:basis-7/12": span === 7 && breakpoint === "lg",
		"xl:basis-7/12": span === 7 && breakpoint === "xl",
		"2xl:basis-7/12": span === 7 && breakpoint === "2xl",

		"basis-8/12": span === 8 && !breakpoint,
		"sm:basis-8/12": span === 8 && breakpoint === "sm",
		"md:basis-8/12": span === 8 && breakpoint === "md",
		"lg:basis-8/12": span === 8 && breakpoint === "lg",
		"xl:basis-8/12": span === 8 && breakpoint === "xl",
		"2xl:basis-8/12": span === 8 && breakpoint === "2xl",

		"basis-9/12": span === 9 && !breakpoint,
		"sm:basis-9/12": span === 9 && breakpoint === "sm",
		"md:basis-9/12": span === 9 && breakpoint === "md",
		"lg:basis-9/12": span === 9 && breakpoint === "lg",
		"xl:basis-9/12": span === 9 && breakpoint === "xl",
		"2xl:basis-9/12": span === 9 && breakpoint === "2xl",

		"basis-10/12": span === 10 && !breakpoint,
		"sm:basis-10/12": span === 10 && breakpoint === "sm",
		"md:basis-10/12": span === 10 && breakpoint === "md",
		"lg:basis-10/12": span === 10 && breakpoint === "lg",
		"xl:basis-10/12": span === 10 && breakpoint === "xl",
		"2xl:basis-10/12": span === 10 && breakpoint === "2xl",

		"basis-11/12": span === 11 && !breakpoint,
		"sm:basis-11/12": span === 11 && breakpoint === "sm",
		"md:basis-11/12": span === 11 && breakpoint === "md",
		"lg:basis-11/12": span === 11 && breakpoint === "lg",
		"xl:basis-11/12": span === 11 && breakpoint === "xl",
		"2xl:basis-11/12": span === 11 && breakpoint === "2xl",

		"basis-full": span === 12 && !breakpoint,
		"sm:basis-full": span === 12 && breakpoint === "sm",
		"md:basis-full": span === 12 && breakpoint === "md",
		"lg:basis-full": span === 12 && breakpoint === "lg",
		"xl:basis-full": span === 12 && breakpoint === "xl",
		"2xl:basis-full": span === 12 && breakpoint === "2xl",
	});
};

/**
 * Returns the classes for a FlexgridItem component.
 * @param className - The class name to be applied to the FlexgridItem.
 * @param span - The number of columns to span across in the Flexgrid.
 * @returns The classes for a FlexgridItem component.
 */
export const getFlexItemClasses = ({
	className,
	span,
}: {
	className?: string;
	span?:
		| number
		| "auto"
		| {
				fallback?: number;
				lg?: number;
				md?: number;
				sm?: number;
				xl?: number;
		  };
}) => {
	if (!span) {
		return clsx(className, FLEXGRID_ITEM_CLASSNAME, "box-border basis-auto");
	}

	if (typeof span === "number") {
		return clsx(className, FLEXGRID_ITEM_CLASSNAME, "box-border max-w-full", {
			[`${getBasisClass(span)}`]: true,
		});
	}
	if (typeof span === "string") {
		return clsx(className, FLEXGRID_ITEM_CLASSNAME, "box-border basis-auto", {
			"max-w-full grow": span === "auto",
		});
	}

	/**
	 * If span is an object, it means it's a responsive prop.
	 * For example:
	 * { fallback: 12, sm: 6, md: 3, lg: 3, xl: 12 }
	 * should be converted to:
	 * "basis-full sm:basis-6/12 md:basis-3/12 lg:basis-3/12 xl:basis-full"
	 */
	if (typeof span === "object") {
		const responsiveClasses = Object.entries(span).map(([key, value]) => {
			if (key === "fallback") {
				return getBasisClass(value);
			}
			return getBasisClass(value, key);
		});
		return clsx(
			className,
			FLEXGRID_ITEM_CLASSNAME,
			"box-border",
			responsiveClasses,
		);
	}
};
