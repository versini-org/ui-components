import clsx from "clsx";

import { getSpacing } from "../../common/utilities";
import type { SvgIconProps } from "./SvgIconTypes";

export const SvgIcon = ({
	children,
	fill,
	viewBox,
	className,
	defaultViewBox,
	defaultClassName,
	spacing,
	title,
	semantic = false,
	...rest
}: SvgIconProps) => {
	const generatedSpacing = getSpacing(spacing);
	const generatedClassName = clsx(
		generatedSpacing,
		className ? className : defaultClassName,
	);
	return (
		<>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={generatedClassName}
				viewBox={viewBox ? viewBox : defaultViewBox}
				fill={fill ? fill : "currentColor"}
				role="img"
				aria-hidden={!semantic}
				focusable={false}
				{...rest}
			>
				{children}
			</svg>
			{title && semantic && <span className="sr-only">{title}</span>}
		</>
	);
};
