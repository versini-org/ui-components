import type { SpacingType } from "../../../common";

export type SvgIconProps = {
	children: React.ReactNode;
	defaultViewBox: string;

	fill?: string;
	className?: string;
	defaultClassName?: string;
	viewBox?: string;
	spacing?: SpacingType;
};

// & React.SVGAttributes<SVGElement>;
