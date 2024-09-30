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
			rightElementClassName,
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

		const sizeStyles = {
			xs: { label: "-25px", helperText: "30px" },
			sm: { label: "-29px", helperText: "34px" },
			md: { label: "-33px", helperText: "38px" },
			lg: { label: "-15px", helperText: "22px" },
			xl: { label: "-19px", helperText: "25px" },
		};

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
			rightElementClassName,
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

		/**
		 * This effect sets the label and helper text position based on
		 * the size of the input.
		 */
		useLayoutEffect(() => {
			const { label, helperText } = sizeStyles[size];
			labelRef?.current?.style.setProperty("--av-text-input-label", label);
			helperTextRef?.current?.style.setProperty(
				"--av-text-input-helper-text",
				helperText,
			);
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
