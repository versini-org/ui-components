import type { ButtonIconProps } from "../Button/ButtonTypes";

export type ButtonSortProps = {
	/**
	 * Prop to signal if the Button is active.
	 */
	active?: boolean;
} & ButtonIconProps &
	React.ButtonHTMLAttributes<HTMLButtonElement>;
