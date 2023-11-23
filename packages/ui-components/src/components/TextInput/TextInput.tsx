import useUniqueId from "../../common/hooks/useUniqueId";
import { LiveRegion } from "../private/LiveRegion/LiveRegion";
import type { TextInputProps } from "./TextInputTypes";
import { getTextInputClasses } from "./utilities";

export const TextInput = ({
	id,
	name,
	label,
	error = false,
	raw = false,
	className,
	inputClassName,
	focusKind = "light",
	borderKind = "dark",
	errorKind = "light",

	disabled = false,
	noBorder = false,

	labelId,
	type = "text",

	helperText = "",

	...extraProps
}: TextInputProps) => {
	const inputId = useUniqueId({ id, prefix: "av-text-input-" });
	const liveErrorMessage = `${name} error, ${helperText}`;
	const textInputClassName = getTextInputClasses({
		className,
		inputClassName,
		error,
		raw,
		focusKind,
		disabled,
		noBorder,
		borderKind,
		errorKind,
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
				{...(helperText && { "aria-describedby": `${inputId}-helper` })}
				{...(error && { "aria-invalid": "true" })}
				className={textInputClassName.input}
			/>
			{!raw && (
				<label
					aria-hidden={true}
					htmlFor={inputId}
					className={textInputClassName.bottomLabel}
				>
					{label}
				</label>
			)}

			{helperText && (
				<div id={`${inputId}-helper`} className={textInputClassName.helperText}>
					{helperText}
				</div>
			)}
			{error && helperText && (
				<LiveRegion politeness="polite" clearAnnouncementDelay={500}>
					{liveErrorMessage}
				</LiveRegion>
			)}
		</span>
	);
};
