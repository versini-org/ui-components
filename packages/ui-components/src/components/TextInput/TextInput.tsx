import { useLayoutEffect, useRef, useState } from "react";

import { TEXT_INPUT_CLASSNAME } from "../../common/constants";
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

	rightElement,

	...extraProps
}: TextInputProps) => {
	const rightElementRef = useRef<HTMLSpanElement>(null);
	const [inputPaddingRight, setInputPaddingRight] = useState(0);
	const inputId = useUniqueId({ id, prefix: `${TEXT_INPUT_CLASSNAME}-` });
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

	useLayoutEffect(() => {
		if (rightElementRef.current) {
			setInputPaddingRight(rightElementRef.current.offsetWidth + 18 + 10);
		}
	}, [rightElement]);

	return (
		<div className={textInputClassName.wrapper}>
			<label
				htmlFor={inputId}
				id={labelId}
				className={textInputClassName.accessibleLabel}
			>
				{label}
			</label>
			<input
				{...extraProps}
				id={inputId}
				name={name}
				type={type}
				disabled={disabled}
				placeholder={!raw ? " " : undefined}
				className={textInputClassName.input}
				{...(helperText && { "aria-describedby": `${inputId}-helper` })}
				{...(error && { "aria-invalid": "true" })}
				{...(rightElement &&
					!raw && { style: { paddingRight: inputPaddingRight } })}
			/>
			{!raw && (
				<label
					aria-hidden={true}
					htmlFor={inputId}
					className={textInputClassName.visibleLabel}
				>
					{label}
				</label>
			)}

			{helperText && (
				<div id={`${inputId}-helper`} className={textInputClassName.helperText}>
					{helperText}
				</div>
			)}

			{rightElement && (
				<span ref={rightElementRef} className={textInputClassName.rightElement}>
					{rightElement}
				</span>
			)}

			{error && helperText && (
				<LiveRegion politeness="polite" clearAnnouncementDelay={500}>
					{liveErrorMessage}
				</LiveRegion>
			)}
		</div>
	);
};
