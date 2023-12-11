import type { Meta } from "@storybook/react";
import { Button, Panel } from "@versini/ui-components";
import { useState } from "react";

const meta: Meta<typeof Panel> = {
	component: Panel,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
	args: {},
	argTypes: {},
};

export default meta;

export const Basic = () => {
	const [showPanel, setShowPanel] = useState(false);

	const openPanel = () => {
		setShowPanel(!showPanel);
	};
	return (
		<>
			<Panel open={showPanel} onOpenChange={setShowPanel} />
			<div className="flex flex-wrap gap-2">
				<Button onClick={() => openPanel()}>Open Panel</Button>
			</div>
		</>
	);
};
