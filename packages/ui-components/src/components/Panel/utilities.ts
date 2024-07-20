import clsx from "clsx";

import { MESSAGEBOX_CLASSNAME, PANEL_CLASSNAME } from "../../common/constants";

export const TYPE_PANEL = "panel";
export const TYPE_MESSAGEBOX = "messagebox";

export const getPanelClassName = ({
	className,
	kind,
	borderMode,
}: {
	className?: string;
	borderMode: "light" | "dark";
	kind: typeof TYPE_MESSAGEBOX | typeof TYPE_PANEL;
}) => {
	return {
		main: clsx("prose prose-lighter flex flex-col bg-surface-medium", {
			[`${PANEL_CLASSNAME} h-full min-h-[95%] sm:h-auto sm:min-h-[10rem] sm:rounded-lg sm:border-2`]:
				kind === TYPE_PANEL,
			[`${PANEL_CLASSNAME} w-full sm:w-[95%] md:max-w-2xl`]:
				kind === TYPE_PANEL && !className,

			[`${MESSAGEBOX_CLASSNAME} rounded-lg border-2`]: kind === TYPE_MESSAGEBOX,
			[`${MESSAGEBOX_CLASSNAME} w-[95%] sm:w-[50%] md:max-w-2xl`]:
				kind === TYPE_MESSAGEBOX && !className,

			[`${className}`]: !!className,

			"sm:border-border-dark": borderMode === "dark" && kind === TYPE_PANEL,
			"sm:border-border-accent": borderMode === "light" && kind === TYPE_PANEL,
			"border-border-dark": borderMode === "dark" && kind === TYPE_MESSAGEBOX,
			"border-border-accent":
				borderMode === "light" && kind === TYPE_MESSAGEBOX,
		}),
		content: "flex flex-grow flex-col py-2 sm:py-4 px-4",
		footer: "flex flex-grow flex-col p-4",
		header: "p-4 mb-0",
		close: "p-4",
	};
};
