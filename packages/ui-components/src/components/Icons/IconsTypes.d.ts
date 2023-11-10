import { SpacingType } from "../../common";

export type IconsProps = {
	className?: string;
	viewBox?: string;
	spacing?: SpacingType;
} & React.SVGAttributes<SVGElement>;
