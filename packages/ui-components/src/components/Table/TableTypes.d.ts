import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import React from "react";

export type TableProps = {
	/**
	 * This attribute defines the caption (or title) of a table.
	 */
	caption?: React.ReactNode;
	/**
	 * If true, the table will be smaller.
	 */
	compact?: boolean;
	/**
	 * The max height of the table. It follows the CSS max-height property.
	 * Note: It is required to configure 'maxHeight' prop for the prop
	 * 'stickyHeader' to work.
	 */
	maxHeight?: string;
	/**
	 * The mode of table. It defines the color of the table.
	 */
	mode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * If true, the table footer will be sticky.
	 * Note: It is required to configure 'maxHeight' prop for the prop
	 * 'stickyHeader' to work.
	 */
	stickyFooter?: boolean;
	/**
	 * If true, the table header will be sticky.
	 * Note: It is required to configure 'maxHeight' prop for the prop
	 * 'stickyHeader' to work.
	 */
	stickyHeader?: boolean;
	/**
	 * This attribute defines an alternative text that summarizes
	 * the content of the table. It is not visible but will be
	 * read out loud by screen readers to represent the table.
	 */
	summary?: string;
	/**
	 * CSS class to apply to the table wrapper.
	 */
	wrapperClassName?: string;
} & SpacingProps &
	React.HTMLAttributes<HTMLTableElement>;

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;
export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;
export type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;

export type TableCellProps = {
	/**
	 * The type of cell.
	 * @default "td"
	 */
	component?: "td" | "th";
} & React.ThHTMLAttributes<HTMLTableCellElement> &
	React.TdHTMLAttributes<HTMLTableCellElement>;

export type TableCellSortProps = {
	cellId: string;
	children: string;
	onClick: (event: React.MouseEvent<unknown>) => void;
	sortDirection: "asc" | "desc" | false;
	sortedCell: string;

	align?: "left" | "center" | "right";
	component?: "td" | "th";
	focusMode?: "system" | "light" | "dark" | "alt-system";
	mode?: "system" | "light" | "dark" | "alt-system";
} & React.ThHTMLAttributes<HTMLTableCellElement> &
	React.TdHTMLAttributes<HTMLTableCellElement>;
