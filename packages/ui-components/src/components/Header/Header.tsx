import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import { HEADER_CLASSNAME } from "../../common/constants";
import { HeaderProps } from "./HeaderTypes";

export const Header = ({
	children,
	className,
	raw = false,
	spacing,
	mode = "system",
	noColors = false,
}: HeaderProps) => {
	const headerClass = clsx(HEADER_CLASSNAME, getSpacing(spacing), {
		"border-border-accent bg-surface-medium":
			mode === "dark" && !raw && !noColors,
		"border-border-medium bg-surface-light":
			mode === "light" && !raw && !noColors,
		"border-border-accent bg-surface-light dark:border-border-medium dark:bg-surface-dark":
			mode === "system" && !raw && !noColors,
		"border-border-medium bg-surface-dark dark:border-border-accent dark:bg-surface-light":
			mode === "alt-system" && !raw && !noColors,
		"border-b-4": !raw,
		"border-transparent": !raw && noColors,
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
