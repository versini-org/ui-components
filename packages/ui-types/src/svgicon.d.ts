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
		 * It should be a valid Tailwind CSS size class, such as "size-6" or "size-px".
		 * It can also include breakpoints, such as "sm:size-6" or "md:size-px".
		 * @link https://tailwindcss.com/docs/size
		 */
		size?: string;
		/**
		 * The viewBox to use. If not provided, the default viewBox will be used.
		 */
		viewBox?: string;
	};
}

export { SvgIconTypes };
