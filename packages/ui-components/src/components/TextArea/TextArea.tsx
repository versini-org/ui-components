import React, { useLayoutEffect, useRef, useState } from "react";

import { TEXT_AREA_CLASSNAME } from "../../common/constants";
import useUniqueId from "../../common/hooks/useUniqueId";
import { mergeRefs } from "../../common/utilities";
import { LiveRegion } from "../private/LiveRegion/LiveRegion";
import type { TextAreaProps } from "./TextAreaTypes";
import { adjustLabelAndHelperText, getTextAreaClasses } from "./utilities";

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
			id,
			name,
			label,
			error = false,
			raw = false,
			className,
			textAreaClassName,
			focusKind = "light",
			borderKind = "dark",
			errorKind = "light",

			disabled = false,
			noBorder = false,

			labelId,

			helperText = "",

			rightElement,
			onChange,

			...extraProps
		},
		ref,
	) => {
		const textAreaRef = useRef<HTMLTextAreaElement>(null);
		const mergedTextAreaRef = mergeRefs([ref, textAreaRef]);
		const rightElementRef = useRef<HTMLDivElement>(null);
		const textAreaHeightRef = useRef<number>(80);
		const labelOffsetRef = useRef<number>(-25);
		const labelRef = useRef<HTMLLabelElement>(null);
		const helperTextOffsetRef = useRef<number>(30);
		const helperTextRef = useRef<HTMLDivElement>(null);

		const textAreaId = useUniqueId({ id, prefix: `${TEXT_AREA_CLASSNAME}-` });

		const [textAreaPaddingRight, setTextAreaPaddingRight] = useState(0);
		const [userInput, setUserTextArea] = useState("");

		const liveErrorMessage = `${name} error, ${helperText}`;
		const textTextAreaClassName = getTextAreaClasses({
			className,
			textAreaClassName,
			error,
			raw,
			focusKind,
			disabled,
			noBorder,
			borderKind,
			errorKind,
		});

		const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setUserTextArea(e.target.value);
			onChange && onChange(e);
		};

		useLayoutEffect(() => {
			if (!raw && rightElementRef.current) {
				setTextAreaPaddingRight(rightElementRef.current.offsetWidth + 18 + 10);
			}
		}, [rightElement, raw]);

		/**
		 * This effect is used to resize the textarea based
		 * on the content, so that the user can see all the
		 * content they have typed.
		 */
		useLayoutEffect(() => {
			if (raw) {
				return;
			}
			if (textAreaRef && textAreaRef.current) {
				textAreaRef.current.style.height = "inherit";
				// Set the height to match the content
				textAreaRef.current.style.height =
					textAreaRef.current.scrollHeight + "px";

				/**
				 * If the height of the textarea has changed, we need to
				 * adjust the label and helper text to match the new height.
				 * This is done by calculating the difference in height and
				 * then adjusting the label and helper text by that amount.
				 */
				/* v8 ignore next 1 */
				adjustLabelAndHelperText({
					textAreaRef,
					textAreaHeightRef,
					labelOffsetRef,
					labelRef,
					helperTextOffsetRef,
					helperTextRef,
				});
			}

			/**
			 * This section is to toggle the transitions.
			 * This is to prevent the label and helper text from animating
			 * when the user is typing. The animation is re-enabled
			 * when there is nothing in the textarea.
			 */
			labelRef?.current?.style.setProperty(
				"--av-text-area-wrapper-transition",
				userInput ? "none" : "all 0.2s ease-out",
			);
		}, [userInput, raw]);

		return (
			<div className={textTextAreaClassName.wrapper}>
				<label
					htmlFor={textAreaId}
					id={labelId}
					className={textTextAreaClassName.accessibleLabel}
				>
					{label}
				</label>
				<textarea
					ref={mergedTextAreaRef}
					id={textAreaId}
					name={name}
					disabled={disabled}
					placeholder={!raw ? " " : undefined}
					className={textTextAreaClassName.textArea}
					rows={1}
					{...(helperText && { "aria-describedby": `${textAreaId}-helper` })}
					{...(error && { "aria-invalid": "true" })}
					{...(rightElement &&
						!raw && { style: { paddingRight: textAreaPaddingRight } })}
					value={userInput}
					onChange={handleChange}
					{...extraProps}
				/>
				{!raw && (
					<label
						ref={labelRef}
						aria-hidden={true}
						htmlFor={textAreaId}
						className={textTextAreaClassName.visibleLabel}
					>
						{label}
					</label>
				)}

				{helperText && (
					<div
						ref={helperTextRef}
						id={`${textAreaId}-helper`}
						className={textTextAreaClassName.helperText}
					>
						{helperText}
					</div>
				)}

				{rightElement && (
					<div
						ref={rightElementRef}
						className={textTextAreaClassName.rightElement}
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
