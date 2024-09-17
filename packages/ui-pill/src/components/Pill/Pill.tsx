import type { PillProps } from "./PillTypes";
import { getPillClasses } from "./utilities";

export const Pill = ({
	label,
	className,
	variant = "information",
	description,
	spacing,
}: PillProps) => {
	const pillClassName = getPillClasses({
		label,
		className,
		variant,
		spacing,
	});
	return (
		<div role="text" className={pillClassName}>
			{description && <span className="sr-only">{description}</span>}
			<span>{label}</span>
		</div>
	);
};
