import type { Meta } from "@storybook/react";
import { Toggle } from "@versini/ui-components";
import { useState } from "react";

const meta: Meta<typeof Toggle> = {
	component: Toggle,
	parameters: {
		controls: { exclude: ["spacing"], sort: "requiredFirst" },
	},
};

export default meta;

export const Basic = () => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<div className="min-h-10 bg-slate-900 p-11">
				<div className="flex flex-wrap gap-2">
					<Toggle
						onChange={setChecked}
						checked={checked}
						label="GPT-4 light"
						name="GPT-4 light"
						kind="light"
					/>
				</div>
			</div>

			<div className="min-h-10 bg-slate-500 p-11">
				<div className="flex flex-wrap gap-2">
					<Toggle
						onChange={setChecked}
						checked={checked}
						label="GPT-4 dark"
						name="GPT-4 dark"
					/>
				</div>
			</div>
		</>
	);
};
