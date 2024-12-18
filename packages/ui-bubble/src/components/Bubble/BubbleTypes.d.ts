import type { SpacingProps } from "@versini/ui-private/dist/utilities";

export type BubbleProps = {
	/**
	 * The text to render in the bubble.
	 */
	children: React.ReactNode;
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * Whether or not to show a "copy/paste" icon next to the Bubble.
	 * - If a function is passed, it will be called with the text to copy.
	 * - If a string is passed, that string will be copied.
	 * - If a boolean is passed, the children will be copied.
	 */
	copyToClipboard?: boolean | string | ((text: any) => void);
	/**
	 * The type of focus for the Copy Button. This will change the color
	 * of the focus ring around the Button.
	 */
	copyToClipboardFocusMode?: "dark" | "light" | "system" | "alt-system";
	/**
	 * The mode of Copy Button. This will change the color of the Button.
	 */
	copyToClipboardMode?: "dark" | "light" | "system" | "alt-system";
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
