import type { SvgIconTypes } from "@versini/ui-types";

export type IconsProps = {
	/**
	 * Whether or not to render the icon in a single color
	 * @default false
	 */
	monotone?: boolean;
	/**
	 * The title to use for the icon. Each icon has a default title,
	 * but it can be overridden with this prop.
	 */
	title?: string;
} & Pick<SvgIconTypes.Props, "semantic" | "size" | "className" | "viewBox"> &
	React.SVGAttributes<SVGElement>;
