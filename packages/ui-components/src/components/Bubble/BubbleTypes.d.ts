export type BubbleProps = {
	children: React.ReactNode;
	kind?: "left" | "right";
	className?: string;
	footer?: {
		[key: string]: string | number | undefined | null;
	};
	rawFooter?: React.ReactNode;
	copyToClipboard?: boolean | ((text: any) => void);
};
