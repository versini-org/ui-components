import "./styles.css";

import { ButtonIcon, Footer, IconGitHub } from "@versini/ui-components";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";

import type { GlobalProvider } from "@ladle/react";
import clsx from "clsx";

const renderImportLine = (importName: string, stage?: string) => {
	const releaseTag = stage ? stage : "alpha";
	return (
		<div className="mb-6">
			<Flexgrid alignVertical="flex-end" className="mb-2">
				<FlexgridItem>
					<h1 className="m-0">{importName}</h1>
				</FlexgridItem>
				<FlexgridItem>
					<p className="m-0 pl-2">stage: {releaseTag}</p>
				</FlexgridItem>
			</Flexgrid>

			<pre className="mt-0">
				<code>{`import { ${importName} } from "@versini/ui-components";`}</code>
			</pre>
		</div>
	);
};

export const Provider: GlobalProvider = ({ children, storyMeta }) => {
	const className = clsx(
		"prose prose-lighter mt-0 flex w-full flex-col p-2 sm:mt-3 md:mx-auto md:max-w-4xl",
	);
	const handleOnClickGitHub = () => {
		window.open(import.meta.env.REPOSITORY, "_blank", "noopener,noreferrer");
	};
	return (
		<>
			<div className={className}>
				{storyMeta?.importName
					? renderImportLine(storyMeta.importName, storyMeta?.stage)
					: null}
				{children}
			</div>
			<Footer
				kind="light"
				row1={
					<ButtonIcon
						noBorder
						size="small"
						kind="light"
						spacing={{ b: 2 }}
						label="link to UI Components GitHub repository"
						onClick={handleOnClickGitHub}
					>
						<IconGitHub decorative />
					</ButtonIcon>
				}
				row2={
					<div className="text-copy-lighter">
						UI Components v{import.meta.env.BUILDVERSION} - &copy;{" "}
						{new Date().getFullYear()} {import.meta.env.OWNER}
					</div>
				}
			/>
		</>
	);
};
