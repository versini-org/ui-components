/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: ellipsis.svg
 *
 * !Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.
 *
 */

import { SvgIcon } from "../private/SvgIcon/SvgIcon";
import type { IconsProps } from "./IconsTypes";

export const IconSettings = ({
	className,
	viewBox,
	spacing,
	title,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	monotone,
	...rest
}: IconsProps) => {
	return (
		<SvgIcon
			defaultViewBox="0 0 448 512"
			defaultClassName="h-5 w-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title={title || "Settings"}
			{...rest}
		>
			<path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
		</SvgIcon>
	);
};
