import type { Story } from "@ladle/react";
import { Toggle } from "@versini/ui-form";
import { useState } from "react";

export default {
	title: "Form components/Toggle",
	meta: {
		importName: "Toggle",
		importPackage: "ui-form",
	},
};

export const Basic: Story<any> = (args) => {
	const [checked, setChecked] = useState(true);

	return (
		<div className="flex flex-wrap gap-2">
			<Toggle onChange={setChecked} checked={checked} name="Toggle" {...args} />
		</div>
	);
};
Basic.args = {
	mode: "system",
	focusMode: "system",
	labelHidden: false,
	label: "Toggle",
};
Basic.argTypes = {
	mode: {
		options: ["dark", "light", "system", "alt-system"],
		control: { type: "radio" },
	},
	focusMode: {
		options: ["dark", "light", "system", "alt-system"],
		control: { type: "radio" },
	},
};
