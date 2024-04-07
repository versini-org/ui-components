import type { Story } from "@ladle/react";
import {
	Anchor,
	Button,
	ButtonIcon,
	Card,
	Footer,
	Header,
	Main,
	Menu,
	MenuItem,
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@versini/ui-components";
import { TextInput } from "@versini/ui-form";
import {
	IconChart,
	IconDelete,
	IconHistory,
	IconInfo,
	IconProfile,
	IconRestore,
	IconSettings,
} from "@versini/ui-icons";
import { Highlight, themes } from "prism-react-renderer";

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

const codeBlock = `// tailwind.config.js
/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-styles";

export default twPlugin.merge({
  darkMode: "selector",
  ...
});`;

const data = [
	{
		id: 1,
		timestamp: "10/16/2023 08:46 PM EDT",
		character: "Who plays Paul Atreides?",
		actor: "Timothée Chalamet",
	},
	{
		id: 2,
		timestamp: "10/16/2023 08:55 PM EDT",
		character: "What about Lady Jessica?",
		actor: "Rebecca Ferguson",
	},
	{
		id: 3,
		timestamp: "10/16/2023 08:59 PM EDT",
		character: "And Duncan Idaho?",
		actor: "Jason Momoa",
	},
];

const CommonTemplate = () => {
	return (
		<>
			<p>
				Most components support a <code>system</code> mode prop which allows
				them to toggle from dark to light colors automatically by relying on the
				<code>prefers-color-scheme</code> CSS media feature. For special cases,
				there is a<code>alt-system</code> mode which is a toggled version of the
				<code>system</code> mode.
			</p>
			<p>
				Additionally, some components also provide a <code>focusMode</code> prop
				that is also set to <code>system</code> by default.
			</p>

			<h2 className="mt-2">Toggling dark mode manually</h2>
			<p>
				If you want to toggle dark mode manually instead of relying on the
				operating system preference, use the Tailwind selector strategy:
			</p>
			<Highlight theme={themes.vsDark} code={codeBlock} language="jsx">
				{({ style, tokens, getLineProps, getTokenProps }) => (
					<pre style={style}>
						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line })}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token })} />
								))}
							</div>
						))}
					</pre>
				)}
			</Highlight>
			<p>
				Now instead of dark classes being applied based on{" "}
				<code>prefers-color-scheme</code>, they will be applied whenever the
				<code>dark</code> class is present earlier in the HTML tree.
			</p>

			<h2>Kitchen Sink</h2>
			<p>
				All the components rendered below have their <code>mode</code> sets to{" "}
				<code>system</code> by default, except for a few ones where we force the
				mode to be different so that the contrast with the background is
				accessible (see the Button in the TextInput for example).
			</p>

			<div className="mb-2 flex flex-wrap gap-2">
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
			</div>
			<div className="mb-2 flex flex-wrap gap-2">
				<Anchor link="https://www.google.com">Anchor as a button</Anchor>
				<Anchor link="https://www.google.com">
					Anchor as a button lorem ipsum
				</Anchor>
				<Anchor link="https://www.google.com">
					Anchor as a button lorem ipsum dolor
				</Anchor>
				<Anchor link="https://www.google.com">
					Anchor as a button lorem ipsum dolor sit amet
				</Anchor>
			</div>
			<div className="mb-2 flex flex-wrap justify-end gap-1">
				<Menu icon={<IconSettings />}>
					<MenuItem label="Profile" icon={<IconProfile />} />
					<MenuItem label="Statistics" icon={<IconChart />} />
					<MenuItem label="History" icon={<IconHistory />} />
					<MenuItem label="About" icon={<IconInfo />} />
				</Menu>
			</div>
			<form noValidate>
				<div className="flex gap-2">
					<TextInput
						name="question"
						label="Type your question here"
						rightElement={
							<Button mode="light" noBorder>
								Send
							</Button>
						}
					/>
				</div>
			</form>
			<div className="my-2 flex flex-wrap">
				<Table caption="Dune">
					<TableHead className="uppercase">
						<TableRow>
							<TableCell scope="col">Date</TableCell>
							<TableCell scope="col">First message</TableCell>
							<TableCell scope="col">Loading</TableCell>
							<TableCell className="text-right" scope="col">
								Actions
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{data.map((row, idx) => {
							return (
								<TableRow key={`${row.id}-${idx}`}>
									<TableCell component="th" scope="row">
										{row.timestamp}
									</TableCell>
									<TableCell>{row.character}</TableCell>
									<TableCell>
										<Spinner type="dots" mode="alt-system" />
									</TableCell>

									<TableCell>
										<div className="flex justify-end gap-2">
											<ButtonIcon
												noBorder
												label="Restore chat"
												mode="light"
												focusMode="alt-system"
												onClick={() => {}}
											>
												<IconRestore className="h-3 w-3" />
											</ButtonIcon>
											<ButtonIcon
												noBorder
												label="Delete chat"
												mode="light"
												focusMode="alt-system"
												onClick={() => {}}
											>
												<div className="text-red-400">
													<IconDelete className="h-3 w-3" monotone />
												</div>
											</ButtonIcon>
										</div>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>

			<div className="grid">
				<Footer
					noMargins
					row1={<div>App Name v1.0.0</div>}
					row2={<div>something something</div>}
				/>
			</div>
		</>
	);
};

export const Basic: Story<any> = (args) => (
	<Header {...args}>
		<h1 className="m-0">hello header</h1>
	</Header>
);

export const KitchenSink: Story<any> = (args) => (
	<>
		<Header {...args}>
			<h1 className="m-0">hello header</h1>
		</Header>
		<Main>
			<Card header="Automatic Dark Mode">
				<CommonTemplate />
			</Card>
		</Main>
		<Footer row1="Hello Footer" />
	</>
);
