export type ThemeProviderProps = {
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
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
};
