import type { Story } from "@ladle/react";
import { Pill } from "@versini/ui-pill";

export default {
	title: "Components/Pill",
	meta: {
		importName: "Pill",
	},
};

export const Basic: Story<any> = (args) => {
	return (
		<div className="flex flex-wrap gap-2">
			<Pill label="this is a pill" {...args} />
		</div>
	);
};
Basic.args = {
	description: "",
};
Basic.argTypes = {
	variant: {
		options: ["error", "information", "success", "warning"],
		control: { type: "radio" },
		defaultValue: "information",
	},
};

export const HardCoded: Story<any> = () => {
	return (
		<div className="flex flex-wrap gap-2">
			<Pill label="warning" variant="warning" />
			<Pill label="success" variant="success" />
			<Pill label="info" variant="information" />
			<Pill label="error" variant="error" />
		</div>
	);
};
