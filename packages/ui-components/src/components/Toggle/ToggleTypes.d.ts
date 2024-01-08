import type { SpacingType } from "../../common";

export type ToggleProps = {
	label: string;
	name: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
	labelHidden?: boolean;
	kind?: "dark" | "light";
	spacing?: SpacingType;
};
