import type { SpacingProps } from "@versini/ui-private/dist/utilities";

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
	 */
	noColors?: boolean;
	/**
	 * Whether or not to render the Header component with no styles.
	 * @default false
	 */
	raw?: boolean;
	/**
	 * Whether or not to render the Header component with sticky behavior.
	 */
	sticky?: boolean;
} & SpacingProps;
