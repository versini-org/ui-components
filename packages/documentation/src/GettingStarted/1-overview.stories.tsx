import { linkTo, Story } from "@ladle/react";
import { ButtonIcon } from "@versini/ui-components";
import { IconNext } from "@versini/ui-icons";

export default {
	title: "Getting started",
};

export const Overview: Story<any> = () => (
	<>
		<h1 className="">UI Components</h1>

		<div className="max-w-md overflow-hidden rounded-md shadow-lg md:max-w-4xl dark:shadow-none">
			<div className="md:flex">
				<div className="bg-surface-medium md:shrink-0">
					<img
						className="my-0 ml-auto mr-auto h-52 w-52 object-cover sm:h-52 sm:w-52 md:h-full md:w-60"
						src="hero-14.jpg"
						alt="An illustration of web page rendered on both desktop and mobile devices"
					/>
				</div>
				<div className="p-4">
					<blockquote>
						<p>
							The UI Components Library provides a strong, responsive, and
							accessible set of foundational React components.
						</p>
					</blockquote>
					<ButtonIcon
						spacing={{ t: 8 }}
						labelLeft="Installation"
						onClick={linkTo("getting-started--installation")}
					>
						<IconNext monotone />
					</ButtonIcon>
				</div>
			</div>
		</div>

		<h2>Features</h2>

		<ul>
			<li>
				<strong>Strong</strong>: built-i2n components typing via TypeScript.
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
