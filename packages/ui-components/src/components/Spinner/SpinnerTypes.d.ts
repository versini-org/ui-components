import type { SpacingType } from "../../common";

export type SpinnerProps = {
	spinnerRef?: React.RefObject<HTMLDivElement>;
	kind?: "dark" | "light";
	type?: "circle" | "dots";
	spacing?: SpacingType;
};
