import useUniqueId from "../../common/hooks/useUniqueId";
import type { TextInputProps } from "./TextInputTypes";
import { getTextInputClasses } from "./utilities";

export const TextInput = ({
	id,
	name,
	label,
	error = false,
	raw = false,
	className,
	kind = "dark",
	focus = "light",
	border = "dark",
	fullWidth,
	disabled = false,
	noBorder = false,

	labelId,
	type = "text",

	helperText = "",

	...extraProps
}: TextInputProps) => {
	const inputId = useUniqueId({ id, prefix: "av-text-input-" });
	const textInputClassName = getTextInputClasses({
		className,
		error,
		raw,
		kind,
		focus,
		fullWidth,
		disabled,
		noBorder,
		border,
	});

	return (
		<span className={textInputClassName.wrapper}>
			<label
				htmlFor={inputId}
				id={labelId}
				className={textInputClassName.topLabel}
			>
				{label}
			</label>
			<input
				{...extraProps}
				id={inputId}
				name={name}
				type={type}
				placeholder={!raw ? " " : undefined}
				disabled={disabled}
				className={textInputClassName.input}
			/>
			{!raw && (
				<label
					aria-hidden
					htmlFor={inputId}
					className={textInputClassName.bottomLabel}
				>
					{label}
				</label>
			)}

			{helperText && (
				<div className={textInputClassName.helperText}>{helperText}</div>
			)}
		</span>
	);
};
