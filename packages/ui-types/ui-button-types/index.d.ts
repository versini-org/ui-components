import type { SpacingTypes } from "../ui-spacing-types";

type CommonButtonProps = {
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * The type of focus for the Button. This will change the color
	 * of the focus ring around the Button.
	 */
	focusMode?: "dark" | "light" | "system" | "alt-system";
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
	 * Whether or not to render the Button with a hack for Safari click.
	 * @default false
	 */
	noInternalClick?: boolean;
	/**
	 * Whether or not to render the Button with styles or not.
	 * @default false
	 */
	raw?: boolean;
	/**
	 * The size of the Button.
	 */
	size?: "small" | "medium" | "large";
} & SpacingTypes.Props;

declare namespace ButtonTypes {
	export type Props = {
		/**
		 * The text to render in the button.
		 */
		children: React.ReactNode;
		/**
		 * Whether or not the Button is disabled.
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * Whether or not to truncate the text automatically. The text will truncate
		 * only if this prop is not set AND the text is longer than the Component. For the
		 * text to be longer than the Component, the Component must have a fixed width, potentially
		 * set by the parent component or its own className prop.
		 * @default false
		 */
		noTruncate?: boolean;
		/**
		 * Handler to call when the Button is clicked.
		 */
		onClick?: React.MouseEventHandler<HTMLButtonElement>;
		/**
		 * The variant style of the Button.
		 */
		variant?: "primary" | "secondary" | "danger";
	} & CommonButtonProps &
		React.ButtonHTMLAttributes<HTMLButtonElement>;
}

declare namespace ButtonLinkTypes {
	export type Props = {
		/**
		 * Whether or not to add an icon indicating that the link
		 * opens in a new window.
		 * @default false
		 */
		noNewWindowIcon?: boolean;
		/**
		 * A string that is the result of parsing the href HTML attribute
		 * relative to the document, containing a valid URL of a linked resource.
		 */
		href?: string;
		/**
		 * A string that reflects the target HTML attribute, indicating where
		 * to display the linked resource.
		 * @default _self
		 */
		target?: "_blank" | "_self" | "_parent" | "_top";
	} & ButtonTypes.Props &
		React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

declare namespace ButtonIconTypes {
	export type Props = {
		/**
		 * The icon to render in the button.
		 */
		children: React.ReactNode;
		/**
		 * Cell content alignment.
		 * @default "center"
		 */
		align?: "left" | "right" | "center";
		/**
		 * The label to use as aria-label.
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
}

declare namespace ButtonSortTypes {
	export type Props = {
		/**
		 * Prop to signal if the Button is active.
		 */
		active?: boolean;
	} & ButtonIconTypes.Props &
		React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export { ButtonTypes, ButtonLinkTypes, ButtonIconTypes, ButtonSortTypes };
