import type { SpacingProps } from "../../common";

export type FooterProps = {
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * The type of Footer. This will change the color of the Footer.
	 */
	kind?: "dark" | "light";
	/**
	 * Whether or not to render the Footer with margins.
	 * @default false
	 */
	noMargins?: boolean;
	/**
	 * Deprecated. Please use `noMargins` instead.
	 * @default false
	 * @deprecated
	 */
	noPaddings?: boolean;
	/**
	 * Whether or not to render the Footer component with no styles.
	 * @default false
	 */
	raw?: boolean;
	/**
	 * The content to render in the first row.
	 */
	row1?: React.ReactNode;
	/**
	 * The content to render in the second row.
	 */
	row2?: React.ReactNode;
} & SpacingProps;
