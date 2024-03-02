import type { SpacingProps } from "@versini/ui-private/dist/utilities";

export type CommonButtonProps = {
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * The type of focus for the Button. This will change the color
	 * of the focus ring around the Button.
	 */
	focus?: "dark" | "light" | "system" | "alt-system";
	/**
	 * Whether or not the Button is full width.
	 * @default false
	 */
	fullWidth?: boolean;
	/**
	 * The mode of Button. This will change the color of the Button.
	 */
	mode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * Whether or not to render the Button with a border.
	 * @default false
	 */
	noBorder?: boolean;
	/**
	 * Whether or not to render the Button with styles or not.
	 * @default false
	 */
	raw?: boolean;
	/**
	 * The size of the Button.
	 */
	size?: "small" | "medium" | "large";
} & SpacingProps;

export type ButtonProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
	/**
	 * Whether or not the Button is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Handler to call when the Button is clicked.
	 */
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & CommonButtonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonLinkProps = {
	/**
	 * The children to render.
	 */
	children?: React.ReactNode;
	/**
	 * The URL to link to.
	 */
	link?: string;
	/**
	 * The maximum length of the label. If the label is longer than
	 * this value, it will be truncated.
	 */
	maxLabelLength?: number;
	/**
	 * Whether or not to truncate the label automatically.
	 * @default false
	 */
	noTruncate?: boolean;
} & ButtonProps &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonIconProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
	/**
	 * The label to show next to the icon.
	 */
	label?: string;
	/**
	 * The label to show to the left of the icon.
	 */
	labelLeft?: string;
	/**
	 * The label to show to the right of the icon.
	 */
	labelRight?: string;
	/**
	 * Option to make the Button transparent.
	 */
	noBackground?: boolean;
} & CommonButtonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement>;
