export type FlexgridProps = {
	/**
	 * Children of the Flexgrid (FlexgridItem(s) or any other nodes).
	 */
	children: React.ReactNode;

	/**
	 * Equivalent to "justify-content" in flexbox, this prop defines
	 * the alignment along the main axis (horizontal).
	 */
	alignHorizontal?:
		| "normal"
		| "flex-start"
		| "center"
		| "flex-end"
		| "space-between"
		| "space-around"
		| "space-evenly";

	/**
	 * Equivalent to "align-items" in flexbox, this prop defines
	 * the alignment along the cross axis (vertical).
	 */
	alignVertical?:
		| "normal"
		| "flex-start"
		| "center"
		| "flex-end"
		| "stretch"
		| "baseline";

	/**
	 * The class name of the Flexgrid.
	 * It follows the [CSS class name property](https://developer.mozilla.org/en-US/docs/Web/CSS/class).
	 */
	className?: string;

	/**
	 * Width of the gutters between the columns.
	 * See the “Customization -> Spacing” section for
	 * more information about this unit.
	 */
	columnGap?: number;

	/**
	 * Equivalent to "flex-direction" in flexbox, this prop
	 * establishes the main-axis, thus defining the direction
	 * flex items are placed in the flex container. Flexbox is
	 * (aside from optional wrapping) a single-direction layout
	 * concept. Think of flex items as primarily laying out
	 * either in horizontal rows or vertical columns.
	 */
	direction?: "row" | "row-reverse" | "column" | "column-reverse";

	/**
	 * The height of the Flexgrid.
	 * It follows the [CSS height property](https://developer.mozilla.org/en-US/docs/Web/CSS/height).
	 */
	height?: string;

	/**
	 * Width of the gutters between the rows.
	 * See the “Customization -> Spacing” section for
	 * more information about this unit.
	 */
	rowGap?: number;

	/**
	 * The width of the Flexgrid.
	 * It follows the [CSS width property](https://developer.mozilla.org/en-US/docs/Web/CSS/width).
	 */
	width?: string;
};

export type FlexgridItemProps = {
	/** Children of the FlexgridItem. */
	children?: React.ReactNode;

	/** Classname to apply to the FlexgridItem. */
	className?: string;

	/** The item will span across the provided number of grid tracks. */
	span?: number | "auto";
};
