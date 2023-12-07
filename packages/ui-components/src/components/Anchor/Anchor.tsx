import React from "react";

import { ButtonLink } from "..";
import type { AnchorProps } from "./AnchorTypes";

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
	({ ...otherProps }, ref) => {
		return <ButtonLink ref={ref} {...otherProps} />;
	},
);
