import type { Placement } from "@floating-ui/react";
import type { SpacingTypes } from "@versini/ui-types";
import React from "react";

export type MenuProps = {
	/**
	 * The component to use to open the menu, e.g. a ButtonIcon, a Button, etc.
	 */
	trigger: React.ReactNode;
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
	 * The type of focus for the Button. This will change the color
	 * of the focus ring around the Button.
	 */
	focusMode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * The type of Button trigger. This will change the color of the Button.
	 */
	mode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * The label to use for the menu button.
	 */
	label?: string;
	/**
	 * Callback fired when the component is opened or closed.
	 * @param open whether or not the menu is open
	 */
	onOpenChange?: (open: boolean) => void;
} & SpacingTypes.Props;

export type MenuItemProps = {
	/**
	 * The label to use for the menu item.
	 */
	label?: string;
	/**
	 * Whether or not the menu item is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * A React component of type Icon to be placed on the left of the label.
	 */
	icon?: React.ReactNode;
	/**
	 * Disable internal menu item behavior (click, focus, etc.).
	 */
	raw?: boolean;
	/**
	 * Whether or not the menu should close when the menu item is selected.
	 */
	ignoreClick?: boolean;
};

export type MenuSeparatorProps = React.HTMLAttributes<HTMLDivElement>;
