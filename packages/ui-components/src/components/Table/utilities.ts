import clsx from "clsx";

import type { SpacingProps } from "../../common";
import { getSpacing } from "../../common/utilities";

export const CELL_WRAPPER_HEAD = "thead";
export const CELL_WRAPPER_BODY = "tbody";

export const getTableClasses = ({
	kind,
	className,
	wrapperClassName,
	stickyHeader,
	spacing,
}: {
	kind: string;
	className?: string;
	stickyHeader?: boolean;
	wrapperClassName?: string;
} & SpacingProps) => {
	return {
		wrapper: clsx(
			"relative w-full rounded-lg shadow-md",
			getSpacing(spacing),
			{
				"overflow-x-auto": !stickyHeader,
				"overflow-y-scroll": stickyHeader,
				"bg-surface-dark text-copy-light": kind === "dark",
				"bg-surface-light text-copy-dark": kind === "light",
				"bg-surface-dark text-copy-light dark:bg-surface-light dark:text-copy-dark":
					kind === "system",
			},
			wrapperClassName,
		),
		table: clsx("my-0 w-full text-left text-sm", className, {
			"text-copy-light": kind === "dark",
			"text-copy-dark": kind === "light",
			"text-copy-light dark:text-copy-dark": kind === "system",
		}),
		caption: clsx("py-2 text-sm font-bold", {
			"text-copy-light": kind === "dark",
			"text-copy-dark": kind === "light",
			"text-copy-light dark:text-copy-dark": kind === "system",
		}),
	};
};

export const getTableHeadClasses = ({
	className,
	stickyHeader,
}: {
	className?: string;
	stickyHeader?: boolean;
}) => {
	return clsx(className, {
		"sticky top-0 z-10": stickyHeader,
	});
};

export const getTableRowClasses = ({
	kind,
	className,
	cellWrapper,
}: {
	kind: string;
	cellWrapper?: string;
	className?: string;
}) => {
	return clsx("border-b last:border-0", className, {
		"border-table-dark": kind === "dark",
		"bg-table-dark": cellWrapper === CELL_WRAPPER_HEAD && kind === "dark",
		"bg-table-dark dark:bg-table-light":
			cellWrapper === CELL_WRAPPER_HEAD && kind === "system",
		"odd:bg-table-dark-odd even:bg-table-dark-even":
			cellWrapper === CELL_WRAPPER_BODY && kind === "dark",
		"odd:bg-table-dark-odd even:bg-table-dark-even dark:odd:bg-table-light-odd dark:even:bg-table-light-even":
			cellWrapper === CELL_WRAPPER_BODY && kind === "system",
		"bg-table-light": cellWrapper === CELL_WRAPPER_HEAD && kind === "light",
		"odd:bg-table-light-odd even:bg-table-light-even":
			cellWrapper === CELL_WRAPPER_BODY && kind === "light",
	});
};

export const getTableCellClasses = ({
	cellWrapper,
	className,
	kind,
}: {
	kind: string;
	cellWrapper?: string;
	className?: string;
}) => {
	return clsx(className, {
		"text-copy-light": kind === "dark",
		"text-copy-dark": kind === "light",
		"text-copy-light dark:text-copy-dark": kind === "system",
		"px-4 py-3": cellWrapper === CELL_WRAPPER_HEAD,
		"p-4": cellWrapper === CELL_WRAPPER_BODY,
	});
};
