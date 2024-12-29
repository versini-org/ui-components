import { Button } from "@versini/ui-button";
import { useState } from "react";

import type { TruncateProps } from "./TruncateTypes";
import { truncate } from "./utilities.ts";

export const Truncate = ({
	children,
	length = 200,
	mode = "system",
	focusMode = "system",
}: TruncateProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	if (typeof children !== "string") {
		return children;
	}
	const { string, isTruncated } = truncate({
		string: children,
		idealLength: length,
	});

	const handleToggleExpanded = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setIsExpanded(!isExpanded);
	};

	return (
		<span style={{ wordBreak: "break-word" }}>
			{isExpanded ? children : string}
			{isTruncated && (
				<Button
					mode={mode}
					focusMode={focusMode}
					className="ml-2"
					size="small"
					onClick={handleToggleExpanded}
				>
					{isExpanded ? "less..." : "more..."}
				</Button>
			)}
		</span>
	);
};
