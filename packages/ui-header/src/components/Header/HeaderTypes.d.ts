export type HeaderProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * The mode of Header. This will change the background color.
	 */
	mode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * Whether or not to render the Header component with colors.
	 * @default false
	 */
	noColors?: boolean;
	/**
	 * Whether or not to render the Header component with no styles.
	 * @default false
	 */
	raw?: boolean;
	/**
	 * Whether or not to render the Header component with sticky behavior.
	 * @default false
	 */
	sticky?: boolean;
	/**
	 * Whether or not to render the Header component with no border.
	 * @default false
	 */
	noBorder?: boolean;
	/**
	 * Whether or not to render the Header component with no margin.
	 * @default false
	 */
	noMargin?: boolean;
	/**
	 * Whether or not to render the Header component with no padding.
	 * @default false
	 */
	noPadding?: boolean;
};
