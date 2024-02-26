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
	 * Whether or not to render the Header component with no styles.
	 * @default false
	 */
	raw?: boolean;
} & SpacingProps;
