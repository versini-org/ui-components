/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: arrow-down-arrow-up.svg
 *
 * !Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-svgicon";

import type { IconsProps } from "./IconsTypes";

export const IconSort = ({
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
			defaultViewBox="0 0 576 512"
			defaultClassName="size-5"
			viewBox={viewBox}
			className={className}
			title={title || "Sort"}
			{...rest}
		>
			<path
				opacity={opacity}
				d="M393.4 41.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L448 141.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V141.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96z"
			/>
			<path d="M137.4 470.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 370.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96z" />
		</SvgIcon>
	);
};
