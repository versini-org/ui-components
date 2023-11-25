import clsx from "clsx";
import { useContext } from "react";

import {
	FLEXGRID_GAP_RATIO,
	FLEXGRID_ITEM_CLASSNAME,
} from "../../common/constants";
import { FlexgridContext } from "./FlexgridContext";
import type { FlexgridItemProps } from "./FlexgridTypes";
import { getBasis } from "./utilities";

/**
 * FlexgridItem is a child of Flexgrid. It is used to define the width of a
 * column in a Flexgrid. It can be used to span across multiple columns in a
 * Flexgrid by providing a number of columns or "auto" value to the `span` prop.
 */
export const FlexgridItem = ({
	children,
	className,
	span,
	...otherProps
}: FlexgridItemProps) => {
	const { columnGap, rowGap } = useContext(FlexgridContext);
	const cssRoot = {
		...getBasis(span),
		paddingLeft: columnGap * FLEXGRID_GAP_RATIO + "rem",
		paddingTop: rowGap * FLEXGRID_GAP_RATIO + "rem",
	};
	const flexgridItemClassName = clsx(
		className,
		FLEXGRID_ITEM_CLASSNAME,
		"box-border",
	);

	return (
		<div className={flexgridItemClassName} style={cssRoot} {...otherProps}>
			{children}
		</div>
	);
};
