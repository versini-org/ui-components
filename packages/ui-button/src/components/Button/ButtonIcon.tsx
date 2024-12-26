import type { ButtonIconTypes } from "@versini/ui-types";
import clsx from "clsx";
import React from "react";

import { BaseButton_private as BaseButton } from "../private/BaseButton";
import { TYPE_ICON, getButtonClasses } from "./utilities";

export const ButtonIcon = React.forwardRef<
	HTMLButtonElement,
	ButtonIconTypes.Props
>(
	(
		{
			children,
			disabled = false,
			mode = "system",
			focusMode = "system",
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
			noBackground = false,
			align = "center",

			...otherProps
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_ICON,
			mode,
			focusMode,
			fullWidth,
			disabled,
			raw,
			className,
			noBorder,
			size,
			labelRight,
			labelLeft,
			spacing,
			noBackground,
			align,
		});
		const iconClass = clsx({
			"text-copy-accent-dark": mode === "light" && !raw,
			"text-copy-light": mode === "dark" && !raw,
			"text-copy-accent-dark dark:text-copy-light":
				mode === "alt-system" && !raw,
			"text-copy-light dark:text-copy-accent-dark": mode === "system" && !raw,
		});

		return (
			<BaseButton
				ref={ref}
				className={buttonClass}
				disabled={disabled}
				type={type}
				aria-label={ariaLabel || label}
				{...otherProps}
			>
				{labelLeft && <span className="pr-2">{labelLeft}</span>}
				<div className={iconClass}>{children}</div>
				{labelRight && <span className="pl-2">{labelRight}</span>}
			</BaseButton>
		);
	},
);

ButtonIcon.displayName = "ButtonIcon";
