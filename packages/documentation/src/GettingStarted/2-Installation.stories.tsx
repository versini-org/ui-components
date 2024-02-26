import { linkTo, Story } from "@ladle/react";
import { ButtonIcon } from "@versini/ui-components";
import { IconNext, IconPrevious } from "@versini/ui-icons";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";

export default {
	title: "Getting Started",
};

export const Installation: Story<any> = () => (
	<div className="prose prose-lighter max-w-none">
		<h1>Installation</h1>
		<p>
			The <strong>UI-Components</strong> library is available as a npm package.
		</p>
		<pre>
			<code>$ npm install --save @versini/ui-components</code>
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
					noBorder
					onClick={linkTo("getting-started--overview")}
				>
					<IconPrevious decorative monotone />
				</ButtonIcon>
			</FlexgridItem>
			<FlexgridItem>
				<ButtonIcon
					labelLeft="Configuration"
					noBorder
					onClick={linkTo("getting-started--configuration")}
				>
					<IconNext decorative monotone />
				</ButtonIcon>
			</FlexgridItem>
		</Flexgrid>
	</div>
);
