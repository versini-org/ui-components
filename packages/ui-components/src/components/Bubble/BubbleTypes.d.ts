export type BubbleProps = {
	children: React.ReactNode;
	kind?: "left" | "right";
	className?: string;
	footer?: {
		[key: string]: string | number | undefined;
	};
	rawFooter?: React.ReactNode;
};
