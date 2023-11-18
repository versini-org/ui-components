import clsx from "clsx";

import type { FooterProps } from "./FooterTypes";

export const Footer = ({
	className,
	kind = "dark",
	row1,
	row2,
	noPaddings = false,
}: FooterProps) => {
	const footerClass = clsx("text-center text-xs", className, {
		"mb-[100px] ": !noPaddings,
		"text-copy-dark": kind === "dark",
		"text-copy-light": kind === "light",
	});

	return (
		<footer className={footerClass}>
			{row1 && <>{row1}</>}
			{row2 && <>{row2}</>}
		</footer>
	);
};
