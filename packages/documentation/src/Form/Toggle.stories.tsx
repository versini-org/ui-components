import type { Story } from "@ladle/react";
import { Toggle } from "@versini/ui-form";
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
		<div className="flex flex-wrap gap-2">
			<Toggle
				onChange={setChecked}
				checked={checked}
				label="Toggle"
				name="Toggle"
				{...args}
			/>
		</div>
	);
};
Basic.args = {
	checked: false,
	disabled: false,
	mode: "system",
};
Basic.argTypes = {
	mode: {
		options: ["dark", "light", "system", "alt-system"],
		control: { type: "radio" },
	},
};
