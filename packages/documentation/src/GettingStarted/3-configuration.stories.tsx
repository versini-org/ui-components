import { linkTo, Story } from "@ladle/react";
import {
	ButtonIcon,
	Flexgrid,
	FlexgridItem,
	IconNext,
	IconPrevious,
} from "@versini/ui-components";

export default {
	title: "Getting Started",
};

export const Configuration: Story<any> = () => (
	<div className="prose prose-light max-w-none">
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
			You can use the <strong>UI-Components</strong> library with or without{" "}
			<strong>TailwindCSS</strong>. Depending on your situation, you can either
			use the pre-built CSS or the TailwindCSS plugin to build your own styles
			and take advantage of tree-shaking unused styles.
		</p>

		<h2>Without TailwindCSS</h2>

		<p>
			If you are not using TailwindCSS, you can use the pre-built CSS file. Just
			import it in your entry file:
		</p>

		<pre>
			<code>
				{`// index.js
import "@versini/ui-components/dist/style.css";`}
			</code>
		</pre>

		<h2>With TailwindCSS</h2>

		<p>
			If you are using TailwindCSS, you can use the{" "}
			<strong>UI-Components</strong> library TailwindCSS plugin:
		</p>

		<pre>
			<code>
				{`// tailwind.config.js
/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-components/dist/utilities";

export default twPlugin.merge({
  // this is an example, you can change the path to your files
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
});`}
			</code>
		</pre>

		<Flexgrid alignHorizontal="space-between">
			<FlexgridItem>
				<ButtonIcon
					labelRight="Installation"
					noBorder
					onClick={linkTo("getting-started--installation")}
				>
					<IconPrevious decorative monotone />
				</ButtonIcon>
			</FlexgridItem>
			<FlexgridItem>
				<ButtonIcon
					labelLeft="Usage"
					noBorder
					onClick={linkTo("getting-started--usage")}
				>
					<IconNext decorative monotone />
				</ButtonIcon>
			</FlexgridItem>
		</Flexgrid>
	</div>
);
