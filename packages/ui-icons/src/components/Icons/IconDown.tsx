/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: arrow-down.svg
 *
 * !Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-private";

import type { IconsProps } from "./IconsTypes";

export const IconDown = ({
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
			defaultViewBox="0 0 384 512"
			defaultClassName="h-5 w-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title={title || "Down"}
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity={opacity}
				d="M160 370.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V370.7l-32 32-32-32z"
			/>
			<path
				className="fa-primary"
				d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
			/>
		</SvgIcon>
	);
};
