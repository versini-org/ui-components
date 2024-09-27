/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: magnifying-glass.svg
 *
 * !Font Awesome Pro 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-private";

import type { IconsProps } from "./IconsTypes";

export const IconSearch = ({
	className,
	viewBox,
	spacing,
	title,
	monotone,
	...rest
}: IconsProps) => {
	/* v8 ignore next 1 */
	const opacity = monotone ? "1" : "0.4";
	return (
		<SvgIcon
			defaultViewBox="0 0 512 512"
			defaultClassName="size-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title={title || "Search"}
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity={opacity}
				d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zm352 0A144 144 0 1 1 64 208a144 144 0 1 1 288 0z"
			/>
			<path
				className="fa-primary"
				d="M330.7 376L457.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7C363.3 348 348 363.3 330.7 376z"
			/>
		</SvgIcon>
	);
};
