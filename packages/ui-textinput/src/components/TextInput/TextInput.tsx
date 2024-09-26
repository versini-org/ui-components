import { useResizeObserver, useUniqueId } from "@versini/ui-hooks";
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
			size = "md",

			...extraProps
		},
		ref,
	) => {
		const [rightElementRef, rect] = useResizeObserver<HTMLDivElement>();
		const [inputPaddingRight, setInputPaddingRight] = useState(0);
		const inputId = useUniqueId({ id, prefix: `${TEXT_INPUT_CLASSNAME}-` });
		const liveErrorMessage = `${name} error, ${helperText}`;
		const labelRef = useRef<HTMLLabelElement>(null);
		const helperTextRef = useRef<HTMLDivElement>(null);

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
			size,
		});

		/* c8 ignore start - ResizeObserver is tough to test... */
		useLayoutEffect(() => {
			if (rect && rect.width) {
				/**
				 * - rect.width is the width of the right element (Button, Icon, etc.)
				 * - The main input field has default left/right paddings of
				 *   16px (px-4) + 2px border (border-2) = 18px
				 * - We add 10px to the right padding to give some space between the right
				 *   element and the input field.
				 */
				setInputPaddingRight(rect.width + 18 + 10);
			}
		}, [rect]);
		/* c8 ignore end */

		useLayoutEffect(() => {
			switch (size) {
				case "xs":
					labelRef?.current?.style.setProperty(
						"--av-text-input-label",
						"-25px",
					);
					helperTextRef?.current?.style.setProperty(
						"--av-text-input-helper-text",
						"29px",
					);
					break;
				case "sm":
					labelRef?.current?.style.setProperty(
						"--av-text-input-label",
						"-29px",
					);
					helperTextRef?.current?.style.setProperty(
						"--av-text-input-helper-text",
						"33px",
					);
					break;
				case "lg":
					labelRef?.current?.style.setProperty(
						"--av-text-input-label",
						"-15px",
					);
					helperTextRef?.current?.style.setProperty(
						"--av-text-input-helper-text",
						"22px",
					);
					break;
				case "xl":
					labelRef?.current?.style.setProperty(
						"--av-text-input-label",
						"-19px",
					);
					helperTextRef?.current?.style.setProperty(
						"--av-text-input-helper-text",
						"25px",
					);
					break;

				default:
					labelRef?.current?.style.setProperty(
						"--av-text-input-label",
						"-33px",
					);
					helperTextRef?.current?.style.setProperty(
						"--av-text-input-helper-text",
						"37px",
					);
					break;
			}
		}, [size]);

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
						ref={labelRef}
						aria-hidden={true}
						htmlFor={inputId}
						className={textInputClassName.visibleLabel}
					>
						{label}
					</label>
				)}

				{helperText && (
					<div
						ref={helperTextRef}
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
