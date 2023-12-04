import React, { useLayoutEffect, useRef, useState } from "react";

import { TEXT_AREA_CLASSNAME } from "../../common/constants";
import useUniqueId from "../../common/hooks/useUniqueId";
import { mergeRefs } from "../../common/utilities";
import { LiveRegion } from "../private/LiveRegion/LiveRegion";
import type { TextAreaProps } from "./TextAreaTypes";
import { getTextInputClasses } from "./utilities";

const TRANSLATION_OFFSET = 12;
const ROW_HEIGHT = 24;

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(
		{
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

			helperText = "",

			rightElement,

			...extraProps
		},
		ref,
	) => {
		const textAreaRef = useRef<HTMLTextAreaElement>(null);
		const mergedInputRef = mergeRefs([ref, textAreaRef]);
		const rightElementRef = useRef<HTMLDivElement>(null);
		const textAreaHeightRef = useRef<number>(80);
		const labelOffsetRef = useRef<number>(-25);
		const labelRef = useRef<HTMLLabelElement>(null);
		const helperTextOffsetRef = useRef<number>(30);
		const helperTextRef = useRef<HTMLDivElement>(null);

		const inputId = useUniqueId({ id, prefix: `${TEXT_AREA_CLASSNAME}-` });

		const [inputPaddingRight, setInputPaddingRight] = useState(0);
		const [userInput, setUserInput] = useState("");

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

		/**
		 * This effect is used to resize the textarea based
		 * on the content, so that the user can see all the
		 * content they have typed.
		 */
		useLayoutEffect(() => {
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
				if (textAreaHeightRef.current !== textAreaRef.current.scrollHeight) {
					const diff =
						textAreaRef.current.scrollHeight - textAreaHeightRef.current;
					const totalRows = Math.abs(diff / ROW_HEIGHT);

					/**
					 * The label and helper text are moved by the same amount
					 * as the textarea. This is done by multiplying the
					 * difference by the number of rows that have been added
					 * or removed.
					 * The label is moved in the opposite direction of the
					 * textarea, so that it appears to be moving up as the
					 * textarea grows.
					 * The helper text is moved in the same direction as the
					 * textarea, so that it appears to be moving down as the
					 * textarea grows.
					 */
					labelOffsetRef.current =
						labelOffsetRef.current +
						-1 * Math.sign(diff) * (TRANSLATION_OFFSET * totalRows);

					helperTextOffsetRef.current =
						helperTextOffsetRef.current +
						Math.sign(diff) * (TRANSLATION_OFFSET * totalRows);

					labelRef?.current?.style.setProperty(
						"--av-text-area-label",
						`${labelOffsetRef.current}px`,
					);
					helperTextRef?.current?.style.setProperty(
						"--av-text-area-helper-text",
						`${helperTextOffsetRef.current}px`,
					);

					textAreaHeightRef.current = textAreaRef.current.scrollHeight;
				}
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
		}, [userInput]);

		return (
			<div className={textInputClassName.wrapper}>
				<label
					htmlFor={inputId}
					id={labelId}
					className={textInputClassName.accessibleLabel}
				>
					{label}
				</label>
				<textarea
					ref={mergedInputRef}
					id={inputId}
					name={name}
					disabled={disabled}
					placeholder={!raw ? " " : undefined}
					className={textInputClassName.input}
					rows={1}
					{...(helperText && { "aria-describedby": `${inputId}-helper` })}
					{...(error && { "aria-invalid": "true" })}
					{...(rightElement &&
						!raw && { style: { paddingRight: inputPaddingRight } })}
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					{...extraProps}
				/>
				{!raw && (
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
