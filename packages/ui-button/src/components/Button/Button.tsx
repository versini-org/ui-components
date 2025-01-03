import type { ButtonTypes } from "@versini/ui-types";
import React from "react";

import { BaseButton_private as BaseButton } from "../private/BaseButton";
import { TYPE_BUTTON, getButtonClasses } from "./utilities";

export const Button = React.forwardRef<HTMLButtonElement, ButtonTypes.Props>(
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
			variant = "primary",
			noTruncate = false,
			radius = "large",

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
			variant,
			noTruncate,
			radius,
		});

		return (
			<BaseButton
				ref={ref}
				className={buttonClass}
				disabled={disabled}
				{...otherProps}
			>
				{children}
			</BaseButton>
		);
	},
);

Button.displayName = "Button";
