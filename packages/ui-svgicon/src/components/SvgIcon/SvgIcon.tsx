import clsx from "clsx";

import { getSpacing } from "@versini/ui-spacing";
import type { SvgIconTypes } from "@versini/ui-types";

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
}: SvgIconTypes.Props) => {
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
