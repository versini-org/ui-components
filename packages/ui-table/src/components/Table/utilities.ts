import clsx from "clsx";

export const CELL_WRAPPER_HEAD = "thead";
export const CELL_WRAPPER_FOOTER = "tfoot";
export const CELL_WRAPPER_BODY = "tbody";

export const TableCellSortDirections = {
	ASC: "asc",
	DESC: "desc",
};

export const getTableClasses = ({
	mode,
	className,
	wrapperClassName,
	stickyHeader,
	stickyFooter,
}: {
	mode: string;
	className?: string;
	stickyFooter?: boolean;
	stickyHeader?: boolean;
	wrapperClassName?: string;
}) => {
	return {
		wrapper: clsx(
			"not-prose relative w-full rounded-lg shadow-md",
			{
				"overflow-x-auto": !stickyHeader && !stickyFooter,
				"overflow-y-scroll": stickyHeader || stickyFooter,

				"bg-surface-darker": mode === "dark" || mode === "system",
				"bg-surface-light": mode === "light" || mode === "alt-system",
				"dark:bg-surface-light": mode === "system",
				"dark:bg-surface-darker": mode === "alt-system",

				"text-copy-light": mode === "dark",
				"text-copy-dark": mode === "light",
				"text-copy-light dark:text-copy-dark": mode === "system",
				"text-copy-dark dark:text-copy-light": mode === "alt-system",
			},
			wrapperClassName,
		),
		table: clsx("my-0 w-full text-left text-sm", className, {
			"text-copy-light": mode === "dark",
			"text-copy-dark": mode === "light",
			"text-copy-light dark:text-copy-dark": mode === "system",
			"text-copy-dark dark:text-copy-light": mode === "alt-system",
		}),
		caption: clsx("py-2 text-sm font-bold", {
			"text-copy-light": mode === "dark",
			"text-copy-dark": mode === "light",
			"text-copy-light dark:text-copy-dark": mode === "system",
			"text-copy-dark dark:text-copy-light": mode === "alt-system",
		}),
	};
};

export const getTableHeadClasses = ({
	className,
	stickyHeader,
	mode,
}: {
	mode: string;
	className?: string;
	stickyHeader?: boolean;
}) => {
	return clsx(
		{
			"sticky top-0 z-10": stickyHeader,
			"shadow-[rgb(190_190_190_/20%)_0_0.5rem_1rem]":
				stickyHeader && mode === "dark",
			"shadow-[rgb(190_190_190_/20%)_0_0.5rem_1rem] dark:shadow-[rgb(65_65_65_/30%)_0_0.5rem_1rem]":
				stickyHeader && mode === "system",
			"shadow-[rgb(65_65_65_/30%)_0_0.5rem_1rem]":
				stickyHeader && mode === "light",
			"shadow-[rgb(65_65_65_/30%)_0_0.5rem_1rem] dark:shadow-[rgb(190_190_190_/20%)_0_0.5rem_1rem]":
				stickyHeader && mode === "alt-system",
		},
		className,
	);
};

export const getTableFooterClasses = ({
	className,
	stickyFooter,
	mode,
}: {
	mode: string;
	className?: string;
	stickyFooter?: boolean;
}) => {
	return clsx(
		{
			"sticky bottom-0 z-10": stickyFooter,
			"shadow-[rgb(190_190_190_/20%)_0_-0.5rem_1rem]":
				stickyFooter && mode === "dark",
			"shadow-[rgb(190_190_190_/20%)_0_-0.5rem_1rem] dark:shadow-[rgb(65_65_65_/30%)_0_-0.5rem_1rem]":
				stickyFooter && mode === "system",
			"shadow-[rgb(65_65_65_/30%)_0_-0.5rem_1rem]":
				stickyFooter && mode === "light",
			"shadow-[rgb(65_65_65_/30%)_-0_0.5rem_1rem] dark:shadow-[rgb(190_190_190_/20%)_0_-0.5rem_1rem]":
				stickyFooter && mode === "alt-system",
		},
		className,
	);
};

export const getTableRowClasses = ({
	mode,
	className,
	cellWrapper,
}: {
	mode: string;
	cellWrapper?: string;
	className?: string;
}) => {
	if (
		cellWrapper === CELL_WRAPPER_HEAD ||
		cellWrapper === CELL_WRAPPER_FOOTER
	) {
		return clsx(
			{
				"bg-table-head-dark": mode === "dark" || mode === "system",
				"bg-table-head-light": mode === "light" || mode === "alt-system",
				"dark:bg-table-head-light": mode === "system",
				"dark:bg-table-head-dark": mode === "alt-system",
			},
			className,
		);
	}
	return clsx(
		"border-b last:border-0",
		{
			"border-table-dark": mode === "dark" || mode === "system",
			"odd:bg-table-dark-odd even:bg-table-dark-even":
				cellWrapper === CELL_WRAPPER_BODY && mode === "dark",

			"border-table-light": mode === "light" || mode === "alt-system",
			"odd:bg-table-light-odd even:bg-table-light-even":
				cellWrapper === CELL_WRAPPER_BODY && mode === "light",

			"dark:border-table-light": mode === "system",
			"odd:bg-table-dark-odd even:bg-table-dark-even dark:odd:bg-table-light-odd dark:even:bg-table-light-even":
				cellWrapper === CELL_WRAPPER_BODY && mode === "system",

			"dark:border-table-dark": mode === "alt-system",
			"odd:bg-table-light-odd even:bg-table-light-even dark:odd:bg-table-dark-odd dark:even:bg-table-dark-even":
				cellWrapper === CELL_WRAPPER_BODY && mode === "alt-system",
		},
		className,
	);
};

export const getTableCellClasses = ({
	cellWrapper,
	className,
	compact,
	mode,
	align,
}: {
	mode: string;
	cellWrapper?: string;
	className?: string;
	compact?: boolean;
	align?: "left" | "center" | "right";
}) => {
	return clsx(
		{
			"flex justify-start": align === "left",
			"flex justify-center": align === "center",
			"flex justify-end": align === "right",

			"text-copy-light": mode === "dark" || mode === "system",
			"text-copy-dark": mode === "light" || mode === "alt-system",
			"dark:text-copy-dark": mode === "system",
			"dark:text-copy-light": mode === "alt-system",
			"px-4 py-3":
				!compact &&
				(cellWrapper === CELL_WRAPPER_HEAD ||
					cellWrapper === CELL_WRAPPER_FOOTER),
			"p-4": !compact && cellWrapper === CELL_WRAPPER_BODY,
			"px-2 py-1.5": compact,
		},
		className,
	);
};

export const getTableCellSortButtonClasses = ({
	buttonClassName,
}: {
	buttonClassName?: string;
}) => {
	return clsx("rounded-none text-sm", buttonClassName);
};
