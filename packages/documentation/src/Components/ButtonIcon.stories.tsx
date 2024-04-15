import type { Story } from "@ladle/react";
import { ButtonIcon } from "@versini/ui-components";
import {
	IconEdit,
	IconNext,
	IconPrevious,
	IconSettings,
} from "@versini/ui-icons";

export const Basic: Story<any> = (args) => (
	<div className="flex flex-wrap gap-2">
		<ButtonIcon {...args}>
			<IconSettings />
		</ButtonIcon>
		<ButtonIcon {...args}>
			<IconSettings />
		</ButtonIcon>
		<ButtonIcon {...args}>
			<IconEdit className="h-3 w-3" />
		</ButtonIcon>
		<ButtonIcon {...args}>
			<IconEdit />
		</ButtonIcon>
	</div>
);

export const WithLabel: Story<any> = (args) => (
	<>
		<div className="flex flex-wrap gap-2">
			<ButtonIcon labelRight="Settings" {...args}>
				<IconSettings />
			</ButtonIcon>
			<ButtonIcon labelRight="Settings" {...args}>
				<IconSettings />
			</ButtonIcon>
			<ButtonIcon labelRight="Edit" {...args}>
				<IconEdit className="h-3 w-3" />
			</ButtonIcon>
			<ButtonIcon labelRight="Edit" {...args}>
				<IconEdit />
			</ButtonIcon>
		</div>
		<div className="mt-2 flex flex-wrap gap-2">
			<ButtonIcon labelLeft="Settings" {...args}>
				<IconSettings />
			</ButtonIcon>
			<ButtonIcon labelLeft="Settings" {...args}>
				<IconSettings />
			</ButtonIcon>
			<ButtonIcon labelLeft="Edit" {...args}>
				<IconEdit className="h-3 w-3" />
			</ButtonIcon>
			<ButtonIcon labelLeft="Edit" {...args}>
				<IconEdit />
			</ButtonIcon>
		</div>
		<div className="mt-2 flex flex-wrap gap-2">
			<ButtonIcon labelRight="Previous page" {...args}>
				<IconPrevious monotone />
			</ButtonIcon>
			<ButtonIcon labelLeft="Next page" {...args}>
				<IconNext monotone />
			</ButtonIcon>
		</div>
	</>
);

export default {
	title: "Components/ButtonIcon",
	meta: {
		importName: "ButtonIcon",
	},
	args: {
		disabled: false,
		fullWidth: false,
		mode: "system",
		focusMode: "system",
		type: "button",
		raw: false,
		noBorder: false,
		noBackground: false,
		size: "medium",
		label: "some label",
		align: "center",
	},
	argTypes: {
		align: {
			options: ["center", "left", "right"],
			control: { type: "radio" },
		},
		mode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
		focusMode: {
			options: ["dark", "light", "system", "alt-system"],
			control: { type: "radio" },
		},
		size: {
			options: ["small", "medium", "large"],
			control: { type: "radio" },
		},
	},
};
