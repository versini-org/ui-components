import type { SpacingType } from "../../common";

export type BubbleProps = {
	children: React.ReactNode;
	kind?: "left" | "right";
	className?: string;
	footer?: {
		[key: string]: string | number | undefined | null;
	};
	rawFooter?: React.ReactNode;
	copyToClipboard?: boolean | string | ((text: any) => void);
	spacing?: SpacingType;
};
