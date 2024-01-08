import type { Placement } from "@floating-ui/react";

import type { SpacingType } from "../../common";

export interface MenuProps {
	icon?: React.ReactNode;
	label?: string;
	children?: React.ReactNode;
	defaultPlacement?: Placement;
	onOpenChange?: (open: boolean) => void;
	spacing?: SpacingType;
}

export interface MenuItemProps {
	label: string;
	disabled?: boolean;
	icon?: React.ReactNode;
}

export type MenuSeparatorProps = React.HTMLAttributes<HTMLDivElement>;
