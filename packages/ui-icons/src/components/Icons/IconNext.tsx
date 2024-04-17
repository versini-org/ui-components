/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: arrow-right.svg
 *
 * !Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-private";

import type { IconsProps } from "./IconsTypes";

export const IconNext = ({
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
			defaultViewBox="0 0 448 512"
			defaultClassName="size-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title={title || "Next"}
			{...rest}
		>
			<path
				opacity={opacity}
				d="M338.7 224L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0 32-32-32-32z"
			/>
			<path d="M438.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L370.7 256 233.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
		</SvgIcon>
	);
};
