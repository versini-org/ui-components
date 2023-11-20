export type TextInputProps = {
	label: string;
	name: string;
	labelId?: string;
	helperText?: string;
	error?: boolean;
	kind?: "dark" | "light";
	focus?: "dark" | "light";
	border?: "dark" | "light";
	raw?: boolean;
	fullWidth?: boolean;
	noBorder?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
