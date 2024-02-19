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

const renderImportLine = (importName: string) => {
	return (
		<div className="docs-typography">
			<h1>{importName}</h1>
			<pre className="ladle-markdown">
				<div
					className="prism-code language-bash"
					style={{
						color: "rgb(57, 58, 52)",
						backgroundColor: "var(--ladle-bg-color-secondary)",
						textAlign: "left",
						margin: "0.5em 0px 1em",
						padding: "1em",
					}}
				>
					<div>
						<span className="token plain">{`import { ${importName} } from "@versini/ui-components";`}</span>
					</div>
				</div>
			</pre>
		</div>
	);
};

export const Provider: GlobalProvider = ({
	children,
	globalState,
	storyMeta,
}) => {
	const className = clsx(
		"mt-0 flex w-full flex-col p-2 sm:mt-3 md:mx-auto md:max-w-4xl",
		{
			"docs-typography": globalState.story.startsWith("getting-started--"),
		},
	);
	const handleOnClickGitHub = () => {
		window.open(import.meta.env.REPOSITORY, "_blank", "noopener,noreferrer");
	};
	return (
		<>
			<div className={className}>
				{storyMeta?.importName ? renderImportLine(storyMeta.importName) : null}
				{children}
			</div>
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
