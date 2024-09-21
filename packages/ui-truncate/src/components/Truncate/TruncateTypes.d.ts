export type TruncateProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
	/**
	 * The maximum length of the text.
	 */
	length: number;
	/**
	 * The mode of Button. This will change the color of the Button.
	 */
	mode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * The type of focus for the Button. This will change the color
	 * of the focus ring around the Button.
	 */
	focusMode?: "dark" | "light" | "system" | "alt-system";
};
