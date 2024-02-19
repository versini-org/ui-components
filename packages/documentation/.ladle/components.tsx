import "./styles.css";

import {
	ButtonIcon,
	Flexgrid,
	FlexgridItem,
	Footer,
	IconGitHub,
} from "@versini/ui-components";

import type { GlobalProvider } from "@ladle/react";
import clsx from "clsx";

export const Provider: GlobalProvider = ({ children, globalState }) => {
	const className = clsx(
		"mt-0 flex w-full flex-col p-2 sm:mt-3 md:mx-auto md:max-w-4xl",
		{
			"av-typography": globalState.story.startsWith("getting-started--"),
		},
	);
	const handleOnClickGitHub = () => {
		window.open(import.meta.env.REPOSITORY, "_blank", "noopener,noreferrer");
	};
	return (
		<>
			<div className={className}>{children}</div>
			<Footer
				kind="light"
				row1={
					<Flexgrid alignHorizontal="center" alignVertical="center">
						<FlexgridItem className="text-copy-lighter">
							UI Components v{import.meta.env.BUILDVERSION} -
						</FlexgridItem>
						<FlexgridItem>
							<ButtonIcon
								noBorder
								size="small"
								kind="light"
								label="link to UI Components GitHub repository"
								onClick={handleOnClickGitHub}
							>
								<IconGitHub decorative />
							</ButtonIcon>
						</FlexgridItem>
					</Flexgrid>
				}
				row2={
					<div className="text-copy-lighter">
						&copy; {new Date().getFullYear()} {import.meta.env.OWNER}
					</div>
				}
			/>
		</>
	);
};
