import React from "react";
import type { ButtonProps } from "../Button/ButtonTypes";

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
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
) => {
	typeof e?.currentTarget?.focus === "function" && e.currentTarget.focus();
	typeof onClick === "function" && onClick(e);
};

export const BaseButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(buttonProps: any, ref) => {
		const { onClick, ...otherProps } = buttonProps;
		return (
			<button
				ref={ref}
				onClick={(e) => {
					internalClick(e, onClick);
				}}
				{...otherProps}
			/>
		);
	},
);
