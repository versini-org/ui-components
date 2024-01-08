import type { SpacingType } from "../../common";

export type CardProps = {
	className?: string;
	header?: React.ReactNode;
	headerClassName?: string;
	footer?: React.ReactNode;
	footerClassName?: string;
	children: React.ReactNode;
	noBackground?: boolean;
	"aria-labelledby"?: string;
	spacing?: SpacingType;
};

export type CardHeaderProps = {
	id?: string;
	content: React.ReactNode;
	userAriaLabelledby?: string;
	className: string;
};
