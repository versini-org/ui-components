/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: bookmark.svg
 *
 * !Font Awesome Pro 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-svgicon";

import type { IconsProps } from "./IconsTypes";

export const IconBookmark = ({
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
			defaultViewBox="0 0 384 512"
			size="size-5"
			viewBox={viewBox}
			className={className}
			title={title || "Bookmark"}
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity={opacity}
				d="M96 0l0 322.1c0 12.8 14.2 20.4 24.9 13.3L192 288l71.1 47.4c10.6 7.1 24.9-.5 24.9-13.3L288 0 96 0z"
			/>
			<path
				className="fa-primary"
				d="M0 487.7L0 48C0 21.5 21.5 0 48 0L96 0l0 322.1c0 12.8 14.2 20.4 24.9 13.3L192 288l71.1 47.4c10.6 7.1 24.9-.5 24.9-13.3L288 0l48 0c26.5 0 48 21.5 48 48l0 439.7c0 13.4-10.9 24.3-24.3 24.3c-5 0-9.9-1.5-14-4.4L192 400 38.3 507.6c-4.1 2.9-9 4.4-14 4.4C10.9 512 0 501.1 0 487.7z"
			/>
		</SvgIcon>
	);
};
