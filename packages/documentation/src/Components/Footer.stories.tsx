import type { Story } from "@ladle/react";
import { Footer } from "@versini/ui-components";

export default {
	title: "Components/Footer",
	meta: {
		importName: "Footer",
	},
	args: {
		noMargins: false,
		kind: "dark",
		raw: false,
	},
	argTypes: {
		kind: {
			control: { type: "radio" },
			options: ["dark", "light"],
		},
	},
};

export const Basic: Story<any> = (args) => (
	<div className="grid bg-slate-300">
		<Footer
			{...args}
			row1={<div>App Name v1.0.0</div>}
			row2={<div>something something</div>}
		/>
	</div>
);
