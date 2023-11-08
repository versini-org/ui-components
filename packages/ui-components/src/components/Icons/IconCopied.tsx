import { SvgIcon } from "../private/SvgIcon/SvgIcon";
import { defaultIconSize } from "./constants";
import type { IconsProps } from "./IconsTypes";

export const IconCopied = ({
	className,
	viewBox,
	spacing,
	...rest
}: IconsProps) => {
	return (
		<SvgIcon
			defaultViewBox="0 0 24 24"
			defaultClassName={defaultIconSize}
			viewBox={viewBox}
			className={className}
			spacing={spacing}
			{...rest}
		>
			{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
			<path d="m10.933 13.519-2.226-2.226-1.414 1.414 3.774 3.774 5.702-6.84-1.538-1.282z"></path>
			<path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path>
		</SvgIcon>
	);
};
