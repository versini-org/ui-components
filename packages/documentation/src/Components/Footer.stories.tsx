import type { Story } from "@ladle/react";
import { Footer } from "@versini/ui-footer";

export default {
	title: "Components/Footer",
	meta: {
		importName: "Footer",
	},
	args: {
		noMargins: false,
		mode: "system",
		raw: false,
	},
	argTypes: {
		mode: {
			control: { type: "radio" },
			options: ["dark", "light", "system", "alt-system"],
		},
	},
};

export const Basic: Story<any> = (args) => (
	<Footer
		{...args}
		row1={<div>App Name v1.0.0</div>}
		row2={<div>something something</div>}
	/>
);
