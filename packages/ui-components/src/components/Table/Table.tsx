import { IconSort, IconSortDown, IconSortUp } from "@versini/ui-icons";
import { useContext } from "react";

import { ButtonSort } from "../private/ButtonSort";
import { TableContext } from "./TableContext";
import type {
	TableBodyProps,
	TableCellProps,
	TableCellSortProps,
	TableHeadProps,
	TableProps,
	TableRowProps,
} from "./TableTypes";
import {
	CELL_WRAPPER_BODY,
	CELL_WRAPPER_FOOTER,
	CELL_WRAPPER_HEAD,
	TableCellSortDirections,
	getTableCellClasses,
	getTableClasses,
	getTableFooterClasses,
	getTableHeadClasses,
	getTableRowClasses,
} from "./utilities";

export const Table = ({
	children,
	mode = "system",
	caption,
	compact,
	summary,
	className,
	wrapperClassName,
	maxHeight,
	stickyHeader,
	stickyFooter,
	spacing,
	...otherProps
}: TableProps) => {
	const tableClass = getTableClasses({
		mode,
		className,
		wrapperClassName,
		stickyHeader,
		stickyFooter,
		spacing,
	});
	return (
		<TableContext.Provider
			value={{ mode, stickyHeader, stickyFooter, compact }}
		>
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
		mode: context.mode,
		stickyHeader: context.stickyHeader,
	});
	return (
		<thead className={tableHeadClass} {...otherProps}>
			{children}
		</thead>
	);
};

export const TableFooter = ({
	children,
	className,
	...otherProps
}: TableHeadProps) => {
	const context = useContext(TableContext);
	context.cellWrapper = CELL_WRAPPER_FOOTER;
	const tableFooterClass = getTableFooterClasses({
		className,
		mode: context.mode,
		stickyFooter: context.stickyFooter,
	});
	return (
		<tfoot className={tableFooterClass} {...otherProps}>
			{children}
		</tfoot>
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
		compact: context.compact,
	});
	return (
		<Component className={cellClass} {...otherProps}>
			{children}
		</Component>
	);
};

export const TableCellSort = ({
	align,
	children,
	className,
	component,
	focusMode = "alt-system",
	mode = "alt-system",
	onClick,
	sortDirection,
	sortedCell,
	cellId,
	...otherProps
}: TableCellSortProps) => {
	return (
		<TableCell
			component={component}
			className={className}
			role="columnheader"
			aria-sort={
				sortDirection === TableCellSortDirections.ASC && sortedCell === cellId
					? "ascending"
					: sortDirection === TableCellSortDirections.DESC &&
							sortedCell === cellId
						? "descending"
						: "other"
			}
			{...otherProps}
		>
			<ButtonSort
				active={sortedCell === cellId}
				className="rounded-none text-sm"
				onClick={onClick}
				align={align}
				noBorder
				focusMode={focusMode}
				mode={mode}
				fullWidth
				labelRight={children}
			>
				{sortDirection === TableCellSortDirections.ASC &&
				sortedCell === cellId ? (
					<IconSortUp className="size-4" monotone />
				) : sortDirection === TableCellSortDirections.DESC &&
					sortedCell === cellId ? (
					<IconSortDown className="size-4" monotone />
				) : (
					<IconSort className="size-4" monotone />
				)}
			</ButtonSort>
		</TableCell>
	);
};
