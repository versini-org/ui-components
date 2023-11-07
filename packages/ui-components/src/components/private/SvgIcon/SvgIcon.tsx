import type { SvgIconProps } from "./SvgIconTypes";

export const SvgIcon = ({
	children,
	fill,
	viewBox,
	className,
	defaultViewBox,
	defaultClassName,
	...rest
}: SvgIconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className ? className : defaultClassName}
			viewBox={viewBox ? viewBox : defaultViewBox}
			fill={fill ? fill : "currentColor"}
			role="img"
			aria-hidden
			focusable={false}
			{...rest}
		>
			{children}
		</svg>
	);
};
