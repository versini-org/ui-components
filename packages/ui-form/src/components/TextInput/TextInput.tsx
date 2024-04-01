import { useUniqueId } from "@versini/ui-hooks";
import { LiveRegion } from "@versini/ui-private";
import React, { useLayoutEffect, useRef, useState } from "react";

import { TEXT_INPUT_CLASSNAME } from "../../common/constants";
import type { TextInputProps } from "./TextInputTypes";
import { getTextInputClasses } from "./utilities";

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	(
		{
			id,
			name,
			label,
			error = false,
			raw = false,
			className,
			inputClassName,
			mode = "system",
			focusMode = "system",

			disabled = false,
			noBorder = false,

			labelId,
			labelHidden = false,
			type = "text",

			helperText = "",

			rightElement,
			spacing,

			...extraProps
		},
		ref,
	) => {
		const rightElementRef = useRef<HTMLDivElement>(null);
		const [inputPaddingRight, setInputPaddingRight] = useState(0);
		const inputId = useUniqueId({ id, prefix: `${TEXT_INPUT_CLASSNAME}-` });
		const liveErrorMessage = `${name} error, ${helperText}`;
		const textInputClassName = getTextInputClasses({
			className,
			inputClassName,
			error,
			raw,
			focusMode,
			disabled,
			noBorder,
			spacing,
			mode,
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
					ref={ref}
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
					{...extraProps}
				/>
				{!raw && !labelHidden && (
					<label
						aria-hidden={true}
						htmlFor={inputId}
						className={textInputClassName.visibleLabel}
					>
						{label}
					</label>
				)}

				{helperText && (
					<div
						id={`${inputId}-helper`}
						className={textInputClassName.helperText}
					>
						{helperText}
					</div>
				)}

				{rightElement && (
					<div
						ref={rightElementRef}
						className={textInputClassName.rightElement}
					>
						{rightElement}
					</div>
				)}

				{error && helperText && (
					<LiveRegion politeness="polite" clearAnnouncementDelay={500}>
						{liveErrorMessage}
					</LiveRegion>
				)}
			</div>
		);
	},
);

TextInput.displayName = "TextInput";
