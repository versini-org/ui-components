import React from "react";

export type TableProps = {
	kind?: "dark" | "light";
	/**
	 * The <caption> HTML element specifies the caption
	 * (or title) of a table.
	 */
	caption?: React.ReactNode;
	/**
	 * This attribute defines an alternative text that summarizes
	 * the content of the table.
	 */
	summary?: string;
} & React.HTMLAttributes<HTMLTableElement>;

export type TableCellProps = {
	component?: "td" | "th";
} & React.ThHTMLAttributes<HTMLTableCellElement> &
	React.TdHTMLAttributes<HTMLTableCellElement>;
