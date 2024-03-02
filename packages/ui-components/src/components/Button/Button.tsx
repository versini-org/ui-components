import React from "react";

import type { ButtonProps } from "./ButtonTypes";
import { getButtonClasses, TYPE_BUTTON } from "./utilities";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			onClick,
			disabled = false,
			mode = "system",
			focus = "system",
			fullWidth = false,
			className,
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
			mode,
			focus,
			fullWidth,
			disabled,
			raw,
			className,
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
