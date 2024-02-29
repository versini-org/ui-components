import React from "react";

export const TableContext = React.createContext<{
	mode: "light" | "dark" | "system";
	cellWrapper?: "thead" | "tbody";
	stickyHeader?: boolean;
}>({
	mode: "light",
	cellWrapper: "thead",
	stickyHeader: false,
});
