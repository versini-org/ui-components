declare namespace SvgIconTypes {
	export type Props = {
		/**
		 * The children to render.
		 */
		children: React.ReactNode;
		/**
		 * The default viewBox to use.
		 */
		defaultViewBox: string;
		/**
		 * The title to use for the icon. Each icon has a default title,
		 * but it can be overridden with this prop.
		 */
		title: string;
		/**
		 * CSS class(es) to add to the main component wrapper.
		 */
		className?: string;
		/**
		 * Update the "fill" property of the SVG.
		 * @default "currentColor"
		 */
		fill?: string;
		/**
		 * Whether or not the icon is semantic (visual and
		 * announced to assistive technologies).
		 * @default false
		 */
		semantic?: boolean;
		/**
		 * The size of the icon. This will set the width and height of the icon.
		 */
		size?:
			| "size-1"
			| "size-2"
			| "size-3"
			| "size-4"
			| "size-5"
			| "size-6"
			| "size-7"
			| "size-8"
			| "size-9"
			| "size-10";
		/**
		 * The viewBox to use. If not provided, the default viewBox will be used.
		 */
		viewBox?: string;
	};
}

export { SvgIconTypes };
