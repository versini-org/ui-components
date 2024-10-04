import React from "react";
import type { Mode, Size } from "./ToggleGroupTypes";

export const ToggleGroupContext = React.createContext<{
	size: Size;
	focusMode: Mode;
	mode: Mode;
}>({
	size: "medium",
	focusMode: "system",
	mode: "system",
});
