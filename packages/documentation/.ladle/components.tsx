import "./styles.css";

import { ButtonIcon, Footer, Pill } from "@versini/ui-components";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";

import type { GlobalProvider } from "@ladle/react";
import { IconGitHub } from "@versini/ui-icons";
import clsx from "clsx";

const renderImportLine = ({
	importName,
	importPackage,
	stage,
	header,
}: {
	importName: string;
	importPackage?: string;
	stage?: string;
	header?: string;
}) => {
	let variant: "information" | "warning" | "success", releaseTag;
	const packageName = importPackage || "ui-components";
	const titleHeader = header || importName;

	switch (stage) {
		case "beta":
			variant = "information";
			releaseTag = "beta";
			break;
		case "stable":
			variant = "success";
			releaseTag = "stable";
			break;
		default:
			variant = "warning";
			releaseTag = "alpha";
			break;
	}

	return (
		<div className="mb-6">
			<Flexgrid alignVertical="center" className="mb-2" columnGap={3}>
				<FlexgridItem>
					<h1 className="m-0">{titleHeader}</h1>
				</FlexgridItem>
				<FlexgridItem>
					<Pill label={releaseTag} variant={variant} className="mt-2" />
				</FlexgridItem>
			</Flexgrid>

			<pre className="mt-0">
				<code className="text-wrap">{`import { ${importName} } from "@versini/${packageName}";`}</code>
			</pre>
		</div>
	);
};

export const Provider: GlobalProvider = ({
	children,
	storyMeta,
	globalState,
}) => {
	const className = clsx("prose", {
		"mt-0 flex w-full flex-col p-2 sm:mt-3 md:mx-auto md:max-w-4xl":
			globalState.mode === "full",
		"prose-dark dark:prose-lighter":
			!globalState?.story.startsWith("styles--typography"),
	});
	const handleOnClickGitHub = () => {
		window.open(import.meta.env.REPOSITORY, "_blank", "noopener,noreferrer");
	};
	return (
		<>
			<div className={className}>
				{storyMeta?.importName && globalState.mode === "full"
					? renderImportLine({
							importName: storyMeta.importName,
							importPackage: storyMeta?.importPackage,
							header: storyMeta?.header,
							stage: storyMeta?.stage,
						})
					: null}
				{children}
			</div>
			{globalState.mode === "full" && (
				<Footer
					mode="system"
					row1={
						<ButtonIcon
							noBorder
							size="small"
							mode="system"
							spacing={{ b: 2 }}
							label="link to UI Components GitHub repository"
							onClick={handleOnClickGitHub}
						>
							<IconGitHub />
						</ButtonIcon>
					}
					row2={
						<div>
							UI Components - &copy; {new Date().getFullYear()}{" "}
							{import.meta.env.OWNER}
						</div>
					}
				/>
			)}
		</>
	);
};
