import clsx from "clsx";

import { MAIN_CLASSNAME } from "../../common/constants";
import type { MainProps } from "./MainTypes";

export const Main = ({ children, className, raw = false }: MainProps) => {
	const mainClass = clsx(
		MAIN_CLASSNAME,
		{
			"mt-2 flex w-full flex-col p-2 sm:mt-3 md:mx-auto md:max-w-4xl": !raw,
		},
		className,
	);

	return <main className={mainClass}>{children}</main>;
};
