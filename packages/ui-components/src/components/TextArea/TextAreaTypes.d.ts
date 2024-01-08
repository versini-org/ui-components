import type { SpacingType } from "../../common";

export type TextAreaProps = {
	label: string;
	name: string;
	labelId?: string;
	helperText?: string;
	helperTextOnFocus?: boolean;
	error?: boolean;
	focusKind?: "dark" | "light";
	borderKind?: "dark" | "light";
	errorKind?: "dark" | "light";
	raw?: boolean;
	noBorder?: boolean;
	textAreaClassName?: string;
	rightElement?: React.ReactElement;
	spacing?: SpacingType;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
