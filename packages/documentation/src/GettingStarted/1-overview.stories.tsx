import { linkTo, Story } from "@ladle/react";
import { ButtonIcon } from "@versini/ui-components";
import { IconNext } from "@versini/ui-icons";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";

export default {
	title: "Getting started",
};

export const Overview: Story<any> = () => (
	<>
		<h1 className="mb-0">UI Components</h1>

		<Flexgrid alignVertical="center">
			<FlexgridItem span={{ fallback: 12, lg: 6 }}>
				<blockquote>
					<p className="lead">
						UI Components provides a strong, responsive, and accessible library
						of foundational React components.
					</p>
				</blockquote>

				<ButtonIcon
					spacing={{ t: 8 }}
					labelLeft="Installation"
					onClick={linkTo("getting-started--installation")}
				>
					<IconNext monotone />
				</ButtonIcon>
			</FlexgridItem>
			<FlexgridItem span={{ fallback: 12, lg: 6 }}>
				<img
					className="mt-5"
					src="hero-14.jpg"
					alt="An illustration of web page rendered on both desktop and mobile devices."
					title="Hero image of a web page rendered on both desktop and mobile devices."
				/>
			</FlexgridItem>
		</Flexgrid>

		<h2>Features</h2>

		<ul>
			<li>
				<strong>Strong</strong>: built-in strong components typing via
				TypeScript.
			</li>
			<li>
				<strong>Responsive</strong>: built-in responsive components.
			</li>
			<li>
				<strong>Accessible</strong>: built with accessibility in mind from the
				start.
			</li>
		</ul>

		<h2>Extra</h2>

		<ul>
			<li>
				<strong>TailwindCSS</strong>: built with TailwindCSS, enabling styles
				tree-shaking.
			</li>
			<li>
				<strong>Hooks</strong>: provides a set of hooks to use in your
				application.
			</li>
			<li>
				<strong>Icons</strong>: provides a set of icons to use in your
				application.
			</li>
			<li>
				<strong>Theming</strong>: provides a theming system to customize the
				look of the components.
			</li>
		</ul>
	</>
);
