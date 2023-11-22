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

const getButtonSizesClasses = (type: string, slim?: boolean) => {
	switch (type) {
		case TYPE_BUTTON:
			return clsx("text-sm font-medium sm:text-base", {
				"max-h-9 px-4 py-1": !slim,
				"max-h-8 px-2 py-0 sm:px-4": slim,
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

const getButtonBaseClasses = (kind: string) => {
	return `rounded-full bg-action-${kind} text-copy-light`;
};

const getButtonHoverClasses = (kind: string, disabled: boolean) => {
	return disabled ? "" : `hover:bg-action-${kind}-hover`;
};

const getButtonActiveClasses = (kind: string, disabled: boolean) => {
	return disabled
		? ""
		: `active:bg-action-${kind}-active active:text-copy-medium`;
};

const getButtonBorderClasses = (kind: string, noBorder: boolean) => {
	const borderOpacity = noBorder ? "0" : "100";
	return `border-2 border-border-${kind}/${borderOpacity}`;
};

const getButtonFocusClasses = (focus: string) => {
	return `focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-focus-${focus}`;
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
				getButtonBaseClasses(kind),
				getButtonSizesClasses(type, slim),
				getButtonBorderClasses(kind, noBorder),
				getButtonFocusClasses(focus),
				getButtonHoverClasses(kind, disabled),
				getButtonActiveClasses(kind, disabled),
				{
					"w-full": fullWidth,
					"disabled:cursor-not-allowed disabled:opacity-50": disabled,
				},
		  );
};
