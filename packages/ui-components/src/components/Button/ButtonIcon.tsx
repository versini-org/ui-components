import clsx from "clsx";
import React from "react";

import type { ButtonIconProps } from "./ButtonTypes";
import { TYPE_ICON, getButtonClasses } from "./utilities";

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
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
			onClick,

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

		/**
		 * Internal hack to handle Safari (iOS and desktop).
		 *
		 * Safari does not consider a <button> as a focusable
		 * element, therefore, when one <button> is clicked
		 * in Safari, we cannot rely on activeElement to figure
		 * out what triggered the action.
		 *
		 * This is where this hack comes in: we intercept a click,
		 * then we are "forcing" a focus, before actually executing
		 * the click handler. It has no impact on browsers that
		 * already apply the focus themselves, but it helps poor
		 * old cranky Safari.
		 *
		 */
		const internalClick = (
			e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		) => {
			typeof e?.currentTarget?.focus === "function" && e.currentTarget.focus();
			typeof onClick === "function" && onClick(e);
		};

		return (
			<button
				ref={ref}
				className={buttonClass}
				disabled={disabled}
				type={type}
				aria-label={ariaLabel || label}
				onClick={internalClick}
				{...otherProps}
			>
				{labelLeft && <span className="pr-2">{labelLeft}</span>}
				<div className={iconClass}>{children}</div>
				{labelRight && <span className="pl-2">{labelRight}</span>}
			</button>
		);
	},
);

ButtonIcon.displayName = "ButtonIcon";
