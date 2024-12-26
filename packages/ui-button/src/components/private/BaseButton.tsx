import type { ButtonTypes } from "@versini/ui-types";
import React from "react";

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
/* c8 ignore start */
const internalClick = (
	e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	noInternalClick: boolean,
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
) => {
	if (
		!noInternalClick &&
		(!document.activeElement || document.activeElement !== e.currentTarget)
	) {
		typeof e?.currentTarget?.focus === "function" && e.currentTarget.focus();
	}

	typeof onClick === "function" && onClick(e);
};
/* c8 ignore end */

export const BaseButton_private = React.forwardRef<
	HTMLButtonElement,
	ButtonTypes.Props
>((buttonProps: any, ref) => {
	const { onClick, noInternalClick = false, ...otherProps } = buttonProps;
	return (
		<button
			ref={ref}
			onClick={(e) => {
				internalClick(e, noInternalClick, onClick);
			}}
			{...otherProps}
		/>
	);
});

BaseButton_private.displayName = "BaseButton";
