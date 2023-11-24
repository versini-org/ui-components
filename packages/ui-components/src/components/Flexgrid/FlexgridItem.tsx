import clsx from "clsx";
import { useContext } from "react";

import {
	FLEXGRID_GAP_RATIO,
	FLEXGRID_ITEM_CLASSNAME,
	FLEXGRID_MAX_COLUMNS,
} from "../../common/constants";
import { FlexgridContext } from "./FlexgridContext";
import type { FlexgridItemProps } from "./FlexgridTypes";

function getBasis(span?: number | string) {
	if (!span) {
		return {
			flexBasis: "auto",
		};
	}

	if (span === "auto") {
		return {
			flexBasis: "auto",
			flexGrow: 1,
			maxWidth: "100%",
		};
	}

	if (typeof span === "number") {
		const basis = `${(span * 100) / FLEXGRID_MAX_COLUMNS}%`;
		return {
			flexBasis: `${basis}`,
			maxWidth: `${basis}`,
		};
	}
}

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
	const context = useContext(FlexgridContext);
	const flexBasis = getBasis(span);

	const cssRoot = {
		...flexBasis,
		paddingLeft: context.columnGap * FLEXGRID_GAP_RATIO + "rem",
		paddingTop: context.rowGap * FLEXGRID_GAP_RATIO + "rem",
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
