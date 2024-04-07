import clsx from "clsx";

import { MESSAGEBOX_CLASSNAME, PANEL_CLASSNAME } from "../../common/constants";

export const TYPE_PANEL = "panel";
export const TYPE_MESSAGEBOX = "messagebox";

export const getPanelClassName = ({
	kind,
	borderMode,
}: {
	borderMode: "light" | "dark";
	kind: typeof TYPE_MESSAGEBOX | typeof TYPE_PANEL;
}) => {
	return {
		main: clsx(
			"prose prose-lighter flex flex-col bg-surface-medium md:max-w-2xl",
			{
				[`${PANEL_CLASSNAME} h-full min-h-[95%] w-full sm:h-auto sm:min-h-[10rem] sm:w-[95%] sm:rounded-lg sm:border-2`]:
					kind === TYPE_PANEL,
				[`${MESSAGEBOX_CLASSNAME} w-[95%] rounded-lg border-2 sm:w-[50%]`]:
					kind === TYPE_MESSAGEBOX,
				"sm:border-border-dark": borderMode === "dark" && kind === TYPE_PANEL,
				"sm:border-border-accent":
					borderMode === "light" && kind === TYPE_PANEL,
				"border-border-dark": borderMode === "dark" && kind === TYPE_MESSAGEBOX,
				"border-border-accent":
					borderMode === "light" && kind === TYPE_MESSAGEBOX,
			},
		),
		content: "flex flex-grow flex-col py-2 sm:py-4 px-4",
		footer: "flex flex-grow flex-col p-4",
		header: "p-4 mb-0",
		close: "p-4",
	};
};
