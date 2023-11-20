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
		<span className="av-text-input-wrapper">
			<input
				{...extraProps}
				id={inputId}
				name={name}
				type={type}
				placeholder=" "
				className="av-text-input block w-full resize-none rounded-md border-none bg-slate-900 px-4 py-3 text-base text-slate-200 placeholder-slate-400 caret-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-0 sm:text-base"
			/>
			<label htmlFor={inputId} id={labelId}>
				{label}
			</label>
			{helperText && <p>{helperText}</p>}
		</span>
	);
};
