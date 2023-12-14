import { useFloatingTree, useListItem, useMergeRefs } from "@floating-ui/react";
import * as React from "react";

import { MenuContext } from "./MenuContext";
import type { MenuItemProps } from "./MenuTypes";

export const MenuItem = React.forwardRef<
	HTMLButtonElement,
	MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ label, disabled, ...props }, forwardedRef) => {
	const menu = React.useContext(MenuContext);
	const item = useListItem({ label: disabled ? null : label });
	const tree = useFloatingTree();

	return (
		<button
			{...props}
			ref={useMergeRefs([item.ref, forwardedRef])}
			type="button"
			role="menuitem"
			className="m-0 flex w-full items-center justify-between rounded-md border border-transparent bg-none px-3 py-2 text-left text-base outline-none focus:border focus:border-border-medium focus:bg-surface-lighter focus:underline disabled:cursor-not-allowed disabled:text-copy-medium sm:py-1"
			tabIndex={0}
			disabled={disabled}
			{...menu.getItemProps({
				onClick(event: React.MouseEvent<HTMLButtonElement>) {
					props.onClick?.(event);
					tree?.events.emit("click");
				},
				onFocus(event: React.FocusEvent<HTMLButtonElement>) {
					props.onFocus?.(event);
					menu.setHasFocusInside(true);
				},
			})}
		>
			{label}
		</button>
	);
});
