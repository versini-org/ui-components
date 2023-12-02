import React from "react";

import { truncate } from "../../common/utilities";
import type { ButtonLinkProps } from "./ButtonTypes";
import { getButtonClasses, TYPE_LINK } from "./utilities";

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
	(
		{
			children,
			kind = "dark",
			focus = "light",
			fullWidth = false,
			className,
			slim = false,
			size = "small",
			raw = false,
			noBorder = false,
			"aria-label": ariaLabel,
			link,
			target,
			maxLabelLength,

			...otherProps
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_LINK,
			kind,
			focus,
			fullWidth,
			disabled: false,
			raw,
			className,
			slim,
			size,
			noBorder,
		});

		const formattedLabel =
			maxLabelLength && typeof children === "string"
				? truncate(children, maxLabelLength)
				: null;

		const extraProps = {
			target,
			rel: target === "_blank" ? "noopener noreferrer" : undefined,
			...otherProps,
		};

		return (
			<>
				<a
					ref={ref}
					aria-label={ariaLabel || formattedLabel?.fullString}
					className={buttonClass}
					href={link}
					{...extraProps}
				>
					{formattedLabel?.truncatedString || children}
				</a>
			</>
		);
	},
);
