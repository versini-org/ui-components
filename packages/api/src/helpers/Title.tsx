import { Unstyled } from "@storybook/blocks";
import { Pill } from "@versini/ui-pill";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";

interface TitleProps {
	label: string;
	level: "beta" | "stable" | "alpha";
}

export default ({ label, level }: TitleProps) => {
	let variant: "information" | "warning" | "success", releaseTag;
	switch (level) {
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
		<Unstyled>
			<div className="prose">
				<Flexgrid alignVertical="center" className="mb-2" columnGap={3}>
					<FlexgridItem>
						<h1 className="m-0">{label}</h1>
					</FlexgridItem>
					<FlexgridItem>
						<Pill label={releaseTag} variant={variant} className="mt-2" />
					</FlexgridItem>
				</Flexgrid>
			</div>
		</Unstyled>
	);
};
