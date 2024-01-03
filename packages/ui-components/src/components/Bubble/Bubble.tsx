import { BubbleProps } from "./BubbleTypes";
import { getBubbleClasses } from "./utilities";

export const Bubble = ({ children, kind = "left", className }: BubbleProps) => {
	const bubbleClasses = getBubbleClasses({ kind, className });

	return (
		<div className={bubbleClasses.wrapper}>
			<div className={bubbleClasses.main}>{children}</div>
		</div>
	);
};
