export interface MenuProps {
	icon?: React.ReactNode;
	label?: string;
	children?: React.ReactNode;
}

export interface MenuItemProps {
	label: string;
	disabled?: boolean;
}
