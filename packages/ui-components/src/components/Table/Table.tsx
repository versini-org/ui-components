import clsx from "clsx";
import { useContext } from "react";

import { TableContext } from "./TableContext";
import type {
	TableBodyProps,
	TableCellProps,
	TableHeadProps,
	TableProps,
	TableRowProps,
} from "./TableTypes";

const getTableClasses = ({
	kind,
	className,
}: {
	kind: string;
	className?: string;
}) => {
	return {
		wrapper: clsx("relative w-full overflow-x-auto rounded-lg shadow-md", {
			"bg-surface-dark text-copy-light": kind === "dark",
			"bg-surface-light text-copy-dark": kind === "light",
		}),
		table: clsx("w-full text-left text-sm", className, {
			"text-copy-light": kind === "dark",
			"text-copy-dark": kind === "light",
		}),
		caption: clsx("py-2 text-sm font-bold", {
			"text-copy-light": kind === "dark",
			"text-copy-dark": kind === "light",
		}),
	};
};

export const Table = ({
	children,
	kind = "dark",
	caption,
	summary,
	className,
	...otherProps
}: TableProps) => {
	const tableClass = getTableClasses({ kind, className });
	return (
		<TableContext.Provider value={{ kind }}>
			<div className={tableClass.wrapper}>
				<table className={tableClass.table} summary={summary} {...otherProps}>
					{caption && (
						<caption className={tableClass.caption}>{caption}</caption>
					)}
					{children}
				</table>
			</div>
		</TableContext.Provider>
	);
};

export const TableHead = ({ children, ...otherProps }: TableHeadProps) => {
	const context = useContext(TableContext);
	context.cellWrapper = "thead";
	return <thead {...otherProps}>{children}</thead>;
};

export const TableBody = ({ children, ...otherProps }: TableBodyProps) => {
	const context = useContext(TableContext);
	context.cellWrapper = "tbody";
	return <tbody {...otherProps}>{children}</tbody>;
};

export const TableRow = ({
	children,
	className,
	...otherProps
}: TableRowProps) => {
	const context = useContext(TableContext);
	const rowClass = clsx("border-b last:border-0", className, {
		"border-border-medium": context.kind === "dark",
		"bg-table-dark": context.cellWrapper === "thead" && context.kind === "dark",
		"odd:bg-table-dark-odd even:bg-table-dark-even":
			context.cellWrapper === "tbody" && context.kind === "dark",
		"bg-table-light":
			context.cellWrapper === "thead" && context.kind === "light",
		"odd:bg-table-light-odd even:bg-table-light-even":
			context.cellWrapper === "tbody" && context.kind === "light",
	});
	return (
		<tr className={rowClass} {...otherProps}>
			{children}
		</tr>
	);
};

export const TableCell = ({
	children,
	component,
	className,
	...otherProps
}: TableCellProps) => {
	const context = useContext(TableContext);
	const Component =
		component || (context.cellWrapper === "thead" ? "th" : "td");
	const cellClass = clsx(className, {
		"px-4 py-3": context.cellWrapper === "thead",
		"px-4 py-4": context.cellWrapper !== "thead",
	});
	return (
		<Component className={cellClass} {...otherProps}>
			{children}
		</Component>
	);
};
