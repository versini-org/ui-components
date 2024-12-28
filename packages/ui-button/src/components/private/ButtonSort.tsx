import type { ButtonSortTypes } from "@versini/ui-types";
import clsx from "clsx";
import React from "react";

import { TYPE_ICON, getButtonClasses } from "../Button/utilities";
import { BaseButton_private as BaseButton } from "./BaseButton";

export const ButtonSort_private = React.forwardRef<
	HTMLButtonElement,
	ButtonSortTypes.Props
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
			active = false,
			radius = "large",

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
			radius,
		});
		const iconClass = clsx({
			"text-copy-accent-dark": mode === "light" && !raw,
			"text-copy-light": mode === "dark" && !raw,
			"text-copy-accent-dark dark:text-copy-light":
				mode === "alt-system" && !raw,
			"text-copy-light dark:text-copy-accent-dark": mode === "system" && !raw,
		});

		const activeClass = active
			? clsx(
					"relative",
					"focus-within:static",
					"focus-within:after:border-transparent",
					"after:absolute",
					"after:content-['']",
					"after:border-b-2",
					"after:bottom-[-4px]",
					"after:left-0",
					"after:right-0",
					{
						"after:border-table-dark": mode === "dark",
						"after:border-table-light": mode === "light",
						"after:border-table-dark dark:after:border-table-light":
							mode === "system",
						"after:border-table-light dark:after:border-table-dark":
							mode === "alt-system",
					},
				)
			: "";
		return (
			<div className={activeClass}>
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
			</div>
		);
	},
);

ButtonSort_private.displayName = "ButtonSort";
