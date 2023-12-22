import { TYPE_MESSAGEBOX, TYPE_PANEL } from "./utilities";

export type PanelProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title: string;
	children: React.ReactNode;
	footer?: React.ReactNode;
	borderKind?: "dark" | "light";
	kind?: typeof TYPE_PANEL | typeof TYPE_MESSAGEBOX;
};
