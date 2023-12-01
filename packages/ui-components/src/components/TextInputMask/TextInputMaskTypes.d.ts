export type TextInputMaskProps = {
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

	onMaskChange?: ({
		event,
		masked,
	}: {
		event: React.SyntheticEvent;
		masked: boolean;
	}) => void;
	onTextInputMaskBlur?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
