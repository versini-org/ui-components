import type { SpacingTypes } from "@versini/ui-types";

export type ThemeProviderProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
	/**
	 * CSS class(es) to add to the main component wrapper.
	 */
	className?: string;
	/**
	 * An object specifying custom properties impacting the base theme.
	 * Not all custom properties need to be specified.
	 * @example
	 * ```tsx
	 * // this will change the color of the button to red.
	 * <ThemeProvider customTheme={{ '--av-action-dark': 'red' }}>
	 *  <Button kind="dark">Click me</Button>
	 * </ThemeProvider>
	 * ```
	 */
	customTheme?: Record<string, string>;
	/**
	 * Whether to apply the theme globally or not.
	 * @default false
	 */
	global?: boolean;
} & SpacingTypes.Props;
