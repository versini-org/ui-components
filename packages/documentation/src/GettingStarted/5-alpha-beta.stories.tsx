import { linkTo, Story } from "@ladle/react";
import { ButtonIcon } from "@versini/ui-components";
import { IconPrevious } from "@versini/ui-icons";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";

export default {
	title: "Getting Started",
};

export const ReleaseTags: Story<any> = () => (
	<div className="prose prose-lighter mb-6">
		<h1>Release Tags</h1>
		<p className="lead">
			UI components are being made available for consumption as soon as they
			meet our minimum viable requirements. However, during that phase, we
			reserve the right to modify their API or to change their look and feel. To
			help consuming partners, we are applying tags per components: alpha, then
			beta and finally stable.
		</p>

		<h2>Alpha</h2>
		<ul>
			<li>
				<strong>Alpha</strong> components are in the early stages of
				development.
			</li>
			<li>
				<strong>Alpha</strong> components <strong>cannot</strong> be deployed to
				production.
			</li>
			<li>
				<strong>Alpha</strong> components API is subject to change.
			</li>
		</ul>

		<h2>Beta</h2>
		<ul>
			<li>
				<strong>Beta</strong> components <em>can</em> be deployed to production.
			</li>
			<li>
				<strong>Beta</strong> components API is locked and will not change.
			</li>
			<li>
				<strong>Beta</strong> components have no known functionality issues.
			</li>
			<li>
				<strong>Beta</strong> components are not 100% covered by unit tests and
				may have minor visual or accessibility related issues.
			</li>
		</ul>

		<h2>Stable</h2>
		<ul>
			<li>
				<strong>Stable</strong> components <strong>can</strong> be deployed to
				production.
			</li>
			<li>
				<strong>Stable</strong> components API is locked and will not change.
			</li>
			<li>
				<strong>Stable</strong> components are fully tested.
			</li>
			<li>
				<strong>Stable</strong> components have no known visual, functional or
				accessibility related issues.
			</li>
		</ul>

		<div className="mt-8">
			<Flexgrid alignHorizontal="flex-start">
				<FlexgridItem>
					<ButtonIcon
						labelRight="Usage"
						noBorder
						onClick={linkTo("getting-started--usage")}
					>
						<IconPrevious decorative monotone />
					</ButtonIcon>
				</FlexgridItem>
			</Flexgrid>
		</div>
	</div>
);
