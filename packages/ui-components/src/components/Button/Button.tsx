import React from "react";

import type { ButtonProps } from "./ButtonTypes";
import { getButtonClasses, TYPE_BUTTON } from "./utilities";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			onClick,
			disabled = false,
			kind = "dark",
			focus = "light",
			fullWidth = false,
			className,
			slim = false,
			size = "medium",
			type = "button",
			raw = false,
			noBorder = false,
			"aria-label": ariaLabel,
			spacing,

			...otherProps
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_BUTTON,
			kind,
			focus,
			fullWidth,
			disabled,
			raw,
			className,
			slim,
			size,
			noBorder,
			spacing,
		});

		return (
			<button
				ref={ref}
				className={buttonClass}
				onClick={onClick}
				disabled={disabled}
				type={type}
				aria-label={ariaLabel}
				{...otherProps}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";
