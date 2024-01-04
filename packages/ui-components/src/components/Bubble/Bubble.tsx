import { useEffect, useState } from "react";

import { ButtonIcon, IconCopied, IconCopy } from "..";
import { BubbleProps } from "./BubbleTypes";
import { getBubbleClasses } from "./utilities";

export const Bubble = ({
	children,
	kind = "left",
	className,
	footer,
	rawFooter,
	copyToClipboard,
}: BubbleProps) => {
	const [copied, setCopied] = useState(false);
	const bubbleClasses = getBubbleClasses({ kind, className });

	// copy to clipboard function
	const handleCopyToClipboard = () => {
		setCopied(true);
		if (typeof copyToClipboard === "function") {
			copyToClipboard(children);
		} else if (typeof children === "string") {
			navigator.clipboard.writeText(children);
		}
	};

	// after 3 seconds, reset the copied state
	useEffect(() => {
		if (copied) {
			setTimeout(() => {
				setCopied(false);
			}, 3000);
		}
	}, [copied]);

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

			{copyToClipboard &&
				(typeof children === "string" ||
					typeof copyToClipboard === "function") && (
					<div className={bubbleClasses.copyButton}>
						<ButtonIcon
							noBorder
							onClick={handleCopyToClipboard}
							disabled={copied}
						>
							{copied ? <IconCopied /> : <IconCopy />}
						</ButtonIcon>
					</div>
				)}
		</div>
	);
};
