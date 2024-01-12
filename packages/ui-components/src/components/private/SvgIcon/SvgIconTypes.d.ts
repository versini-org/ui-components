import type { SpacingProps } from "../../../common";

export type SvgIconProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
	/**
	 * The default viewBox to use.
	 */
	defaultViewBox: string;
	/**
	 * The title to use for the icon. Each icon has a default title,
	 * but it can be overridden with this prop.
	 */
	title: string;
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * Whether or not the icon is decorative only (visual but not
	 * announced to assistive technologies).
	 * @default false
	 */
	decorative?: boolean;
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	defaultClassName?: string;
	/**
	 * Update the "fill" property of the SVG.
	 * @default "currentColor"
	 */
	fill?: string;
	/**
	 * The viewBox to use. If not provided, the default viewBox will be used.
	 */
	viewBox?: string;
} & SpacingProps;
