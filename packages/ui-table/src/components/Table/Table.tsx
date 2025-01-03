import { ButtonSort_private } from "@versini/ui-button";
import { IconSort, IconSortDown, IconSortUp } from "@versini/ui-icons";
import { useContext } from "react";

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
	getTableCellSortButtonClasses,
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
	...otherProps
}: TableProps) => {
	const tableClass = getTableClasses({
		mode,
		className,
		wrapperClassName,
		stickyHeader,
		stickyFooter,
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
	align,
	...otherProps
}: TableCellProps) => {
	const context = useContext(TableContext);
	const Component =
		component || (context.cellWrapper === CELL_WRAPPER_HEAD ? "th" : "td");
	const { mainClasses, alignClasses } = getTableCellClasses({
		cellWrapper: context.cellWrapper,
		className,
		mode: context.mode,
		compact: context.compact,
		align,
	});
	return align ? (
		<Component className={mainClasses} {...otherProps}>
			<div className={alignClasses}>{children}</div>
		</Component>
	) : (
		<Component className={mainClasses} {...otherProps}>
			{children}
		</Component>
	);
};

export const TableCellSort = ({
	align,
	children,
	buttonClassName,
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
	const buttonClass = getTableCellSortButtonClasses({ buttonClassName });
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
			<ButtonSort_private
				active={sortedCell === cellId}
				className={buttonClass}
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
			</ButtonSort_private>
		</TableCell>
	);
};
