import type { SpacingProps } from "../../common";

export type SpinnerProps = {
	/**
	 * The kind of spinner to render. This will change the color of the spinner.
	 */
	kind?: "dark" | "light" | "system" | "alt-system";
	/**
	 * A ref to the spinner element.
	 */
	spinnerRef?: React.RefObject<HTMLDivElement>;
	/**
	 * The type of spinner to render. This will change the layout of the spinner.
	 */
	type?: "circle" | "dots";
} & SpacingProps;
