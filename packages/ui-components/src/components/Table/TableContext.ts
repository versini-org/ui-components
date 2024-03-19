import React from "react";

export const TableContext = React.createContext<{
	mode: "light" | "dark" | "system" | "alt-system";
	cellWrapper?: "thead" | "tbody" | "tfoot";
	stickyFooter?: boolean;
	stickyHeader?: boolean;
}>({
	mode: "light",
	cellWrapper: "thead",
	stickyHeader: false,
	stickyFooter: false,
});
