import useUniqueId from "../../common/hooks/useUniqueId";
import type { TextInputProps } from "./TextInputTypes";

export const TextInput = ({
	id,
	name,
	label,
	error,

	labelId,
	type = "text",

	helperText = "",

	...extraProps
}: TextInputProps) => {
	const inputId = useUniqueId({ id, prefix: "av-text-input-" });

	return (
		<>
			<label htmlFor={inputId} id={labelId}>
				{label}
			</label>
			<input {...extraProps} id={inputId} name={name} type={type} />
			{helperText && <p>{helperText}</p>}
		</>
	);
};
