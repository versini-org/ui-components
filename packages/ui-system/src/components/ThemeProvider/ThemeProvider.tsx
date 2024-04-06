import clsx from "clsx";
import { useEffect, useRef } from "react";

import { THEMEPROVIDER_CLASSNAME } from "../../common/constants";
import { ThemeProviderProps } from "./ThemeProviderTypes";

export const ThemeProvider = ({
	customTheme,
	children,
	global,
	className,
}: ThemeProviderProps) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const wrapperClass = clsx(THEMEPROVIDER_CLASSNAME, "contents", className);

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
		<div ref={wrapperRef} className={wrapperClass}>
			{children}
		</div>
	) : (
		children
	);
};
