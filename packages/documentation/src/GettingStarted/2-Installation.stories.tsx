import { Story, linkTo } from "@ladle/react";
import {
	ButtonIcon,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@versini/ui-components";
import { IconNext, IconPrevious } from "@versini/ui-icons";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";
import { Highlight, Prism, themes } from "prism-react-renderer";

export default {
	title: "Getting Started",
};
(typeof global !== "undefined" ? global : window).Prism = Prism;
// @ts-ignore
await import("prismjs/components/prism-bash");

const data = [
	{
		id: 1,
		name: "@versini/ui-components",
		description: "Core components such as Button, Card, and Spinner.",
	},
	{
		id: 2,
		name: "@versini/ui-styles",
		description:
			"Required package to handle styles via TailwindCSS, including Typography.",
	},
	{
		id: 3,
		name: "@versini/ui-form",
		description: "Form components such as TextInput, TextArea and Toggle.",
	},
	{
		id: 4,
		name: "@versini/ui-icons",
		description: "All the icons used in the UI-Components library.",
	},
	{
		id: 5,
		name: "@versini/ui-system",
		description: "System level components such as Flexgrid and ThemeProvider.",
	},
];

export const Installation: Story<any> = () => (
	<>
		<h1>Installation</h1>
		<p>
			The <strong>UI-Components</strong> library is available as multiple npm
			packages. The library has been split into multiple packages to make it
			easier to manage and to reduce the size of the final bundle.
		</p>
		<div className="my-2 flex flex-wrap">
			<Table>
				<TableHead className="uppercase">
					<TableRow>
						<TableCell scope="col">Package name</TableCell>
						<TableCell scope="col">Description</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{data.map((row, idx) => {
						return (
							<TableRow key={`${row.id}-${idx}`}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell>{row.description}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
		<p>
			<strong>NOTE</strong>: each package content is detailed in this
			documentation. You can find them in the navigation bar.
		</p>
		<h2>Example</h2>
		<p>
			If you only need some core components and of course the CSS styles
			associated<sup>1</sup>, use the following command:
		</p>
		<Highlight
			theme={themes.vsDark}
			code={`$ npm install --save-dev @versini/ui-styles
$ npm install --save @versini/ui-components`}
			language="bash"
		>
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
			You also need to install React and React-DOM (at least 18.0.0 or above).
		</p>
		<Highlight
			theme={themes.vsDark}
			code={`$ npm install --save react react-dom`}
			language="bash"
		>
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
			<sup>1</sup>{" "}
			<small>
				For more information about how CSS styles are handled, please check the
				Styles section in the navigation bar.
			</small>
		</p>

		<Flexgrid alignHorizontal="space-between">
			<FlexgridItem>
				<ButtonIcon
					labelRight="Overview"
					onClick={linkTo("getting-started--overview")}
				>
					<IconPrevious monotone />
				</ButtonIcon>
			</FlexgridItem>
			<FlexgridItem>
				<ButtonIcon
					labelLeft="Configuration"
					onClick={linkTo("getting-started--configuration")}
				>
					<IconNext monotone />
				</ButtonIcon>
			</FlexgridItem>
		</Flexgrid>
	</>
);
