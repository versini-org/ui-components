export type CommonButtonProps = {
	kind?: "dark" | "light";
	fullWidth?: boolean;
	className?: string;
	slim?: boolean;
	raw?: boolean;
};

export type ButtonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
} & CommonButtonProps & {
		children?: React.ReactNode;
	} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonIconProps = {
	label?: string;
	children: React.ReactNode;
} & CommonButtonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonLinkProps = {
	children?: React.ReactNode;
	link?: string;
	target?: string;
	maxLabelLength?: number;
} & ButtonProps &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;
