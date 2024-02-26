import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import { HEADER_CLASSNAME } from "../../common/constants";
import { HeaderProps } from "./HeaderTypes";

export const Header = ({
	children,
	className,
	raw = false,
	spacing,
}: HeaderProps) => {
	const headerClass = clsx(className, HEADER_CLASSNAME, getSpacing(spacing), {
		"mt-0 flex w-full flex-col p-2 sm:mt-3 md:mx-auto md:max-w-4xl": !raw,
	});

	return <header className={headerClass}>{children}</header>;
};
