import clsx from "clsx";

import { MESSSAGEBOX_CLASSNAME, PANEL_CLASSNAME } from "../../common/constants";

export const TYPE_PANEL = "panel";
export const TYPE_MESSAGEBOX = "messagebox";

export const getPanelClassName = ({
	kind,
	borderKind,
}: {
	kind: string;
	borderKind: string;
}) => {
	return {
		main: clsx("flex flex-col bg-surface-medium md:max-w-2xl", {
			[`${PANEL_CLASSNAME} h-full min-h-[95%] w-full sm:h-auto sm:min-h-[10rem] sm:w-[95%] sm:rounded-lg`]:
				kind === TYPE_PANEL,
			[`${MESSSAGEBOX_CLASSNAME} w-[95%] rounded-lg sm:w-[50%]`]:
				kind === TYPE_MESSAGEBOX,
			"sm:border-2 sm:border-border-dark":
				borderKind === "dark" && kind === TYPE_PANEL,
			"sm:border-2 sm:border-border-light":
				borderKind === "light" && kind === TYPE_PANEL,
			"border-2 border-border-dark":
				borderKind === "dark" && kind === TYPE_MESSAGEBOX,
			"border-2 border-border-light":
				borderKind === "light" && kind === TYPE_MESSAGEBOX,
		}),
		content: "flex flex-grow flex-col p-2 sm:p-4",
	};
};
