import { linkTo } from "@storybook/addon-links";
import { ButtonIcon } from "@versini/ui-button";
import { IconNext, IconPrevious } from "@versini/ui-icons";
import { Flexgrid, FlexgridItem } from "@versini/ui-system";

interface NavigatorsProps {
	leftLink?: string;
	leftLabel?: string;
	rightLink?: string;
	rightLabel?: string;
	paddingTop?: boolean;
}

export default ({
	leftLink,
	leftLabel,
	rightLink,
	rightLabel,
	paddingTop = false,
}: NavigatorsProps) => {
	let mainAlign:
		| "flex-end"
		| "space-between"
		| "flex-start"
		| "normal"
		| "center"
		| "space-around"
		| "space-evenly"
		| undefined = "flex-end";

	/**
	 * If the label is provided but the link is not, we generate the link from the label,
	 * by replacing spaces with dashes and converting to lowercase, and adding "--docs" at the end,
	 * and getting-started- at the beginning.
	 * Example: "Release Tags" -> "getting-started-release-tags--docs"
	 *
	 * This is the default for the main "getting started" pages.
	 */
	if (leftLabel && !leftLink) {
		leftLink = `getting-started-${leftLabel.replace(/\s+/g, "-").toLowerCase()}--docs`;
	}
	if (rightLabel && !rightLink) {
		rightLink = `getting-started-${rightLabel.replace(/\s+/g, "-").toLowerCase()}--docs`;
	}

	if (leftLink && rightLink) {
		mainAlign = "space-between";
	} else if (leftLink) {
		mainAlign = "flex-start";
	}

	return (
		<>
			{paddingTop && <div className="pt-4" />}
			<Flexgrid alignHorizontal={mainAlign}>
				{leftLink && (
					<FlexgridItem>
						<ButtonIcon
							labelRight={leftLabel || leftLink}
							onClick={linkTo(leftLink)}
						>
							<IconPrevious monotone />
						</ButtonIcon>
					</FlexgridItem>
				)}

				{rightLink && (
					<FlexgridItem>
						<ButtonIcon
							labelLeft={rightLabel || rightLink}
							onClick={linkTo(rightLink)}
						>
							<IconNext monotone />
						</ButtonIcon>
					</FlexgridItem>
				)}
			</Flexgrid>
		</>
	);
};
