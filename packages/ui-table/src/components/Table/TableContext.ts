import React from "react";

export const TableContext = React.createContext<{
	mode: "light" | "dark" | "system" | "alt-system";
	cellWrapper?: "thead" | "tbody" | "tfoot";
	compact?: boolean;
	stickyFooter?: boolean;
	stickyHeader?: boolean;
}>({
	mode: "light",
	cellWrapper: "thead",
	stickyHeader: false,
	stickyFooter: false,
	compact: false,
});
