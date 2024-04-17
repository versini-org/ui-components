/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: brightness.svg
 *
 * !Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-private";

import type { IconsProps } from "./IconsTypes";

export const IconBrightness = ({
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
			defaultClassName="size-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title={title || "Brightness"}
			{...rest}
		>
			<path
				opacity={opacity}
				d="M224 80c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V80zM32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32H80c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zm400 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H432zM256 512c17.7 0 32-14.3 32-32V432c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 17.7 14.3 32 32 32zM73.4 438.6c12.5 12.5 32.8 12.5 45.3 0l32-32c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-32 32c-12.5 12.5-12.5 32.8 0 45.3zm288-333.3c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l32-32c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-32 32zm77.3 333.3c12.5-12.5 12.5-32.8 0-45.3l-32-32c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l32 32c12.5 12.5 32.8 12.5 45.3 0zm-333.3-288c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-32-32c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l32 32z"
			/>
			<path d="M160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
		</SvgIcon>
	);
};
