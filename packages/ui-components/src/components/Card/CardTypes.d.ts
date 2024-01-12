import type { SpacingProps } from "../../common";

export type CardProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;

	/**
	 * If the header prop is not provided, the Card must be
	 * described via aria-labelledby.
	 */
	"aria-labelledby"?: string;
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * The content to render in the footer.
	 */
	footer?: React.ReactNode;
	/**
	 * CSS class(es) to add to the footer.
	 */
	footerClassName?: string;
	/**
	 * The content to render in the header.
	 */
	header?: React.ReactNode;
	/**
	 * CSS class(es) to add to the header.
	 */
	headerClassName?: string;
	/**
	 * Whether or not to render the Card with a border.
	 * @default false
	 */
	noBackground?: boolean;
} & SpacingProps;

export type CardHeaderProps = {
	className: string;
	content: React.ReactNode;

	id?: string;
	userAriaLabelledby?: string;
};
