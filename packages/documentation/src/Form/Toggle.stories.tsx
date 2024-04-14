import type { Story } from "@ladle/react";
import { Card } from "@versini/ui-components";
import { Toggle } from "@versini/ui-form";
import { useState } from "react";

export default {
	title: "Form components/Toggle",
	meta: {
		importName: "Toggle",
		importPackage: "ui-form",
	},
	args: {
		mode: "system",
		focusMode: "system",
		labelHidden: false,
		label: "Toggle",
		noBorder: false,
	},
	argTypes: {
		mode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
		focusMode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
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

export const DynamicLabel: Story<any> = (args) => {
	const [checked, setChecked] = useState(true);

	return (
		<div className="flex flex-wrap items-center gap-2">
			<div className="text-sm">Edit Mode:</div>
			<Toggle
				onChange={setChecked}
				checked={checked}
				name="Toggle"
				{...args}
				label={checked ? "On" : "Off"}
			/>
		</div>
	);
};

export const InContext: Story<any> = (args) => {
	const [checked1, setChecked1] = useState(true);
	const [checked2, setChecked2] = useState(false);

	return (
		<Card header="Preferences">
			<div className="flex flex-col flex-wrap gap-4">
				<Toggle
					onChange={setChecked1}
					checked={checked1}
					name="Toggle 1"
					{...args}
					label="Toggle 1"
				/>
				<Toggle
					onChange={setChecked2}
					checked={checked2}
					name="Toggle 2"
					{...args}
					label="Toggle 2"
				/>
			</div>
		</Card>
	);
};
