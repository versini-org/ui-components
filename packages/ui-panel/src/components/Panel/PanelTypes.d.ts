export type PanelProps = {
	/**
	 * Class name to apply to the Panel - this will ONLY override the default width styles.
	 */
	className?: string;
	/**
	 * The children to render.
	 */
	children: React.ReactNode;
	/**
	 * Callback fired when the component is opened or closed.
	 * @param open whether or not the menu is open
	 */
	onOpenChange: (open: boolean) => void;
	/**
	 * Whether or not to open the component..
	 * @default false
	 */
	open: boolean;
	/**
	 * The title to use for the panel.
	 */
	title: string;
	/**
	 * The type of Panel border.
	 */
	borderMode?: "dark" | "light";
	/**
	 * The content to render in the footer.
	 */
	footer?: React.ReactNode;
	/**
	 * The type of Panel. This will change the layout of the Panel.
	 */
	kind?: "panel" | "messagebox";
};
