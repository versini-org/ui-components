/**
 * This file was automatically generated.
 * Please do not edit manually.
 *
 * To update this file, run `yarn build:icons`.
 *
 * Original name: circle-info.svg
 *
 * !Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
 *
 */

import { SvgIcon } from "@versini/ui-private";

import type { IconsProps } from "./IconsTypes";

export const IconInfo = ({
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
			defaultViewBox="0 0 512 512"
			defaultClassName="size-5"
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			title={title || "Info"}
			{...rest}
		>
			<path
				className="fa-secondary"
				opacity="0.4"
				d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
			/>
			<path
				className="fa-primary"
				d="M256 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM192 248c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h24V272H216c-13.3 0-24-10.7-24-24z"
			/>
		</SvgIcon>
	);
};
