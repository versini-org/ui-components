import clsx from "clsx";

import { BUTTON_CLASSNAME } from "../../common/constants";

export const TYPE_ICON = "icon";
export const TYPE_BUTTON = "button";
export const TYPE_LINK = "link";

type getButtonClassesProps = {
	type: typeof TYPE_BUTTON | typeof TYPE_ICON | typeof TYPE_LINK;
	className?: string;
	raw: boolean;
	kind: string;
	focus: string;
	disabled: boolean;
	fullWidth: boolean;
	slim?: boolean;
	noBorder: boolean;
};

const getButtonClassesByType = (type: string, slim?: boolean) => {
	switch (type) {
		case TYPE_BUTTON:
			return clsx("text-sm font-medium sm:text-base", {
				"px-4 py-1": !slim,
				"px-2 py-0 sm:px-4": slim,
			});
		case TYPE_LINK:
			return clsx("max-h-8 text-center text-sm", {
				"px-4 py-1": !slim,
				"px-2 py-0 sm:px-4": slim,
			});
		case TYPE_ICON:
			return "p-2";
	}
};

const getButtonClassesByKind = (
	kind: string,
	disabled: boolean,
	noBorder: boolean,
) => {
	const hoverClasses = disabled
		? ""
		: kind === "dark"
		? "hover:bg-action-primary-hover active:bg-action-primary-active"
		: "hover:bg-action-secondary-hover active:bg-action-secondary-active";

	return clsx("border-2", hoverClasses, {
		"border-border-dark/100": kind === "dark" && !noBorder,
		"border-border-dark/0": kind === "dark" && noBorder,
		"border-border-light/100": kind === "light" && !noBorder,
		"border-border-light/0": kind === "light" && noBorder,
		"bg-action-primary text-copy-light": kind === "dark",
		"bg-action-secondary text-copy-light": kind === "light",
	});
};

const getButtonClassesByFocus = (focus: string) => {
	const baseClasses = "focus:ring-2 focus:ring-offset-0 focus:outline-none";

	return clsx(baseClasses, {
		"focus:ring-focus-dark": focus === "dark",
		"focus:ring-focus-light": focus === "light",
	});
};

export const getButtonClasses = ({
	type,
	className,
	raw,
	kind,
	focus,
	disabled,
	fullWidth,
	slim,
	noBorder,
}: getButtonClassesProps) => {
	return raw
		? clsx(BUTTON_CLASSNAME, className)
		: clsx(
				BUTTON_CLASSNAME,
				className,
				"rounded-full",
				getButtonClassesByFocus(focus),
				getButtonClassesByType(type, slim),
				getButtonClassesByKind(kind, disabled, noBorder),
				{
					"w-full": fullWidth,
					"disabled:cursor-not-allowed disabled:opacity-50": disabled,
				},
		  );
};
