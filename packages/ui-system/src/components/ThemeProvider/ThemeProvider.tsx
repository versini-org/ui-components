import { useEffect, useRef } from "react";

import { ThemeProviderProps } from "./ThemeProviderTypes";

export const ThemeProvider = ({
	customTheme,
	children,
	global,
}: ThemeProviderProps) => {
	const wrapperRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const wrapper = global
			? document.documentElement.style
			: wrapperRef?.current?.style;
		if (!wrapper || !customTheme) {
			return;
		}
		for (const [key, value] of Object.entries(customTheme)) {
			wrapper.setProperty(key, value as string);
		}
	}, [customTheme, global]);

	return customTheme || !global ? (
		<div ref={wrapperRef} className="contents">
			{children}
		</div>
	) : (
		children
	);
};
