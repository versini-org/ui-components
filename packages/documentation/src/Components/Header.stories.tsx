import type { Story } from "@ladle/react";
import { Header } from "@versini/ui-components";

export default {
	title: "Components/Header",
	meta: {
		importName: "Header",
	},
};

export const Basic: Story<any> = (args) => (
	<Header {...args}>hello header </Header>
);
Basic.args = {
	raw: false,
};
