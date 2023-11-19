export type TextInputProps = {
	label: string;
	name: string;
	labelId?: string;
	helperText?: string;
	error?: boolean;
	kind?: "dark" | "light";
	focus?: "dark" | "light";
} & React.InputHTMLAttributes<HTMLInputElement>;
