import clsx from "clsx";

import { getSpacing } from "@versini/ui-private/dist/utilities";
import React from "react";
import { FLEXGRID_CLASSNAME, FLEXGRID_GAP_RATIO } from "../../common/constants";
import { FlexgridContext } from "./FlexgridContext";
import type { FlexgridProps } from "./FlexgridTypes";

export const Flexgrid = ({
	children,
	className,
	columnGap = 1,
	rowGap = 0,
	height = "auto",
	width = "auto",

	direction = "row",
	alignHorizontal = "normal",
	alignVertical = "normal",

	spacing,

	...otherProps
}: FlexgridProps) => {
	const cssRoot = {
		flexDirection: direction,
		justifyContent: alignHorizontal,
		alignItems: alignVertical,
		height,
		width,
		/**
		 * Trick to account for the extra space taken
		 * by the columnGap and rowGap that will be applied
		 * to all FlexgridItems (see context and paddings).
		 */
		marginLeft: columnGap * -1 * FLEXGRID_GAP_RATIO + "rem",
		marginTop: rowGap * -1 * FLEXGRID_GAP_RATIO + "rem",
	};

	const flexgridClassName = clsx(
		FLEXGRID_CLASSNAME,
		className,
		"box-border flex flex-wrap",
	);

	const context = { columnGap, rowGap };
	const Component = spacing ? "div" : React.Fragment;

	return (
		<Component {...(spacing ? { className: getSpacing(spacing) } : {})}>
			<div className={flexgridClassName} style={cssRoot} {...otherProps}>
				<FlexgridContext.Provider value={context}>
					{children}
				</FlexgridContext.Provider>
			</div>
		</Component>
	);
};

export default Flexgrid;
