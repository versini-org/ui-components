import { SvgIcon } from "../private/SvgIcon/SvgIcon";
import { defaultIconSize } from "./constants";
import type { IconsProps } from "./IconsTypes";

export const IconCopy = ({ className, viewBox }: IconsProps) => {
	return (
		<SvgIcon
			defaultViewBox="0 0 24 24"
			defaultClassName={defaultIconSize}
			viewBox={viewBox}
			className={className}
		>
			{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
			<path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
			<path d="M6 12h6v2H6zm0 4h6v2H6z"></path>
		</SvgIcon>
	);
};
