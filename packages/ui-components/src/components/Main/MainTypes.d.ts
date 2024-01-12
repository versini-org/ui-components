import type { SpacingProps } from "../../common";

export type MainProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * Whether or not to render the Main component with no styles.
	 * @default false
	 */
	raw?: boolean;
} & SpacingProps;
