/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: arrow-up-left-from-circle.svg
 *
 * !Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
 *
 */

import { SvgIcon } from "../private/SvgIcon/SvgIcon";
import type { IconsProps } from "./IconsTypes";

export const IconBack = ({
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
			defaultClassName="h-5 w-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title={title || "Back"}
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity={opacity}
				d="M288.4 93.4c2.9-17.4 19.4-29.2 36.9-26.3C431.3 84.9 512 177 512 288c0 123.7-100.3 224-224 224C177 512 84.9 431.3 67.1 325.3c-2.9-17.4 8.8-33.9 26.3-36.9s33.9 8.8 36.9 26.3C142.9 390.4 208.8 448 288 448c88.4 0 160-71.6 160-160c0-79.2-57.6-145.1-133.3-157.8c-17.4-2.9-29.2-19.4-26.3-36.9z"
			/>
			<path
				className="fa-primary"
				d="M32 0H192c17.7 0 32 14.3 32 32s-14.3 32-32 32H109.3L342.6 297.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L64 109.3V192c0 17.7-14.3 32-32 32s-32-14.3-32-32V32C0 14.3 14.3 0 32 0z"
			/>
		</SvgIcon>
	);
};
