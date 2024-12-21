export type TruncateProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
	/**
	 * The maximum length of the text.
	 * @default 200
	 */
	length?: number;
	/**
	 * The mode of Button. This will change the color of the Button.
	 * @default "system"
	 */
	mode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * The type of focus for the Button. This will change the color
	 * of the focus ring around the Button.
	 * @default "system"
	 */
	focusMode?: "dark" | "light" | "system" | "alt-system";
};
