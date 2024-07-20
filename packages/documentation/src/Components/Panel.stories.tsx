import type { Story } from "@ladle/react";
import { Button, Panel } from "@versini/ui-components";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";
import { useState } from "react";

export default {
	title: "Components/Panel",
	meta: {
		importName: "Panel",
	},
	args: {
		open: false,
		title: "Panel Title",
		borderMode: "light",
		kind: "panel",
	},
	argTypes: {
		borderMode: {
			options: ["dark", "light"],
			control: { type: "radio" },
		},
		kind: {
			options: ["panel", "messagebox"],
			control: { type: "radio" },
		},
	},
};

export const Basic: Story<any> = (args) => {
	const [open, setOpen] = useState(false);
	const onOpenChange = () => {
		setOpen(!open);
	};
	return (
		<>
			<p>
				To open or close the Panel, open the controls at the bottom of the
				screen and select/deselect the open prop.
			</p>
			<Panel
				open={open}
				onOpenChange={onOpenChange}
				footer={
					<Flexgrid alignHorizontal="flex-end" columnGap={2}>
						<FlexgridItem>
							<Button mode="light" focusMode="light">
								Cancel
							</Button>
						</FlexgridItem>
						<FlexgridItem>
							<Button mode="dark" focusMode="light" noBorder>
								Log out
							</Button>
						</FlexgridItem>
					</Flexgrid>
				}
				{...args}
			>
				<p>
					What follows from here is just a bunch of absolute nonsense I have
					written to dogfood the plugin itself. It includes every sensible
					typographic element I could think of, like <strong>bold text</strong>,
					unordered lists, ordered lists, code blocks, block quotes,{" "}
					<em>and even italics</em>.
				</p>
				<p>
					It is important to cover all of these use cases for a few reasons:
				</p>
				<ol>
					<li>We want everything to look good out of the box.</li>
					<li>
						Really just the first reason, that is the whole point of the plugin.
					</li>
					<li>
						Here is a third pretend reason though a list with three items looks
						more realistic than a list with two items.
					</li>
				</ol>
			</Panel>
		</>
	);
};

export const CustomClassName: Story<any> = (args) => {
	const [open, setOpen] = useState(false);
	const onOpenChange = () => {
		setOpen(!open);
	};
	return (
		<>
			<p>
				To open or close the Panel, open the controls at the bottom of the
				screen and select/deselect the open prop.
			</p>
			<Panel
				open={open}
				onOpenChange={onOpenChange}
				footer={
					<Flexgrid alignHorizontal="flex-end" columnGap={2}>
						<FlexgridItem>
							<Button mode="light" focusMode="light">
								Cancel
							</Button>
						</FlexgridItem>
						<FlexgridItem>
							<Button mode="dark" focusMode="light" noBorder>
								Log out
							</Button>
						</FlexgridItem>
					</Flexgrid>
				}
				{...args}
			>
				<p>
					What follows from here is just a bunch of absolute nonsense I have
					written to dogfood the plugin itself. It includes every sensible
					typographic element I could think of, like <strong>bold text</strong>,
					unordered lists, ordered lists, code blocks, block quotes,{" "}
					<em>and even italics</em>.
				</p>
				<p>
					It is important to cover all of these use cases for a few reasons:
				</p>
				<ol>
					<li>We want everything to look good out of the box.</li>
					<li>
						Really just the first reason, that is the whole point of the plugin.
					</li>
					<li>
						Here is a third pretend reason though a list with three items looks
						more realistic than a list with two items.
					</li>
				</ol>
			</Panel>
		</>
	);
};

CustomClassName.args = {
	className: "w-[95%]",
};
