export type ToggleProps = {
	label: string;
	name: string;
	checked: boolean;
	onChange: (checked: boolean) => void;
	labelHidden?: boolean;
	kind?: "dark" | "light";
};
