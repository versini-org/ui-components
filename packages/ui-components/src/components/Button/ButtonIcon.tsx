import React from "react";

import type { ButtonIconProps } from "./ButtonTypes";
import { getButtonClasses, TYPE_ICON } from "./utilities";

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
	(
		{
			children,
			disabled = false,
			mode = "dark",
			focus = "light",
			fullWidth = false,
			className,
			type = "button",
			raw = false,
			noBorder = false,
			"aria-label": ariaLabel,
			label,
			size = "medium",
			labelRight,
			labelLeft,
			spacing,

			...otherProps
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_ICON,
			mode,
			focus,
			fullWidth,
			disabled,
			raw,
			className,
			noBorder,
			size,
			labelRight,
			labelLeft,
			spacing,
		});

		return (
			<button
				ref={ref}
				className={buttonClass}
				disabled={disabled}
				type={type}
				aria-label={ariaLabel || label}
				{...otherProps}
			>
				{labelLeft && <span className="pr-2">{labelLeft}</span>}
				{children}
				{labelRight && <span className="pl-2">{labelRight}</span>}
			</button>
		);
	},
);

ButtonIcon.displayName = "ButtonIcon";
