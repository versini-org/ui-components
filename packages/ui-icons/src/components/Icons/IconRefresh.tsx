/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: arrows-rotate.svg
 *
 * !Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-svgicon";

import type { IconsProps } from "./IconsTypes";

export const IconRefresh = ({
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
			title={title || "Refresh"}
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity={opacity}
				d="M80 396.9V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H125.6l17.2 17.1c62.5 62.5 163.8 62.5 226.3 0c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.5 87.5-229.3 87.5-316.7 0L80 396.9z"
			/>
			<path
				className="fa-primary"
				d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5z"
			/>
		</SvgIcon>
	);
};
