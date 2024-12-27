import { useFloatingTree, useListItem, useMergeRefs } from "@floating-ui/react";
import clsx from "clsx";
import * as React from "react";

import { MenuContext } from "./MenuContext";
import type { MenuItemProps, MenuSeparatorProps } from "./MenuTypes";

export const MenuItem = React.forwardRef<
	HTMLButtonElement,
	MenuItemProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(
	(
		{
			label,
			disabled,
			icon,
			raw = false,
			children,
			ignoreClick = false,
			...props
		},
		forwardedRef,
	) => {
		let buttonSpanClass = "";
		const menu = React.useContext(MenuContext);
		const item = useListItem({ label: disabled ? null : label });
		const tree = useFloatingTree();
		const mergedRef = useMergeRefs([item.ref, forwardedRef]);

		if (raw && children) {
			return (
				<div
					role="menuitem"
					{...menu.getItemProps({
						onClick(event: React.MouseEvent<HTMLButtonElement>) {
							if (!ignoreClick) {
								props.onClick?.(event);
								tree?.events.emit("click");
							}
						},
					})}
				>
					{children}
				</div>
			);
		}

		if (icon) {
			buttonSpanClass = "pl-2";
		}

		return (
			<button
				{...props} // this needs to be first to allow override
				ref={mergedRef}
				role="menuitem"
				className="m-0 flex w-full rounded-md border border-transparent bg-none px-2 py-2 text-left text-base outline-none focus:border focus:border-border-medium focus:bg-surface-lighter focus:underline disabled:cursor-not-allowed disabled:text-copy-medium sm:py-1"
				tabIndex={0}
				disabled={disabled}
				{...menu.getItemProps({
					onClick(event: React.MouseEvent<HTMLButtonElement>) {
						if (!ignoreClick) {
							props.onClick?.(event);
							tree?.events.emit("click");
						}
					},
					onFocus(event: React.FocusEvent<HTMLButtonElement>) {
						props.onFocus?.(event);
						menu.setHasFocusInside(true);
					},
				})}
			>
				{icon}
				{label && <span className={buttonSpanClass}>{label}</span>}
			</button>
		);
	},
);

MenuItem.displayName = "MenuItem";

export const MenuSeparator = ({ className, ...props }: MenuSeparatorProps) => {
	const separatorClass = clsx(className, "my-1 border-t border-border-medium");
	return <div className={separatorClass} {...props} />;
};
