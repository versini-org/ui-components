import type { SpacingProps } from "../../common";

export type BubbleProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * Whether or not to show a "copy/paste" icon next to the Bubble.
	 */
	copyToClipboard?: boolean | string | ((text: any) => void);
	/**
	 * Object depicting the extra rows for the Bubble.
	 * @example
	 * ```tsx
	 * <Bubble
	 * 	footer={{
	 * 		"Sent": "12:00 PM",
	 * 		"Delivered": "12:01 PM",
	 * 		"Read": "12:02 PM",
	 * 	}}
	 * >Hello World</Bubble>
	 * ```
	 */
	footer?: {
		[key: string]: string | number | undefined | null;
	};
	/**
	 * The type of Bubble. This will change the color of the Bubble
	 * as well as the chevron location.
	 */
	kind?: "left" | "right";
	/**
	 * Same as "footer" but accepts raw JSX.
	 */
	rawFooter?: React.ReactNode;
} & SpacingProps;
