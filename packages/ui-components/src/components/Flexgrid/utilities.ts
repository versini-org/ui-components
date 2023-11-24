import clsx from "clsx";

const tailwindDirectionMap: { [key: string]: string } = {
	row: "row",
	column: "col",
	"row-reverse": "row-reverse",
	"column-reverse": "col-reverse",
};

const tailwindJustifyMap: { [key: string]: string } = {
	"flex-start": "justify-start",
	center: "justify-center",
	"flex-end": "justify-end",
	"space-between": "justify-between",
	"space-around": "justify-around",
	"space-evenly": "justify-evenly",
};

const tailwindAlignMap: { [key: string]: string } = {
	"flex-start": "items-start",
	center: "items-center",
	"flex-end": "items-end",
	stretch: "items-stretch",
	baseline: "items-baseline",
};

export const getFlexgridClasses = ({
	className,
	columnGap,
	rowGap,
	direction,
	alignHorizontal,
	alignVertical,
	height,
	width,
}: {
	className?: string;
	columnGap: number;
	rowGap: number;
	direction: string;
	alignHorizontal: string;
	alignVertical: string;
	height: string;
	width: string;
}) => {
	return clsx(
		className,
		"box-border flex flex-wrap",
		`flex-${tailwindDirectionMap[direction]}`,
		`${tailwindJustifyMap[alignHorizontal]}`,
		`${tailwindAlignMap[alignVertical]}`,
		{
			[`h-[${height}]`]: height,
			[`w-[${width}]`]: width,
			[`gap-x-${columnGap}`]: columnGap,
			[`gap-y-${rowGap}`]: rowGap,
		},
	);
};
