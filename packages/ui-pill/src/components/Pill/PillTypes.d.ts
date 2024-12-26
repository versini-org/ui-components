import type { SpacingTypes } from "@versini/ui-types";

export type PillProps = {
	/**
	 * Content of the Pill.
	 */
	label: string;
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * Hidden label adjacent to the pill text to provide added
	 * context for screen reader users, ideally no more
	 * than 2-3 words.
	 */
	description?: string;
	/**
	 * Theme of the Pill.
	 * @default "information"
	 */
	variant?: "information" | "warning" | "error" | "success";
} & SpacingTypes.Props;
