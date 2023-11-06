export type ButtonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	kind?: "dark" | "light";
	fullWidth?: boolean;
	className?: string;
	slim?: boolean;
	type?: "button" | "submit" | "reset";
	raw?: boolean;
} & {
	children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonIconProps = {
	label?: string;
	children: React.ReactNode;
} & ButtonProps;

export type ButtonLinkProps = {
	children?: React.ReactNode;
	link?: string;
	target?: string;
	maxLabelLength?: number;
} & ButtonProps;
