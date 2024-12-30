/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: lock-keyhole.svg
 *
 * !Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-svgicon";

import type { IconsProps } from "./IconsTypes";

export const IconLocked = ({
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
			defaultViewBox="0 0 448 512"
			size="size-5"
			viewBox={viewBox}
			className={className}
			title={title || "Locked"}
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity={opacity}
				d="M224 64c-44.2 0-80 35.8-80 80v48H80V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48H304V144c0-44.2-35.8-80-80-80z"
			/>
			<path
				className="fa-primary"
				d="M64 192c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H64zM256 320v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32s32 14.3 32 32z"
			/>
		</SvgIcon>
	);
};
