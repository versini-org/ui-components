/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: key.svg
 *
 * !Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-svgicon";

import type { IconsProps } from "./IconsTypes";

export const IconKey = ({
	className,
	viewBox,
	title,
	monotone,
	...rest
}: IconsProps) => {
	/* v8 ignore next 1 */
	const opacity = monotone ? "1" : "0.4";
	return (
		<SvgIcon
			defaultViewBox="0 0 512 512"
			size="size-5"
			viewBox={viewBox}
			className={className}
			title={title || "Key"}
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity={opacity}
				d="M168.3 229.7L282.3 343.7l0 0s0 0 0 0L249 377c-4.5 4.5-10.6 7-17 7H192v40c0 13.3-10.7 24-24 24H128v40c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V408c0-6.4 2.5-12.5 7-17L168.3 229.7s0 0 0 0l0 0z"
			/>
			<path
				className="fa-primary"
				d="M168.3 229.7L282.3 343.7l0 0c16.9 5.4 35 8.3 53.7 8.3c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7l0 0zM336 136a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"
			/>
		</SvgIcon>
	);
};
