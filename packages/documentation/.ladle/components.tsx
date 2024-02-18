import "./styles.css";

import type { GlobalProvider } from "@ladle/react";
import clsx from "clsx";

export const Provider: GlobalProvider = ({ children, globalState }) => {
	const className = clsx(
		"mt-0 flex w-full flex-col p-2 sm:mt-3 md:mx-auto md:max-w-4xl",
		{
			"av-typography": globalState.story.startsWith("getting-started--"),
		},
	);
	return <div className={className}>{children}</div>;
};
