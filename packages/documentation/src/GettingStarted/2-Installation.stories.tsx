import { linkTo, Story } from "@ladle/react";
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

export default {
	title: "Getting Started",
};

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
			documentation. You can find them on the right side of the screen.
		</p>
		<h2>Example</h2>
		<p>
			If you only need some core components and of course the CSS styles
			associated, use the following command:
		</p>
		<pre>
			<code>
				$ npm install --save @versini/ui-styles @versini/ui-components
			</code>
		</pre>
		<p>
			You also need to install React and React-DOM (at least 18.0.0 or above).
		</p>
		<pre>
			<code>$ npm install --save react react-dom</code>
		</pre>
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
