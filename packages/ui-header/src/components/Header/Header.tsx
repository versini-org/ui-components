import { getSpacing } from "@versini/ui-spacing";
import clsx from "clsx";

import { HEADER_CLASSNAME } from "../../common/constants";
import type { HeaderProps } from "./HeaderTypes";

export const Header = ({
	children,
	className,
	raw = false,
	spacing,
	mode = "system",
	noColors = false,
	sticky = false,
}: HeaderProps) => {
	const headerClass = clsx(HEADER_CLASSNAME, getSpacing(spacing), {
		"border-border-accent bg-surface-dark":
			mode === "dark" && !raw && !noColors,
		"border-border-medium bg-surface-light":
			mode === "light" && !raw && !noColors,
		"border-border-accent bg-surface-dark dark:border-border-medium dark:bg-surface-light":
			mode === "alt-system" && !raw && !noColors,
		"border-border-medium bg-surface-light dark:border-border-accent dark:bg-surface-dark":
			mode === "system" && !raw && !noColors,
		"border-b-4": !raw,
		"border-transparent": !raw && noColors,
		"sticky top-0 z-50": sticky,
	});
	const headerInnerClass = clsx(className, {
		"mt-0 flex w-full flex-col p-2 md:mx-auto md:max-w-4xl": !raw,
	});

	return (
		<header className={headerClass}>
			<div className={headerInnerClass}>{children}</div>
		</header>
	);
};
