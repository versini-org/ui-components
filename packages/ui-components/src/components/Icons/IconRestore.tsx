/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: window-restore.svg
 *
 * !Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
 *
 */

import { SvgIcon } from "../private/SvgIcon/SvgIcon";
import type { IconsProps } from "./IconsTypes";

export const IconRestore = ({
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
			title={title || "Restore"}
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity={opacity}
				d="M208 64H432c8.8 0 16 7.2 16 16V304c0 8.8-7.2 16-16 16H416v64h16c44.2 0 80-35.8 80-80V80c0-44.2-35.8-80-80-80H208c-44.2 0-80 35.8-80 80V96h64V80c0-8.8 7.2-16 16-16z"
			/>
			<path
				className="fa-primary"
				d="M64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H64zm32 64H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
			/>
		</SvgIcon>
	);
};
