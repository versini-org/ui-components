import type { Story } from "@ladle/react";
import { Main } from "@versini/ui-components";

export default {
	title: "Components/Main",
};

export const Basic: Story<any> = (args) => <Main {...args}>hello world </Main>;
Basic.args = {
	raw: false,
};
