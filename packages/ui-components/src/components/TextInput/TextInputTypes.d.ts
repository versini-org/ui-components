export type TextInputProps = {
	label: string;
	name: string;
	labelId?: string;
	helperText?: string;
	error?: boolean;
	focusKind?: "dark" | "light";
	borderKind?: "dark" | "light";
	errorKind?: "dark" | "light";
	raw?: boolean;
	noBorder?: boolean;
	inputClassName?: string;
	rightElement?: React.ReactElement;
} & React.InputHTMLAttributes<HTMLInputElement>;
