import React from "react";

import { truncate } from "../../common/utilities";
import type { ButtonLinkProps } from "./ButtonTypes";
import { getButtonClasses, TYPE_LINK } from "./utilities";

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
	(
		{
			children,
			kind = "dark",
			fullWidth = false,
			className,
			slim = false,
			raw = false,
			"aria-label": ariaLabel,
			link,
			target,
			maxLabelLength,
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_LINK,
			kind,
			fullWidth,
			disabled: false,
			raw,
			className,
			slim,
		});

		const formattedLabel =
			maxLabelLength && typeof children === "string"
				? truncate(children, maxLabelLength)
				: null;

		const extraProps = {
			target,
			rel: target === "_blank" ? "noopener noreferrer" : undefined,
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
