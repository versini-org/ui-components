export type TextAreaProps = {
	/**
	 * The label of the TextArea.
	 */
	label: string;
	/**
	 * The name of the TextArea.
	 */
	name: string;
	/**
	 * Whether or not the TextArea is in error state.
	 * @default false
	 */
	error?: boolean;
	/**
	 * The type of focus for the TextArea. This will change the color
	 * of the focus ring around the TextArea.
	 */
	focusMode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * Text to add to the bottom of the TextArea.
	 */
	helperText?: string;
	/**
	 * Whether or not to show the helper text ONLY when the TextArea is focused.
	 * @default false
	 */
	helperTextOnFocus?: boolean;
	/**
	 * Id to use for the TextArea label.
	 */
	labelId?: string;
	/**
	 * Whether or not the TextArea has a border.
	 * @default false
	 */
	/**
	 * The mode of TextInput. This will change the color of the TextInput.
	 */
	mode?: "dark" | "light" | "system" | "alt-system";
	noBorder?: boolean;
	/**
	 * Whether or not to render the TextArea with styles or not.
	 * @default false
	 */
	raw?: boolean;
	/**
	 * This prop allows you to pass in a React element to render on the right
	 * side of the TextArea. This is useful for adding icons or actionable
	 * elements, such a Button.
	 */
	rightElement?: React.ReactElement;
	/**
	 * This prop allows you to pass in a React element to render on the left
	 * side of the TextArea. This is useful for adding icons or actionable
	 * elements, such a Button.
	 */
	leftElement?: React.ReactElement;
	/**
	 * CSS class(es) to add to the actual textarea element.
	 */
	textAreaClassName?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
