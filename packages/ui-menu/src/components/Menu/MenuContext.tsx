import * as React from "react";

export const MenuContext = React.createContext<{
	activeIndex: number | null;
	getItemProps: (
		userProps?: React.HTMLProps<HTMLElement>,
	) => Record<string, unknown>;
	isOpen: boolean;
	setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
	setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	getItemProps: () => ({}),
	activeIndex: null,
	/* v8 ignore next 2 */
	setActiveIndex: () => {},
	setHasFocusInside: () => {},
	isOpen: false,
});
