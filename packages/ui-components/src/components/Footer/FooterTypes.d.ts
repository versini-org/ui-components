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
	 * Whether or not to render the Footer with paddings.
	 * @default false
	 */
	noPaddings?: boolean;
	/**
	 * The content to render in the first row.
	 */
	row1?: React.ReactNode;
	/**
	 * The content to render in the second row.
	 */
	row2?: React.ReactNode;
} & SpacingProps;
