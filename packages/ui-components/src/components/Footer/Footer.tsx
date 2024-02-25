import clsx from "clsx";

import { FOOTER_CLASSNAME } from "../../common/constants";
import { getSpacing } from "../../common/utilities";
import type { FooterProps } from "./FooterTypes";

export const Footer = ({
	className,
	kind = "dark",
	row1,
	row2,
	noMargins = false,
	noPaddings = false,
	spacing,
	raw = false,
}: FooterProps) => {
	const footerClass = clsx(FOOTER_CLASSNAME, className, getSpacing(spacing), {
		"text-center text-xs text-copy-dark": !raw && kind === "dark",
		"text-center text-xs text-copy-light": !raw && kind === "light",
		"text-center text-xs text-copy-dark dark:text-copy-light":
			!raw && kind === "system",
		"mb-[100px]": !noMargins && !noPaddings && !raw,
		"mt-0 flex w-full flex-col p-2 sm:mt-3 md:mx-auto md:max-w-4xl": !raw,
	});

	return (
		<footer className={footerClass}>
			{row1 && <div>{row1}</div>}
			{row2 && <div>{row2}</div>}
		</footer>
	);
};
