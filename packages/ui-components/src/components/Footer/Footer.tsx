import clsx from "clsx";

import type { FooterProps } from "./FooterTypes";

export const Footer = ({
	className,
	row1,
	row2,
	noPaddings = false,
}: FooterProps) => {
	const footerClass = clsx("text-primary-300 text-center text-xs", className, {
		"mb-[100px] ": !noPaddings,
	});

	return (
		<footer className={footerClass}>
			{row1 && <>{row1}</>}
			{row2 && <>{row2}</>}
		</footer>
	);
};
