import { BubbleProps } from "./BubbleTypes";
import { getBubbleClasses } from "./utilities";

export const Bubble = ({
	children,
	kind = "left",
	className,
	footer,
	rawFooter,
}: BubbleProps) => {
	const bubbleClasses = getBubbleClasses({ kind, className });

	return (
		<div className={bubbleClasses.wrapper}>
			<div>
				<div className={bubbleClasses.main}>{children}</div>
				{footer &&
					Object.keys(footer).map((key) => {
						return footer[key] ? (
							<div key={`-${key}`}>
								<p className={bubbleClasses.footer}>
									{key}: {footer[key]}
								</p>
							</div>
						) : null;
					})}
				{rawFooter && rawFooter}
			</div>
		</div>
	);
};
