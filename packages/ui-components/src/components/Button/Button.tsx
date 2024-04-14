import React from "react";

import type { ButtonProps } from "./ButtonTypes";
import { getButtonClasses, TYPE_BUTTON } from "./utilities";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			disabled = false,
			mode = "system",
			focusMode = "system",
			fullWidth = false,
			className,
			size = "medium",
			raw = false,
			noBorder = false,
			spacing,
			variant = "primary",
			noTruncate = false,

			...otherProps
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_BUTTON,
			mode,
			focusMode,
			fullWidth,
			disabled,
			raw,
			className,
			size,
			noBorder,
			spacing,
			variant,
			noTruncate,
		});

		return (
			<button
				ref={ref}
				className={buttonClass}
				disabled={disabled}
				{...otherProps}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";
