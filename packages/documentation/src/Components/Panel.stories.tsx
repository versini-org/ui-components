import type { Story } from "@ladle/react";
import { Button, Panel } from "@versini/ui-components";
import { useState } from "react";

export default {
	title: "Components/Panel",
	args: {
		open: false,
		title: "Panel Title",
		children: "Panel Content",
		borderKind: "light",
		kind: "panel",
	},
	argTypes: {
		borderKind: {
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
				To open or close to Panel, open the controls and select/deselect the
				open prop.
			</p>
			<Panel
				open={open}
				onOpenChange={onOpenChange}
				footer={
					<div className="flex flex-row-reverse gap-2">
						<Button noBorder>Log out</Button>
						<Button kind="light">Cancel</Button>
					</div>
				}
				{...args}
			/>
		</>
	);
};
