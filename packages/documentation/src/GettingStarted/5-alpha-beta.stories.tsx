/* eslint-disable react/no-unescaped-entities */

import { linkTo, Story } from "@ladle/react";
import { ButtonIcon, Pill } from "@versini/ui-components";
import { IconPrevious } from "@versini/ui-icons";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";

export default {
	title: "Getting Started",
};

export const ReleaseTags: Story<any> = () => (
	<>
		<h1>Release Tags</h1>
		<p className="lead">
			UI components are being made available for consumption as soon as they
			meet our minimum viable requirements. However, during that phase, we
			reserve the right to modify their API or to change their look and feel. To
			help consuming partners, we are applying tags per components: alpha, then
			beta and finally stable.
		</p>

		<p>
			<strong>NOTE:</strong> component stage is indicated by a little "pill"
			located to the right of the component title.
		</p>

		<Flexgrid alignVertical="center" columnGap={3}>
			<FlexgridItem>
				<h2 className="m-0">Alpha</h2>
			</FlexgridItem>
			<FlexgridItem>
				<Pill label="alpha" variant="warning" />
			</FlexgridItem>
		</Flexgrid>
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

		<Flexgrid alignVertical="center" columnGap={3}>
			<FlexgridItem>
				<h2 className="m-0">Beta</h2>
			</FlexgridItem>
			<FlexgridItem>
				<Pill label="beta" variant="information" />
			</FlexgridItem>
		</Flexgrid>
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

		<Flexgrid alignVertical="center" columnGap={3}>
			<FlexgridItem>
				<h2 className="m-0">Stable</h2>
			</FlexgridItem>
			<FlexgridItem>
				<Pill label="stable" variant="success" />
			</FlexgridItem>
		</Flexgrid>
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
						onClick={linkTo("getting-started--usage")}
					>
						<IconPrevious monotone />
					</ButtonIcon>
				</FlexgridItem>
			</Flexgrid>
		</div>
	</>
);
