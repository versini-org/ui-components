import { IconCopied, IconCopy } from "@versini/ui-icons";
import type { ButtonCopyTypes } from "@versini/ui-types";
import React, { useEffect, useState } from "react";

import { ButtonIcon } from "./ButtonIcon";

export const ButtonCopy = React.forwardRef<
	HTMLButtonElement,
	ButtonCopyTypes.Props
>(({ copyToClipboard, ...otherProps }, ref) => {
	const [copied, setCopied] = useState(false);

	const handleCopyToClipboard = () => {
		if (typeof copyToClipboard === "string") {
			navigator.clipboard.writeText(copyToClipboard);
			setCopied(true);
		}
		if (typeof copyToClipboard === "function") {
			navigator.clipboard.writeText(copyToClipboard());
			setCopied(true);
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
		<ButtonIcon
			{...otherProps}
			size="small"
			ref={ref}
			label={copied ? "Copied to clipboard" : "Copy to clipboard"}
			onClick={handleCopyToClipboard}
			disabled={copied}
		>
			{copied ? (
				<IconCopied className="size-3" />
			) : (
				<IconCopy className="size-3" />
			)}
		</ButtonIcon>
	);
});

ButtonCopy.displayName = "ButtonCopy";
