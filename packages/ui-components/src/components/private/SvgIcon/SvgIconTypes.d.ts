import type { SpacingType } from "../../../common";

export type SvgIconProps = {
	children: React.ReactNode;
	defaultViewBox: string;
	title: string;

	decorative?: boolean;
	fill?: string;
	className?: string;
	defaultClassName?: string;
	viewBox?: string;
	spacing?: SpacingType;
};
