import type { Story } from "@ladle/react";
import {
	IconBack,
	IconChart,
	IconClose,
	IconCopied,
	IconCopy,
	IconDelete,
	IconEdit,
	IconHide,
	IconHistory,
	IconInfo,
	IconProfile,
	IconRestore,
	IconSettings,
	IconShow,
	IconUser,
} from "@versini/ui-components";

export const Basic: Story<any> = (args) => (
	<div className="flex flex-wrap gap-2">
		<IconBack {...args} />
		<IconChart {...args} />
		<IconClose {...args} />
		<IconCopied {...args} />
		<IconCopy {...args} />
		<IconDelete {...args} />
		<IconEdit {...args} />
		<IconHide {...args} />
		<IconHistory {...args} />
		<IconInfo {...args} />
		<IconProfile {...args} />
		<IconRestore {...args} />
		<IconSettings {...args} />
		<IconShow {...args} />
		<IconUser {...args} />
	</div>
);

Basic.args = {
	monotone: false,
	decorative: false,
};
