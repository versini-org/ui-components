import { useContext } from "react";

import { TableContext } from "./TableContext";
import type {
	TableBodyProps,
	TableCellProps,
	TableHeadProps,
	TableProps,
	TableRowProps,
} from "./TableTypes";
import {
	CELL_WRAPPER_BODY,
	CELL_WRAPPER_HEAD,
	getTableCellClasses,
	getTableClasses,
	getTableHeadClasses,
	getTableRowClasses,
} from "./utilities";

export const Table = ({
	children,
	mode = "system",
	caption,
	summary,
	className,
	wrapperClassName,
	maxHeight,
	stickyHeader,
	spacing,
	...otherProps
}: TableProps) => {
	const tableClass = getTableClasses({
		mode,
		className,
		wrapperClassName,
		stickyHeader,
		spacing,
	});
	return (
		<TableContext.Provider value={{ mode, stickyHeader }}>
			<div
				className={tableClass.wrapper}
				{...(maxHeight && {
					style: { maxHeight },
				})}
			>
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

export const TableHead = ({
	children,
	className,
	...otherProps
}: TableHeadProps) => {
	const context = useContext(TableContext);
	context.cellWrapper = CELL_WRAPPER_HEAD;
	const tableHeadClass = getTableHeadClasses({
		className,
		stickyHeader: context.stickyHeader,
	});
	return (
		<thead className={tableHeadClass} {...otherProps}>
			{children}
		</thead>
	);
};

export const TableBody = ({ children, ...otherProps }: TableBodyProps) => {
	const context = useContext(TableContext);
	context.cellWrapper = CELL_WRAPPER_BODY;
	return <tbody {...otherProps}>{children}</tbody>;
};

export const TableRow = ({
	children,
	className,
	...otherProps
}: TableRowProps) => {
	const context = useContext(TableContext);
	const rowClass = getTableRowClasses({
		mode: context.mode,
		cellWrapper: context.cellWrapper,
		className,
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
		component || (context.cellWrapper === CELL_WRAPPER_HEAD ? "th" : "td");
	const cellClass = getTableCellClasses({
		cellWrapper: context.cellWrapper,
		className,
		mode: context.mode,
	});
	return (
		<Component className={cellClass} {...otherProps}>
			{children}
		</Component>
	);
};
