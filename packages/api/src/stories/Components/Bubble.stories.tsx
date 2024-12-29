import type { Meta, StoryObj } from "@storybook/react";

import "@versini/ui-bubble/dist/style.css";
import { Bubble } from "../../../../ui-bubble/src/components";
import { commonControlsSetup } from "../../helpers/constants";

type Story = StoryObj<typeof Bubble>;

const meta: Meta<typeof Bubble> = {
	parameters: {
		layout: "centered",
		docs: { ...commonControlsSetup.parameters },
	},
	title: "Components/Bubble",

	component: Bubble,
	argTypes: {
		children: {
			control: { disable: true },
		},
		copyToClipboard: {
			control: { disable: true },
		},
		footer: {
			control: { disable: true },
		},
		rawFooter: {
			control: { disable: true },
		},
	},
};

export default meta;

export const Basic: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className="h-96 min-h-10 bg-slate-900 p-11 w-96">
			<Bubble kind="right" className="mb-4" {...args}>
				Right bubble...
			</Bubble>

			<Bubble kind="left" {...args}>
				Left bubble...
			</Bubble>
		</div>
	),
};

const string = "DOM element with string";
export const Copy: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className=" bg-slate-900 h-full min-h-10 p-11">
			<Bubble kind="right" className="mb-4" copyToClipboard {...args}>
				Right bubble...
			</Bubble>

			<Bubble kind="left" className="mb-4" copyToClipboard {...args}>
				Pure string with boolean
			</Bubble>

			<Bubble kind="left" className="mb-4" copyToClipboard {...args}>
				<div>DOM element with boolean</div>
			</Bubble>

			<Bubble
				kind="left"
				className="mb-4"
				copyToClipboard={() => {
					navigator.clipboard.writeText("DOM element with function");
				}}
				{...args}
			>
				<div>DOM element with function</div>
			</Bubble>

			<Bubble kind="left" copyToClipboard={string} {...args}>
				<div>{string}</div>
			</Bubble>
		</div>
	),
};

export const LongText: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className="h-full min-h-10 bg-slate-900 p-11">
			<Bubble kind="right" className="mb-4" {...args}>
				I have Vodka, St Germain and Grapefruit Juice. Can you suggest a few
				cocktails I can make with these ingredients?
			</Bubble>

			<Bubble kind="left" {...args}>
				<p>
					Certainly! With the ingredients you have, here are a few cocktail
					suggestions:
				</p>
				<ol>
					<li>
						<p>
							<strong>Elderflower Greyhound</strong>:
						</p>
						<ul>
							<li>Ingredients: Vodka, St Germain, Grapefruit Juice</li>
							<li>
								Recipe: Mix 2 parts vodka, 1 part St Germain, and 3 parts
								grapefruit juice in a shaker with ice. Shake well and strain
								into a glass filled with ice. Garnish with a grapefruit slice or
								twist.
							</li>
						</ul>
					</li>
					<li>
						<p>
							<strong>Elderflower Spritz</strong>:
						</p>
						<ul>
							<li>
								Ingredients: Vodka, St Germain, Grapefruit Juice, Club Soda
							</li>
							<li>
								Recipe: Fill a glass with ice, then add 1 part vodka, 1 part St
								Germain, and 1 part grapefruit juice. Stir gently, then top with
								club soda. Garnish with a grapefruit slice or mint sprig.
							</li>
						</ul>
					</li>
					<li>
						<p>
							<strong>Elderflower Martini</strong>:
						</p>
						<ul>
							<li>Ingredients: Vodka, St Germain</li>
							<li>
								Recipe: In a mixing glass filled with ice, combine 2 parts vodka
								and 1 part St Germain. Stir well until chilled, then strain into
								a chilled martini glass. Optionally, garnish with a lemon twist
								or edible flower.
							</li>
						</ul>
					</li>
				</ol>
				<p>
					Remember to adjust the ratios according to your taste preferences and
					enjoy your homemade cocktails responsibly! Cheers!
				</p>
			</Bubble>
		</div>
	),
};

export const WithFooter: Story = {
	...commonControlsSetup,
	render: (args) => (
		<div className="h-96 min-h-10 bg-slate-900 p-11">
			<Bubble
				kind="right"
				className="mb-4"
				footer={{
					Model: "gpt-4-1106-preview",
				}}
				{...args}
			>
				What is your name and what can you do for me?
			</Bubble>

			<Bubble
				kind="left"
				footer={{
					Model: "gpt-4-1106-preview",
					Plugin: "OpenAI",
					["Processing time"]: "1234ms",
				}}
				{...args}
			>
				Hi, my name is UI, ask me anything!
			</Bubble>
		</div>
	),
};
