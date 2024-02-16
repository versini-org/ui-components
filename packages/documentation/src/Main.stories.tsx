import type { Story } from "@ladle/react";
import { Main } from "@versini/ui-components";

export const Basic: Story<any> = (args) => <Main {...args}>hello world </Main>;
Basic.args = {
	raw: false,
};
