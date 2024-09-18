import { Story, linkTo } from "@ladle/react";
import { ButtonIcon } from "@versini/ui-button";
import { IconNext, IconPrevious } from "@versini/ui-icons";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";
import { Highlight, themes } from "prism-react-renderer";

export default {
	title: "Getting Started",
};

const codeBlock = `// tailwind.config.js
/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-styles";

export default twPlugin.merge({
  // this is an example, you can change the path to your files
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
});`;

export const Configuration: Story<any> = () => (
	<>
		<h1>Configuration</h1>

		<h2>JavaScript</h2>

		<ul>
			<li>
				<p>
					UI Components come un-bundled, which means you need to use a bundler
					such as Webpack, Vite or Rollup to bundle components into your
					application.
				</p>
			</li>
			<li>
				<p>
					UI Components are tree-shakeable, side-effect free and each component
					style is self-contained.
				</p>
			</li>
			<li>
				<p>
					Please refer to each component API documentation (under the Components
					or Form components menu) to see how they should be imported, what
					their individual props are as well as many different examples.
				</p>
			</li>
		</ul>

		<h2>CSS</h2>

		<p>
			TailwindCSS is required to style the components within the{" "}
			<strong>UI-Components</strong> library. Thanks to our TailwindCSS plugin,
			you can take advantage of tree-shaking unused styles:
		</p>

		<div>
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
		</div>

		<Flexgrid alignHorizontal="space-between">
			<FlexgridItem>
				<ButtonIcon
					labelRight="Installation"
					onClick={linkTo("getting-started--installation")}
				>
					<IconPrevious monotone />
				</ButtonIcon>
			</FlexgridItem>
			<FlexgridItem>
				<ButtonIcon
					labelLeft="Usage"
					onClick={linkTo("getting-started--usage")}
				>
					<IconNext monotone />
				</ButtonIcon>
			</FlexgridItem>
		</Flexgrid>
	</>
);
