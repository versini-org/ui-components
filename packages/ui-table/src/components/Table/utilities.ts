import { getSpacing } from "@versini/ui-spacing";
import type { SpacingTypes } from "@versini/ui-types";
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
	spacing,
}: {
	mode: string;
	className?: string;
	stickyFooter?: boolean;
	stickyHeader?: boolean;
	wrapperClassName?: string;
} & SpacingTypes.Props) => {
	return {
		wrapper: clsx(
			"not-prose relative w-full rounded-lg shadow-md",
			getSpacing(spacing),
			{
				"overflow-x-auto": !stickyHeader && !stickyFooter,
				"overflow-y-scroll": stickyHeader || stickyFooter,
				"bg-surface-darker text-copy-light": mode === "dark",
				"bg-surface-light text-copy-dark": mode === "light",
				"bg-surface-darker text-copy-light dark:bg-surface-light dark:text-copy-dark":
					mode === "system",
				"bg-surface-light text-copy-dark dark:bg-surface-darker dark:text-copy-light":
					mode === "alt-system",
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
	return clsx(className, {
		"sticky top-0 z-10": stickyHeader,
		"shadow-[rgb(190_190_190_/20%)_0_0.5rem_1rem]":
			stickyHeader && mode === "dark",
		"shadow-[rgb(190_190_190_/20%)_0_0.5rem_1rem] dark:shadow-[rgb(65_65_65_/30%)_0_0.5rem_1rem]":
			stickyHeader && mode === "system",
		"shadow-[rgb(65_65_65_/30%)_0_0.5rem_1rem]":
			stickyHeader && mode === "light",
		"shadow-[rgb(65_65_65_/30%)_0_0.5rem_1rem] dark:shadow-[rgb(190_190_190_/20%)_0_0.5rem_1rem]":
			stickyHeader && mode === "alt-system",
	});
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
	return clsx(className, {
		"sticky bottom-0 z-10": stickyFooter,
		"shadow-[rgb(190_190_190_/20%)_0_-0.5rem_1rem]":
			stickyFooter && mode === "dark",
		"shadow-[rgb(190_190_190_/20%)_0_-0.5rem_1rem] dark:shadow-[rgb(65_65_65_/30%)_0_-0.5rem_1rem]":
			stickyFooter && mode === "system",
		"shadow-[rgb(65_65_65_/30%)_0_-0.5rem_1rem]":
			stickyFooter && mode === "light",
		"shadow-[rgb(65_65_65_/30%)_-0_0.5rem_1rem] dark:shadow-[rgb(190_190_190_/20%)_0_-0.5rem_1rem]":
			stickyFooter && mode === "alt-system",
	});
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
		return clsx({
			"bg-table-head-dark": mode === "dark",
			"bg-table-head-light": mode === "light",
			"bg-table-head-dark dark:bg-table-head-light": mode === "system",
			"bg-table-head-light dark:bg-table-head-dark": mode === "alt-system",
		});
	}
	return clsx("border-b last:border-0", className, {
		"border-table-dark": mode === "dark",
		"odd:bg-table-dark-odd even:bg-table-dark-even":
			cellWrapper === CELL_WRAPPER_BODY && mode === "dark",

		"border-table-light": mode === "light",
		"odd:bg-table-light-odd even:bg-table-light-even":
			cellWrapper === CELL_WRAPPER_BODY && mode === "light",

		"border-table-dark dark:border-table-light": mode === "system",
		"odd:bg-table-dark-odd even:bg-table-dark-even dark:odd:bg-table-light-odd dark:even:bg-table-light-even":
			cellWrapper === CELL_WRAPPER_BODY && mode === "system",

		"border-table-light dark:border-table-dark": mode === "alt-system",
		"odd:bg-table-light-odd even:bg-table-light-even dark:odd:bg-table-dark-odd dark:even:bg-table-dark-even":
			cellWrapper === CELL_WRAPPER_BODY && mode === "alt-system",
	});
};

export const getTableCellClasses = ({
	cellWrapper,
	className,
	compact,
	mode,
}: {
	mode: string;
	cellWrapper?: string;
	className?: string;
	compact?: boolean;
}) => {
	return clsx(className, {
		"text-copy-light": mode === "dark",
		"text-copy-dark": mode === "light",
		"text-copy-light dark:text-copy-dark": mode === "system",
		"text-copy-dark dark:text-copy-light": mode === "alt-system",
		"px-4 py-3":
			!compact &&
			(cellWrapper === CELL_WRAPPER_HEAD ||
				cellWrapper === CELL_WRAPPER_FOOTER),
		"p-4": !compact && cellWrapper === CELL_WRAPPER_BODY,
		"px-4 py-1": compact,
	});
};

export const getTableCellSortButtonClasses = ({
	buttonClassName,
}: {
	buttonClassName?: string;
}) => {
	return clsx("rounded-none text-sm", buttonClassName);
};
