import type { SpacingType } from "../../common";

export type MainProps = {
	children: React.ReactNode;
	className?: string;
	raw?: boolean;
	spacing?: SpacingType;
};
