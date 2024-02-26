import type { Story } from "@ladle/react";
import {
	Anchor,
	Button,
	ButtonIcon,
	Footer,
	Menu,
	MenuItem,
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TextInput,
} from "@versini/ui-components";
import {
	IconChart,
	IconDelete,
	IconHistory,
	IconInfo,
	IconProfile,
	IconRestore,
	IconSettings,
} from "@versini/ui-icons";

export default { title: "System/Dark Mode" };

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
				Most components support a <code>system</code> mode which allows them to
				toggle from dark to light colors automatically by relying on the
				<code>prefers-color-scheme</code> CSS media feature. For special cases,
				there is a<code>alt-system</code> mode which is a toggled version of the
				<code>system</code> mode.
			</p>

			<h2 className="mt-2">Toggling dark mode manually</h2>
			<p>
				If you want to toggle dark mode manually instead of relying on the
				operating system preference, use the Tailwind selector strategy:
			</p>
			<pre className="my-0">
				<code>
					{`// tailwind.config.js
module.exports = {
  darkMode: 'selector',
  // ...
}`}
				</code>
			</pre>
			<p>
				Now instead of dark classes being applied based on{" "}
				<code>prefers-color-scheme</code>, they will be applied whenever the
				<code>dark</code> class is present earlier in the HTML tree.
			</p>

			<div className="mb-2 flex flex-wrap gap-1">
				<Button kind="system">Button</Button>
				<Button kind="system">Button</Button>
				<Button kind="system">Button</Button>
				<Button kind="system">Button</Button>
			</div>
			<div className="mb-2 flex flex-wrap gap-1">
				<Anchor kind="system">Anchor as a button</Anchor>
				<Anchor kind="system">Anchor as a button lorem ipsum</Anchor>
				<Anchor kind="system">Anchor as a button lorem ipsum dolor</Anchor>
				<Anchor kind="system">
					Anchor as a button lorem ipsum dolor sit amet
				</Anchor>
			</div>
			<div className="mb-2 flex flex-wrap justify-end gap-1">
				<Menu icon={<IconSettings decorative />} kind="system">
					<MenuItem label="Profile" icon={<IconProfile decorative />} />
					<MenuItem label="Statistics" icon={<IconChart decorative />} />
					<MenuItem label="History" icon={<IconHistory decorative />} />
					<MenuItem label="About" icon={<IconInfo decorative />} />
				</Menu>
			</div>
			<form noValidate>
				<div className="flex gap-2">
					<TextInput
						name="question"
						label="Type your question here"
						helperText="Powered by the sun"
						rightElement={
							<Button kind="light" noBorder>
								Send
							</Button>
						}
					/>
				</div>
			</form>
			<div className="my-2 flex flex-wrap">
				<Table caption="Dune" kind="system">
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
										<Spinner type="dots" kind="alt-system" />
									</TableCell>

									<TableCell>
										<div className="flex justify-end gap-2">
											<ButtonIcon
												noBorder
												label="Restore chat"
												kind="light"
												onClick={() => {}}
											>
												<IconRestore decorative className="h-3 w-3" />
											</ButtonIcon>
											<ButtonIcon
												noBorder
												label="Delete chat"
												kind="light"
												onClick={() => {}}
											>
												<div className="text-red-400">
													<IconDelete decorative className="h-3 w-3" monotone />
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
					kind="system"
					row1={<div>App Name v1.0.0</div>}
					row2={<div>something something</div>}
				/>
			</div>
		</>
	);
};

const commonClassName =
	"prose prose-dark grid border-2 border-slate-900 bg-slate-100 p-5 dark:prose-lighter dark:border-slate-100 dark:bg-slate-700";

export const Night: Story<any> = () => (
	<div className="dark">
		<div className={commonClassName}>
			<h1>Night Mode</h1>
			<CommonTemplate />
		</div>
	</div>
);

export const Day: Story<any> = () => (
	<div className={commonClassName}>
		<h1>Day Mode</h1>
		<CommonTemplate />
	</div>
);
