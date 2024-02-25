import type { Story } from "@ladle/react";
import { Spinner } from "@versini/ui-components";

export default {
	title: "Components/Spinner",
	meta: {
		importName: "Spinner",
	},
	args: {
		kind: "dark",
		type: "circle",
	},
	argTypes: {
		kind: {
			options: ["dark", "light", "system"],
			control: { type: "radio" },
		},
		type: {
			options: ["circle", "dots"],
			control: { type: "radio" },
		},
	},
};

export const Basic: Story<any> = (args) => (
	<div className="min-h-10 bg-slate-300 p-11">
		<div className="flex flex-wrap gap-2">
			<Spinner {...args} type="dots" />
			<Spinner {...args} type="circle" />
		</div>
	</div>
);
