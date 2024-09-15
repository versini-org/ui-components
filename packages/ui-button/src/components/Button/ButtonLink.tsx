import clsx from "clsx";
import React from "react";

import type { ButtonLinkProps } from "./ButtonTypes";
import { TYPE_LINK, getButtonClasses } from "./utilities";

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
	(
		{
			children,
			mode = "system",
			focusMode = "system",
			fullWidth = false,
			className,
			size = "small",
			raw = false,
			noBorder = false,
			target,
			noTruncate = false,
			noNewWindowIcon = false,
			spacing,

			...otherProps
		},
		ref,
	) => {
		const buttonClass = getButtonClasses({
			type: TYPE_LINK,
			mode,
			focusMode,
			fullWidth,
			disabled: false,
			raw,
			className,
			size,
			noBorder,
			spacing,
			noTruncate,
		});

		const newWindow = target === "_blank";

		const extraProps = {
			target,
			rel: newWindow ? "noopener noreferrer" : undefined,
			...otherProps,
		};

		const labelClass = clsx({
			truncate: !noTruncate,
			"basis-11/12": !noTruncate && newWindow,
		});

		return (
			<a ref={ref} className={buttonClass} {...extraProps}>
				<div role="text" className="flex items-center justify-center">
					<div className={labelClass}>
						{children}
						{newWindow && (
							<span className="sr-only">, opens in a new window</span>
						)}
					</div>
					{newWindow && !noNewWindowIcon && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							className="ml-1 size-4 basis-4"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								opacity=".4"
								d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"
							/>
							<path d="M312 144H160c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24z" />
						</svg>
					)}
				</div>
			</a>
		);
	},
);

ButtonLink.displayName = "ButtonLink";
