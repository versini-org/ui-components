import type { Placement } from "@floating-ui/react";

import type { SpacingProps } from "../../common";

export interface MenuProps extends SpacingProps {
	/**
	 * The children to render.
	 */
	children?: React.ReactNode;
	/**
	 * The default location of the popup.
	 * @default "bottom-start"
	 */
	defaultPlacement?: Placement;
	/**
	 * A React component of type Icon to be placed on the left of the label.
	 */
	icon?: React.ReactNode;
	/**
	 * The type of Button trigger. This will change the color of the Button.
	 */
	kind?: "dark" | "light" | "system";
	/**
	 * The label to use for the menu button.
	 */
	label?: string;
	/**
	 * Callback fired when the component is opened or closed.
	 * @param open whether or not the menu is open
	 */
	onOpenChange?: (open: boolean) => void;
}

export interface MenuItemProps {
	/**
	 * The label to use for the menu item.
	 */
	label: string;
	/**
	 * Whether or not the menu item is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * A React component of type Icon to be placed on the left of the label.
	 */
	icon?: React.ReactNode;
}

export type MenuSeparatorProps = React.HTMLAttributes<HTMLDivElement>;
