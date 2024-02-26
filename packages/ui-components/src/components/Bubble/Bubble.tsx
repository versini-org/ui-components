import { IconCopied, IconCopy } from "@versini/ui-icons";
import { useEffect, useState } from "react";

import { ButtonIcon } from "..";
import { BubbleProps } from "./BubbleTypes";
import { getBubbleClasses } from "./utilities";

export const Bubble = ({
	children,
	kind = "left",
	className,
	footer,
	rawFooter,
	copyToClipboard,
	spacing,
}: BubbleProps) => {
	const [copied, setCopied] = useState(false);
	const bubbleClasses = getBubbleClasses({ kind, className, spacing });
	const isCopyToClipboardEnabled =
		Boolean(copyToClipboard) &&
		(typeof copyToClipboard === "function" ||
			typeof copyToClipboard === "string" ||
			typeof children === "string");

	// copy to clipboard function
	const handleCopyToClipboard = () => {
		setCopied(true);

		if (typeof copyToClipboard === "function") {
			copyToClipboard(children);
		} else if (typeof copyToClipboard === "string") {
			navigator.clipboard.writeText(copyToClipboard);
		} else if (typeof children === "string") {
			navigator.clipboard.writeText(children);
		}
	};

	// after 3 seconds, reset the copied state
	useEffect(() => {
		let timeoutId: number;
		if (copied) {
			timeoutId = window.setTimeout(() => {
				setCopied(false);
			}, 3000);
		}
		return () => {
			clearTimeout(timeoutId);
		};
	}, [copied]);

	return (
		<div className={bubbleClasses.wrapper}>
			<div>
				<div className={bubbleClasses.main}>{children}</div>
				{footer &&
					Object.keys(footer).map((key) => {
						return footer[key] ? (
							<div key={`-${key}`} className="prose-p:m-0">
								<p className={bubbleClasses.footer}>
									{key}: {footer[key]}
								</p>
							</div>
						) : null;
					})}
				{rawFooter && rawFooter}
			</div>

			{isCopyToClipboardEnabled && (
				<div className={bubbleClasses.copyButton}>
					<ButtonIcon
						label={copied ? "Copied to clipboard" : "Copy to clipboard"}
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
