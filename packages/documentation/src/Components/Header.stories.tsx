import type { Story } from "@ladle/react";
import { Button } from "@versini/ui-components";
import { Footer } from "@versini/ui-components";
import { Header } from "@versini/ui-components";
import { Main } from "@versini/ui-components";

export default {
	title: "Components/Header",
	meta: {
		importName: "Header",
	},
	args: {
		raw: false,
		noColors: false,
		mode: "system",
	},
	argTypes: {
		mode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
	},
};

export const Basic: Story<any> = (args) => (
	<Header {...args}>
		<h1 className="m-0">hello header</h1>
	</Header>
);

export const WithFooter: Story<any> = (args) => (
	<>
		<Header {...args}>
			<h1 className="m-0">hello header</h1>
		</Header>
		<Main>
			<h2>Hello Main</h2>
			<p>
				lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
				sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
				ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
				amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
				dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
				lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
				sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
				ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
				amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
				dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
				lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
				sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
				ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
				amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
				dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
				lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
				sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
				ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
				amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
				dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
				lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
				sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
				ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
				amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
				dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
				lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
				sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
				ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
				amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
				dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
				lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
				sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
				ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
				amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
				dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
				lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
				sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
				ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
				amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
				dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
				lorem ipsum dolor sit amet
			</p>
			<div className="flex flex-wrap gap-2">
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
			</div>
		</Main>
		<Footer row1="Hello Footer" />
	</>
);
