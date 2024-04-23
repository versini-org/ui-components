import clsx from "clsx";
import React, { useEffect, useRef } from "react";

import { getSpacing } from "@versini/ui-private/dist/utilities";
import { THEMEPROVIDER_CLASSNAME } from "../../common/constants";
import { ThemeProviderProps } from "./ThemeProviderTypes";

export const ThemeProvider = ({
	customTheme,
	children,
	global,
	className,
	spacing,
}: ThemeProviderProps) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const wrapperClass = clsx(THEMEPROVIDER_CLASSNAME, "contents", className);
	const Component = spacing ? "div" : React.Fragment;

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
		<Component {...(spacing ? { className: getSpacing(spacing) } : {})}>
			<div ref={wrapperRef} className={wrapperClass}>
				{children}
			</div>
		</Component>
	) : (
		<Component {...(spacing ? { className: getSpacing(spacing) } : {})}>
			{children}
		</Component>
	);
};
