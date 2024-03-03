import type { SpacingProps } from "@versini/ui-private/dist/utilities";

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
	 * Whether or not the TextInput is in error state.
	 * @default false
	 */
	error?: boolean;
	/**
	 * The type of focus for the TextInput. This will change the color
	 * of the focus ring around the TextInput.
	 */
	focusMode?: "dark" | "light" | "system" | "alt-system";
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
	 * The mode of TextInput. This will change the color of the TextInput.
	 */
	mode?: "dark" | "light" | "system" | "alt-system";
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
} & CommonTextInputProps &
	React.InputHTMLAttributes<HTMLInputElement>;

export type TextInputMaskProps = {
	/**
	 * This prop allows you to pass in a React element to render on the right
	 * side of the TextInput. This is useful for adding icons or actionable
	 * elements, such a Button.
	 */
	rightElement: React.ReactElement;
	/**
	 * Callback fired when the value changes.
	 * @param masked whether or not the value is masked
	 */
	onMaskChange?: (masked: boolean) => void;
	/**
	 * Callback fired when the user blurs out of the TextInputMask.
	 */
	onTextInputMaskBlur?: () => void;
} & CommonTextInputProps &
	React.InputHTMLAttributes<HTMLInputElement>;
