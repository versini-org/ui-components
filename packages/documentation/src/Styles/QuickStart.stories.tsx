import { Story } from "@ladle/react";
import { Highlight, Prism, themes } from "prism-react-renderer";

export default { title: "Styles" };
(typeof global !== "undefined" ? global : window).Prism = Prism;
// @ts-ignore
await import("prismjs/components/prism-bash");

export const QuickStart: Story<any> = () => (
	<div className="prose prose-dark dark:prose-lighter">
		<h1>Styles</h1>
		<p>
			To import the styles needed by UI Components, including Typography, you
			need to use and configure Tailwind accordingly with our plugin. The plugin
			is available as a standalone npm package. This in turn is allowing your
			application to only use the styles you need, and not the whole CSS
			library.
		</p>
		<h2>Installation</h2>
		<p>
			You have to install the <code>@versini/ui-styles</code> package which
			provides our TailwindCSS plugin. Note that it's a build time dependency so
			it only needs to be added to the <code>devDependencies</code>:
		</p>
		<Highlight
			theme={themes.vsDark}
			code={`$ npm install --save-dev @versini/ui-styles`}
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

		<h2>Configuration</h2>
		<p>
			You then need to configure your application to use TailwindCSS and our
			TailwindCSS plugin:
		</p>
		<Highlight
			theme={themes.vsDark}
			code={`// tailwind.config.js
/** @type {import('tailwindcss').Config} */

import { twPlugin } from "@versini/ui-styles";

export default twPlugin.merge({
  // this is an example, you can change the path to your files
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
});`}
			language="tsx"
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
			Finally, while our Typography styles could be used as is, some styles are
			taking advantage of the Open Sans font if it is available. To add it to
			your project, simply copy the following lines in your index.html{" "}
			<code>head</code>:
		</p>
		<Highlight
			theme={themes.vsDark}
			code={`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">`}
			language="markup"
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

		<h2>Usage</h2>
		<p>
			Now you can use the <code>prose-dark</code>,<code>prose-light</code> and{" "}
			<code>prose-lighter</code> classes to add our typography styles to any
			vanilla HTML:
		</p>
		<Highlight
			theme={themes.vsDark}
			code={`<article class="prose prose-dark">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating
    garlic bread with cheese to their children, with the food
    earning such an iconic status in our culture that kids will
    often dress up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be
    linked to a series of rabies cases springing up around the country.
  </p>
  <!-- ... -->
</article>`}
			language="markup"
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
			<strong>NOTE:</strong> always include the <code>prose</code> class when
			adding a typography style (dark, light, or lighter).
		</p>

		<h2>Dark mode</h2>
		<p>
			Our typography styles are designed to automatically work in dark mode,
			too. Just add the <code>dark:</code> prefix to the classes:
		</p>
		<Highlight
			theme={themes.vsDark}
			code={`<article class="prose prose-dark dark:prose-light">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating
    garlic bread with cheese to their children, with the food
    earning such an iconic status in our culture that kids will
    often dress up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be
    linked to a series of rabies cases springing up around the country.
  </p>
  <!-- ... -->
</article>`}
			language="markup"
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
			<strong>NOTE:</strong> please refer to the Styles {"->"} Components {"->"}{" "}
			Dark mode section in the navigation bar for more information.
		</p>
	</div>
);
