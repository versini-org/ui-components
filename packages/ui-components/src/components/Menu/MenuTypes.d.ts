import type { Placement } from "@floating-ui/react";

export interface MenuProps {
	icon?: React.ReactNode;
	label?: string;
	children?: React.ReactNode;
	defaultPlacement?: Placement;
}

export interface MenuItemProps {
	label: string;
	disabled?: boolean;
	icon?: React.ReactNode;
}

export type MenuSeparatorProps = React.HTMLAttributes<HTMLDivElement>;
