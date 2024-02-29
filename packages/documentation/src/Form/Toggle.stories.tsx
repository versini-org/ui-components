import type { Story } from "@ladle/react";
import { Toggle } from "@versini/ui-components";
import { useState } from "react";

export default {
	title: "Form components/Toggle",
	meta: {
		importName: "Toggle",
	},
};

export const Basic: Story<any> = (args) => {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<div className="min-h-10 bg-slate-900 p-11">
				<div className="flex flex-wrap gap-2">
					<Toggle
						onChange={setChecked}
						checked={checked}
						label="Toggle light"
						name="Toggle light"
						mode="light"
					/>
				</div>
			</div>

			<div className="min-h-10 p-11">
				<div className="flex flex-wrap gap-2">
					<Toggle
						onChange={setChecked}
						checked={checked}
						label="Toggle dark"
						name="Toggle dark"
						mode="dark"
					/>
				</div>
			</div>

			<div className="min-h-10 p-11">
				<div className="flex flex-wrap gap-2">
					<Toggle
						onChange={setChecked}
						checked={checked}
						label="Toggle"
						name="Toggle"
						{...args}
					/>
				</div>
			</div>
		</>
	);
};
Basic.args = {
	checked: false,
	disabled: false,
	mode: "dark",
};
Basic.argTypes = {
	mode: {
		options: ["dark", "light", "system", "alt-system"],
		control: { type: "radio" },
	},
};
