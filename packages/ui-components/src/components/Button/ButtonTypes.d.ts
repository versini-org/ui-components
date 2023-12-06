export type CommonButtonProps = {
	children: React.ReactNode;
	kind?: "dark" | "light";
	focus?: "dark" | "light";
	fullWidth?: boolean;
	className?: string;
	raw?: boolean;
	noBorder?: boolean;
};

export type ButtonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	slim?: boolean;
	size?: "small" | "medium" | "large";
} & CommonButtonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonLinkProps = {
	children?: React.ReactNode;
	link?: string;
	target?: string;
	maxLabelLength?: number;
	slim?: boolean;
	size?: "small" | "medium" | "large";
	noTruncate?: boolean;
} & ButtonProps &
	React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonIconProps = {
	label?: string;
	children: React.ReactNode;
	size?: "small" | "medium" | "large";
} & CommonButtonProps &
	React.ButtonHTMLAttributes<HTMLButtonElement>;
