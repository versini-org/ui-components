import { SpacingType } from "../../common";

export interface IconsProps
	extends Omit<React.SVGAttributes<SVGElement>, "spacing"> {
	spacing?: SpacingType;
	decorative?: boolean;
	monotone?: boolean;
	title?: string;
}
