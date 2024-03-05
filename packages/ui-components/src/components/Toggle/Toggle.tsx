import type { ToggleProps } from "./ToggleTypes";
import { getToggleClasses } from "./utilities";

export const Toggle = ({
	checked = false,
	onChange,
	label,
	labelHidden = false,
	name,
	mode = "system",
	spacing,
}: ToggleProps) => {
	const toggleClasses = getToggleClasses({ mode, labelHidden, spacing });
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.checked);
	};
	return (
		<label className={toggleClasses.wrapper}>
			<input
				name={name}
				defaultChecked={checked}
				type="checkbox"
				className={toggleClasses.input}
				onChange={handleChange}
			/>

			<div className={toggleClasses.toggle}></div>
			<span className={toggleClasses.label}>{label}</span>
		</label>
	);
};
