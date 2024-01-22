import type { SpacingProps } from "../../common";

export type CommonTextInputProps = {
	/**
	 * The label of the TextInput.
	 */
	label: string;
	/**
	 * The name of the TextInput.
	 */
	name: string;

	/**
	 * The type of border for the TextInput. This will change the color
	 * of the border of the TextInput.
	 */
	borderKind?: "dark" | "light";
	/**
	 * Whether or not the TextInput is in error state.
	 * @default false
	 */
	error?: boolean;
	/**
	 * The type of error for the TextInput. This will change the color
	 * of the error of the TextInput.
	 */
	errorKind?: "dark" | "light";
	/**
	 * The type of focus for the TextInput. This will change the color
	 * of the focus ring around the TextInput.
	 */
	focusKind?: "dark" | "light";
	/**
	 * Text to add to the bottom of the TextInput.
	 */
	helperText?: string;
	/**
	 * CSS class(es) to add to the actual textarea element.
	 */
	inputClassName?: string;
	/**
	 * Id to use for the TextInput label.
	 */
	labelId?: string;
	/**
	 * Whether or not the TextInput has a border.
	 * @default false
	 */
	noBorder?: boolean;
	/**
	 * Whether or not to render the TextInput with styles or not.
	 * @default false
	 */
	raw?: boolean;
} & SpacingProps &
	React.InputHTMLAttributes<HTMLInputElement>;

export type TextInputProps = {
	/**
	 * This prop allows you to pass in a React element to render on the right
	 * side of the TextInput. This is useful for adding icons or actionable
	 * elements, such a Button.
	 */
	rightElement?: React.ReactElement;
	/**
	 * Whether or not the TextInput is simple. A simple TextInput is smaller
	 * in height and does not have helper text support. If the prop "helperText"
	 * is passed in, it will be ignored.
	 */
	simple?: boolean;
} & CommonTextInputProps &
	React.InputHTMLAttributes<HTMLInputElement>;

export type TextInputMaskProps = {
	/**
	 * Callback fired when the value changes.
	 * @param masked whether or not the value is masked
	 * @param e the synthetic event
	 */
	onMaskChange?: ({
		e,
		masked,
	}: {
		e: React.SyntheticEvent;
		masked: boolean;
	}) => void;
	/**
	 * Callback fired when the user blurs out of the TextInputMask.
	 */
	onTextInputMaskBlur?: () => void;
} & CommonTextInputProps &
	React.InputHTMLAttributes<HTMLInputElement>;
