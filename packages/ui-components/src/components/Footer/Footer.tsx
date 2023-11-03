import "./footer.css";

import clsx from "clsx";

import type { FooterProps } from "./FooterTypes";

export const Footer = ({ className, row1, row2 }: FooterProps) => {
	const footerClass = clsx(
		"mb-[100px] text-center text-xs text-slate-300",
		className,
	);

	return (
		<footer className={footerClass}>
			{row1 && <>{row1}</>}
			{row2 && <>{row2}</>}
		</footer>
	);
};
