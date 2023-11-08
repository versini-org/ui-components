import { SpacingType } from "../../common/commonTypes";

export type IconsProps = {
	className?: string;
	viewBox?: string;
	spacing?: SpacingType;
} & React.SVGAttributes<SVGElement>;
