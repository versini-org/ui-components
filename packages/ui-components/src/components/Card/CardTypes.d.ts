export type CardProps = {
	className?: string;
	header?: React.ReactNode;
	headerClassName?: string;
	footer?: React.ReactNode;
	footerClassName?: string;
	children: React.ReactNode;
	noBackground?: boolean;
	"aria-labelledby"?: string;
};

export type CardHeaderProps = {
	id?: string;
	content: React.ReactNode;
	userAriaLabelledby: string | undefined;
	className: string;
};
