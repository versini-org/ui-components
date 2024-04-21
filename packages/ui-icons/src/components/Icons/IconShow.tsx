/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: eye.svg
 *
 * !Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-private";

import type { IconsProps } from "./IconsTypes";

export const IconShow = ({
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
			defaultViewBox="0 0 576 512"
			defaultClassName="size-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title={title || "Show"}
			{...rest}
		>
			<path
				opacity={opacity}
				d="M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 400a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
			/>
			<path d="M224 256c35.3 0 64-28.7 64-64c0-7.1-1.2-13.9-3.3-20.3c-1.8-5.5 1.6-11.9 7.4-11.7c40.8 1.7 77.5 29.6 88.6 71.1c13.7 51.2-16.7 103.9-67.9 117.6s-103.9-16.7-117.6-67.9c-1.9-6.9-2.9-13.9-3.2-20.7c-.3-5.8 6.1-9.2 11.7-7.4c6.4 2.1 13.2 3.3 20.3 3.3z" />
		</SvgIcon>
	);
};
