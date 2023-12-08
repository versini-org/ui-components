import type { ToggleProps } from "./ToggleTypes";
import { getToggleClasses } from "./utilities";

export const Toggle = ({
	checked = false,
	onChange,
	label,
	labelHidden = false,
	name,
	kind = "dark",
}: ToggleProps) => {
	const toggleClasses = getToggleClasses({ kind, labelHidden });
	return (
		<label className={toggleClasses.wrapper}>
			<input
				name={name}
				defaultChecked={checked}
				type="checkbox"
				className={toggleClasses.input}
				onChange={(e) => onChange && onChange(e.target.checked)}
			/>

			<div className={toggleClasses.toggle}></div>
			<span className={toggleClasses.label}>{label}</span>
		</label>
	);
};
