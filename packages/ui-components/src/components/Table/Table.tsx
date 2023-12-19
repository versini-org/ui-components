import clsx from "clsx";
import { useContext } from "react";

import { TableContext } from "./TableContext";
import type { TableCellProps, TableProps } from "./TableTypes";

const getTableClasses = ({ kind }: { kind: string }) => {
	return {
		wrapper: "relative overflow-x-auto rounded-lg shadow-md",
		table: clsx("w-full text-left text-sm", {
			"bg-surface-dark text-copy-light": kind === "dark",
			"bg-surface-light text-copy-dark": kind === "light",
		}),
	};
};
export const Table = ({
	children,
	kind = "dark",
	caption,
	summary,
	...otherProps
}: TableProps) => {
	const tableClass = getTableClasses({ kind });
	return (
		<div className={tableClass.wrapper}>
			<table className={tableClass.table} summary={summary} {...otherProps}>
				{caption && <caption>{caption}</caption>}
				{children}
			</table>
		</div>
	);
};

export const TableHead = ({
	children,
	...otherProps
}: {
	children: React.ReactNode;
}) => {
	return (
		<TableContext.Provider value={"thead"}>
			<thead {...otherProps}>{children}</thead>
		</TableContext.Provider>
	);
};

export const TableBody = ({
	children,
	...otherProps
}: {
	children: React.ReactNode;
}) => {
	return (
		<TableContext.Provider value={"tbody"}>
			<tbody {...otherProps}>{children}</tbody>
		</TableContext.Provider>
	);
};

export const TableRow = ({
	children,
	...otherProps
}: {
	children: React.ReactNode;
}) => {
	const context = useContext(TableContext);
	const rowClass = clsx("border-b", {
		"bg-gray-700": context === "thead",
		"odd:bg-gray-800 even:bg-gray-900": context === "tbody",
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
	...otherProps
}: TableCellProps) => {
	const context = useContext(TableContext);
	const Component = component || (context === "thead" ? "th" : "td");
	return <Component {...otherProps}>{children}</Component>;
};
