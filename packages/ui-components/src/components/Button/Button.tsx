import React from "react";

import type { ButtonProps } from "./ButtonTypes";
import { TYPE_BUTTON, getButtonClasses } from "./utilities";

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
			onClick,

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
				onClick={internalClick}
				{...otherProps}
			>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";
