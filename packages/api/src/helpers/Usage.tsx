import { Unstyled } from "@storybook/blocks";

import Highlight from "./Highlight";

interface UsageProps {
	codeBlock: string;
}

export default ({ codeBlock }: UsageProps) => {
	return (
		<Unstyled>
			<div className="prose">
				<Highlight codeBlock={codeBlock} />
			</div>
		</Unstyled>
	);
};
