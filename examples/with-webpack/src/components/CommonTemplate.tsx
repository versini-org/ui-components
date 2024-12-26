import { Anchor } from "@versini/ui-anchor";
import { Button } from "@versini/ui-button";
import { Footer } from "@versini/ui-footer";

import { CustomForm } from "./CustomForm";
import { SortableTable } from "./SortableTable";

export const CommonTemplate = () => {
	return (
		<>
			<p>
				Most components support a <code>system</code> mode which allows them to
				toggle from dark to light colors automatically by relying on the
				<code>prefers-color-scheme</code> CSS media feature. For special cases,
				there is a <code>alt-system</code> mode which is a toggled version of
				the
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

			<h2>Kitchen Sink</h2>
			<p>
				All the components rendered below have their <code>mode</code> sets to{" "}
				<code>system</code>.
			</p>

			<div className="mb-2 flex flex-wrap gap-2">
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
				<Button>Button</Button>
			</div>
			<div className="mb-2 flex flex-wrap gap-2">
				<Anchor href="https://www.google.com">Anchor as a button</Anchor>
				<Anchor href="https://www.google.com">
					Anchor as a button lorem ipsum
				</Anchor>
				<Anchor href="https://www.google.com">
					Anchor as a button lorem ipsum dolor
				</Anchor>
				<Anchor href="https://www.google.com">
					Anchor as a button lorem ipsum dolor sit amet
				</Anchor>
			</div>

			<div className="my-2 flex flex-wrap">
				<CustomForm />
			</div>

			<div className="my-6 flex flex-wrap">
				<SortableTable />
			</div>

			<div className="grid">
				<Footer
					noMargins
					mode="system"
					row1={<div>App Name v1.0.0</div>}
					row2={<div>something something</div>}
				/>
			</div>
		</>
	);
};
