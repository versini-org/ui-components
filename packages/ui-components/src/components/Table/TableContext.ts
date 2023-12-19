import React from "react";

export const TableContext = React.createContext<{
	kind: "light" | "dark";
	cellWrapper?: "thead" | "tbody";
}>({
	kind: "light",
	cellWrapper: "thead",
});
