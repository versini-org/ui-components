import { Controls, Primary, Unstyled } from "@storybook/blocks";
import { Pill } from "@versini/ui-pill";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";

import Highlight from "./Highlight";

interface AutoDocProps {
	importName: string;

	header?: string;
	importPackage?: string;
	stage?: "alpha" | "beta" | "stable";
}

export default ({ importName, importPackage, stage, header }: AutoDocProps) => {
	const packageName = importPackage || `ui-${importName.toLowerCase()}`;
	const titleHeader = header || importName;
	let variant: "information" | "warning" | "success", releaseTag;
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
		<>
			<Unstyled>
				<div className="prose">
					<Flexgrid alignVertical="center" className="mb-2" columnGap={3}>
						<FlexgridItem>
							<h1 className="m-0">{titleHeader}</h1>
						</FlexgridItem>
						<FlexgridItem>
							<Pill label={releaseTag} variant={variant} className="mt-2" />
						</FlexgridItem>
					</Flexgrid>

					<div className="prose">
						<Highlight
							codeBlock={`import { ${importName} } from "@versini/${packageName}";`}
						/>
					</div>
				</div>
			</Unstyled>
			<Primary />
			<Controls />
		</>
	);
};
