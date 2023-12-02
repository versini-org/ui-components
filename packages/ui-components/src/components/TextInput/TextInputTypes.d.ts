export type CommonTextInputProps = {
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
} & React.InputHTMLAttributes<HTMLInputElement>;

export type TextInputProps = {
	rightElement?: React.ReactElement;
} & CommonTextInputProps &
	React.InputHTMLAttributes<HTMLInputElement>;

export type TextInputMaskProps = {
	onMaskChange?: ({
		event,
		masked,
	}: {
		event: React.SyntheticEvent;
		masked: boolean;
	}) => void;
	onTextInputMaskBlur?: () => void;
} & CommonTextInputProps &
	React.InputHTMLAttributes<HTMLInputElement>;
