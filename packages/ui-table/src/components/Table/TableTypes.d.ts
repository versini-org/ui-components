import type { SpacingProps } from "@versini/ui-private/dist/utilities";
import React from "react";

import { TableCellSortDirections } from "./utilities";

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
	/**
	 * Unique identifier for the cell. This string will have to be onClick
	 * handler to sort on this particular cell.
	 */
	cellId: string;
	/**
	 * The label of the cell.
	 */
	children: string;
	/**
	 * The handler to be called when the cell is clicked.
	 */
	onClick: (event: React.MouseEvent<unknown>) => void;
	/**
	 * The direction of the sort.
	 */
	sortDirection:
		| typeof TableCellSortDirections.ASC
		| typeof TableCellSortDirections.DESC
		| false;
	/**
	 * The cellId that is currently sorted.
	 */
	sortedCell: string;
	/**
	 * Whether to align the cell content to the left, center, or right.
	 */
	align?: "left" | "center" | "right";
	/**
	 * CSS class to apply to the button within the sort table cell.
	 */
	buttonClassName?: string;
	/**
	 * The type of cell.
	 * @default "td"
	 */
	component?: "td" | "th";
	/**
	 * Pass through to the underlying ButtonIcon.
	 * The type of focus for the Button. This will change the color
	 * of the focus ring around the Button.
	 */
	focusMode?: "system" | "light" | "dark" | "alt-system";
	/**
	 * Pass through to the underlying ButtonIcon.
	 * The mode of Button. This will change the color of the Button.
	 */
	mode?: "system" | "light" | "dark" | "alt-system";
} & React.ThHTMLAttributes<HTMLTableCellElement> &
	React.TdHTMLAttributes<HTMLTableCellElement>;
