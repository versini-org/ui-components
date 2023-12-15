import clsx from "clsx";

import { FOOTER_CLASSNAME } from "../../common/constants";
import type { FooterProps } from "./FooterTypes";

export const Footer = ({
	className,
	kind = "dark",
	row1,
	row2,
	noPaddings = false,
}: FooterProps) => {
	const footerClass = clsx(
		FOOTER_CLASSNAME,
		`text-center text-xs text-copy-${kind}`,
		className,
		{
			"mb-[100px]": !noPaddings,
		},
	);

	return (
		<footer className={footerClass}>
			{row1 && <div>{row1}</div>}
			{row2 && <div>{row2}</div>}
		</footer>
	);
};
