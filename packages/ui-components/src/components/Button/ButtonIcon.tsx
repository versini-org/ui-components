import "./button.css";

import React from "react";

import type { ButtonIconProps } from "./ButtonTypes";
import { getButtonClasses, TYPE_ICON } from "./utilities";

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
	(
		{
			children,
			onClick,
			disabled = false,
			kind = "dark",
			fullWidth = false,
			className,
			type = "button",
			raw = false,
			"aria-label": ariaLabel,
			label,
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_ICON,
			kind,
			fullWidth,
			disabled,
			raw,
			className,
		});

		return (
			<>
				<button
					ref={ref}
					className={buttonClass}
					onClick={onClick}
					disabled={disabled}
					type={type}
					aria-label={ariaLabel || label}
				>
					{children}
				</button>
			</>
		);
	},
);
