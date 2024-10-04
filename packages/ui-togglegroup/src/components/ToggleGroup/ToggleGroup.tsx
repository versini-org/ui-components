import * as ToggleGroupRadix from "@radix-ui/react-toggle-group";

import { useContext } from "react";
import { ToggleGroupContext } from "./ToggleGroupContext";
import type {
	ToggleGroupItemProps,
	ToggleGroupProps,
} from "./ToggleGroupTypes";
import { getToggleGroupClasses, getToggleGroupItemClasses } from "./utilities";

export const ToggleGroup = ({
	children,
	value,
	onValueChange,
	disabled,
	mode = "system",
	focusMode = "system",
	size = "medium",
	defaultValue,
	spacing,

	...otherProps
}: ToggleGroupProps) => {
	const toggleGroupClasses = getToggleGroupClasses({ mode, spacing });
	const contextValue = { size, focusMode, mode };
	return (
		<ToggleGroupContext.Provider value={contextValue}>
			<ToggleGroupRadix.Root
				disabled={disabled}
				className={toggleGroupClasses}
				value={value}
				defaultValue={defaultValue}
				onValueChange={onValueChange}
				{...otherProps}
				type="single"
			>
				{children}
			</ToggleGroupRadix.Root>
		</ToggleGroupContext.Provider>
	);
};

export const ToggleGroupItem = ({ value, disabled }: ToggleGroupItemProps) => {
	const { size, focusMode, mode } = useContext(ToggleGroupContext);
	const toggleGroupItemClasses = getToggleGroupItemClasses({
		focusMode,
		mode,
		size,
	});

	return (
		<ToggleGroupRadix.Item
			disabled={disabled}
			className={toggleGroupItemClasses}
			value={value}
		>
			{value}
		</ToggleGroupRadix.Item>
	);
};
