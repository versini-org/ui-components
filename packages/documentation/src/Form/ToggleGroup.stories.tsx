import type { Story } from "@ladle/react";
import { ToggleGroup, ToggleGroupItem } from "@versini/ui-togglegroup";
import { useState } from "react";

export default {
	title: "Form components/ToggleGroup",
	meta: {
		importName: "ToggleGroup",
	},
	args: {
		mode: "system",
		focusMode: "system",
		size: "medium",
		"aria-label": "Toggle AI engines",
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
		size: {
			options: ["small", "medium", "large"],
			control: { type: "radio" },
		},
	},
};

export const Basic: Story<any> = (args) => {
	return (
		<>
			<div className="flex flex-wrap gap-2">
				<ToggleGroup {...args} defaultValue="Anthropic">
					<ToggleGroupItem value="OpenAI" />
					<ToggleGroupItem value="Anthropic" />
					<ToggleGroupItem value="Gemini" />
				</ToggleGroup>
			</div>
			<div className="flex flex-wrap gap-2">
				<ToggleGroup {...args} defaultValue="Anthropic" className="mt-2">
					<ToggleGroupItem value="OpenAI" />
					<ToggleGroupItem value="Anthropic" />
				</ToggleGroup>
			</div>
		</>
	);
};

export const AlwaysSelected: Story<any> = (args) => {
	const [value, setValue] = useState("Anthropic");
	return (
		<div className="flex flex-wrap gap-2">
			<ToggleGroup
				{...args}
				value={value}
				onValueChange={(value: string) => {
					if (value) {
						setValue(value);
					}
				}}
			>
				<ToggleGroupItem value="OpenAI" />
				<ToggleGroupItem value="Anthropic" />
				<ToggleGroupItem value="Gemini" />
			</ToggleGroup>
		</div>
	);
};
