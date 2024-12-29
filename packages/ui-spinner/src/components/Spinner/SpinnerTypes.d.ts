export type SpinnerProps = {
	/**
	 * The class name to apply to the spinner.
	 */
	className?: string;
	/**
	 * The mode of spinner to render. This will change the color of the spinner.
	 */
	mode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * A ref to the spinner element.
	 */
	spinnerRef?: React.RefObject<HTMLDivElement>;
	/**
	 * The type of spinner to render. This will change the layout of the spinner.
	 */
	type?: "circle" | "dots";
};
