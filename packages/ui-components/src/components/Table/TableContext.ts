import React from "react";

export const TableContext = React.createContext<{
	kind: "light" | "dark";
	cellWrapper?: "thead" | "tbody";
	stickyHeader?: boolean;
}>({
	kind: "light",
	cellWrapper: "thead",
	stickyHeader: false,
});
