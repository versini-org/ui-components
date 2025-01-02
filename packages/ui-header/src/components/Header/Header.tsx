import clsx from "clsx";

import { HEADER_CLASSNAME } from "../../common/constants";
import type { HeaderProps } from "./HeaderTypes";

export const Header = ({
	children,
	className,
	raw = false,

	mode = "system",
	noColors = false,
	sticky = false,

	noBorder = false,
	noMargin = false,
	noPadding = false,
}: HeaderProps) => {
	const headerClass = clsx(
		HEADER_CLASSNAME,
		{
			"border-border-accent": mode === "dark" && !raw && !noColors && !noBorder,
			"border-border-medium":
				mode === "light" && !raw && !noColors && !noBorder,
			"border-border-accent dark:border-border-medium":
				mode === "alt-system" && !raw && !noColors && !noBorder,
			"border-border-medium dark:border-border-accent":
				mode === "system" && !raw && !noColors && !noBorder,
			"border-b-4": !raw && !noBorder,
			"border-transparent": !raw && noColors,

			"bg-surface-dark": mode === "dark" && !raw && !noColors,
			"bg-surface-light": mode === "light" && !raw && !noColors,
			"bg-surface-dark dark:bg-surface-light":
				mode === "alt-system" && !raw && !noColors,
			"bg-surface-light dark:bg-surface-dark":
				mode === "system" && !raw && !noColors,

			"sticky top-0 z-50": sticky,
		},
		className,
	);
	const headerInnerClass = clsx({
		"mt-0": !noMargin,
		"p-2": !noPadding,
		"flex flex-col w-full md:mx-auto md:max-w-4xl": !raw,
	});

	return (
		<header className={headerClass}>
			<div className={headerInnerClass}>{children}</div>
		</header>
	);
};
