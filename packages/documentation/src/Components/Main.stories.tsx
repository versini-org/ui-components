import type { Story } from "@ladle/react";
import { Footer, Main } from "@versini/ui-components";

export default {
	title: "Components/Main",
};

export const Basic: Story<any> = (args) => <Main {...args}>hello world </Main>;
Basic.args = {
	raw: false,
};

export const WithFooter: Story<any> = (args) => (
	<div className="h-full bg-slate-100">
		<Main {...args} className="bg-slate-300">
			<div>hello main content</div>
		</Main>

		<Footer
			className="bg-slate-300"
			row1={<div>App Name v1.0.0</div>}
			row2={<div>something something</div>}
		/>
	</div>
);
