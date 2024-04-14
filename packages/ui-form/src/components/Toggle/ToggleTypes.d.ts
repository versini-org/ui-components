import type { SpacingProps } from "@versini/ui-private/dist/utilities";

export type ToggleProps = {
	/**
	 * The label to use for the component.
	 */
	label: string;
	/**
	 * The name to use for the component.
	 */
	name: string;
	/**
	 * Callback fired when the component is activated.
	 * @param checked whether or not the component is checked
	 */
	onChange: (checked: boolean) => void;
	/**
	 * Whether or not the component is checked.
	 * @default false
	 */
	checked?: boolean;
	/**
	 * The type of focus for the Button. This will change the color
	 * of the focus ring around the Button.
	 */
	focusMode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * Whether or not to render the label.
	 * @default false
	 */
	labelHidden?: boolean;
	/**
	 * The type of Toggle. This will change the color of the Toggle.
	 */
	mode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * Whether or not to render the Toggle with a border.
	 * @default false
	 */
	noBorder?: boolean;
} & SpacingProps;
