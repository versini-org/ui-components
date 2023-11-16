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
	disabled: boolean;
	fullWidth: boolean;
	slim?: boolean;
};

const getButtonClassesByType = (type: string, slim?: boolean) => {
	switch (type) {
		case TYPE_BUTTON:
			return clsx("text-sm font-medium sm:text-base", {
				"px-4 py-2": !slim,
				"px-2 py-1 sm:px-4": slim,
			});
		case TYPE_LINK:
			return clsx("max-h-8 px-0 py-1 text-center text-sm sm:px-4", {
				"px-0 py-1 sm:px-4": !slim,
			});
		case TYPE_ICON:
			return "p-2";
	}
};

const getButtonClassesByKind = (kind: string, disabled: boolean) => {
	const baseClasses =
		kind === "dark"
			? "text-slate-200 bg-accent-900"
			: "bg-slate-500 text-slate-200";
	const hoverClasses = disabled
		? ""
		: kind === "dark"
		  ? "hover:bg-slate-800 active:bg-slate-700 active:text-slate-300"
		  : "hover:bg-slate-600 active:bg-slate-700 active:text-slate-300";
	return clsx(baseClasses, hoverClasses);
};

export const getButtonClasses = ({
	type,
	className,
	raw,
	kind,
	disabled,
	fullWidth,
	slim,
}: getButtonClassesProps) => {
	return raw
		? clsx(BUTTON_CLASSNAME, className)
		: clsx(
				BUTTON_CLASSNAME,
				className,
				"rounded-full focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-0",
				getButtonClassesByType(type, slim),
				getButtonClassesByKind(kind, disabled),
				{
					"w-full": fullWidth,
					"disabled:cursor-not-allowed disabled:opacity-50": disabled,
				},
		  );
};
