import clsx from "clsx";

export const CELL_WRAPPER_HEAD = "thead";
export const CELL_WRAPPER_BODY = "tbody";

export const getTableClasses = ({
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

export const getTableRowClasses = ({
	kind,
	className,
	cellWrapper,
}: {
	kind: string;
	className?: string;
	cellWrapper?: string;
}) => {
	return clsx("border-b last:border-0", className, {
		"border-table-dark": kind === "dark",
		"bg-table-dark": cellWrapper === CELL_WRAPPER_HEAD && kind === "dark",
		"odd:bg-table-dark-odd even:bg-table-dark-even":
			cellWrapper === "tbody" && kind === "dark",
		"bg-table-light": cellWrapper === CELL_WRAPPER_HEAD && kind === "light",
		"odd:bg-table-light-odd even:bg-table-light-even":
			cellWrapper === "tbody" && kind === "light",
	});
};

export const getTableCellClasses = ({
	cellWrapper,
	className,
}: {
	cellWrapper?: string;
	className?: string;
}) => {
	return clsx(className, {
		"px-4 py-3": cellWrapper === CELL_WRAPPER_HEAD,
		"p-4": cellWrapper === CELL_WRAPPER_BODY,
	});
};
