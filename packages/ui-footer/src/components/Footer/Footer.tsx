import { getSpacing } from "@versini/ui-private/dist/utilities";
import clsx from "clsx";

import { FOOTER_CLASSNAME } from "../../common/constants";
import type { FooterProps } from "./FooterTypes";

export const Footer = ({
	className,
	mode = "system",
	row1,
	row2,
	noMargins = false,
	spacing,
	raw = false,
}: FooterProps) => {
	const footerClass = clsx(FOOTER_CLASSNAME, className, getSpacing(spacing), {
		"text-copy-dark": !raw && mode === "dark",
		"text-copy-lighter": !raw && mode === "light",
		"text-copy-dark dark:text-copy-lighter": !raw && mode === "system",
		"text-copy-lighter dark:text-copy-dark": !raw && mode === "alt-system",

		"mb-[100px]": !noMargins && !raw,
		"mt-0 flex w-full flex-col p-2 text-center text-xs sm:mt-3 md:mx-auto md:max-w-4xl":
			!raw,
	});

	return (
		<footer className={footerClass}>
			{row1 && <div>{row1}</div>}
			{row2 && <div>{row2}</div>}
		</footer>
	);
};
