import React, { useLayoutEffect, useRef, useState } from "react";

import { TEXT_AREA_CLASSNAME } from "../../common/constants";
import { useUncontrolled } from "../../common/hooks/useUncontrolled";
import { useMergeRefs, useUniqueId } from "..";
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
			value,
			defaultValue,

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
		const mergedTextAreaRef = useMergeRefs([ref, textAreaRef]);
		const rightElementRef = useRef<HTMLDivElement>(null);
		const textAreaHeightRef = useRef<number>(80);
		const labelOffsetRef = useRef<number>(-25);
		const labelRef = useRef<HTMLLabelElement>(null);
		const helperTextOffsetRef = useRef<number>(30);
		const helperTextRef = useRef<HTMLDivElement>(null);

		const textAreaId = useUniqueId({ id, prefix: `${TEXT_AREA_CLASSNAME}-` });

		const [textAreaPaddingRight, setTextAreaPaddingRight] = useState(0);

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

		/**
		 * useUncontrolled hook is used to make the textarea
		 * both controlled and uncontrolled.
		 */
		const [userInput, setValue] = useUncontrolled({
			value,
			defaultValue,
			onChange: (value: any) => {
				const e: any = {
					target: {
						value,
					},
				};
				onChange && onChange(e);
			},
		});

		const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			setValue(e.target.value);
		};

		/**
		 * This effect is used to add padding to the rightElement so
		 * that the text in the textarea does not overlap with the
		 * rightElement.
		 */
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
			}
		}, [userInput, raw]);

		/**
		 * This section is to toggle the transitions.
		 * This is to prevent the label and helper text from
		 * animating when the user is typing. The animation is
		 * re-enabled when there is nothing in the textarea.
		 *
		 * The reason for the timeout is to prevent it to be
		 * re-enabled too soon when the user clears out the
		 * whole textarea.
		 */
		useLayoutEffect(() => {
			if (raw) {
				return;
			}
			setTimeout(() => {
				labelRef?.current?.style.setProperty(
					"--av-text-area-wrapper-transition",
					!userInput ? "all 0.2s ease-out" : "none",
				);
			}, 0);
		}, [userInput, raw]);

		/**
		 * This effect is used to adjust the label and helper text
		 * when the height of the textarea changes.
		 * This is done by calculating the difference in
		 * height and then adjusting the label and helper
		 * text by that amount.
		 */
		useLayoutEffect(() => {
			if (raw) {
				return;
			}

			if (textAreaRef && textAreaRef.current) {
				const { labelOffset, helperTextOffset, scrollHeight } =
					adjustLabelAndHelperText({
						scrollHeight: textAreaRef.current.scrollHeight,
						currentHeight: textAreaHeightRef.current,
						currentLabelOffset: labelOffsetRef.current,
						currentHelperTextOffset: helperTextOffsetRef.current,
					});

				/* v8 ignore next 7 */
				if (labelOffset) {
					labelOffsetRef.current = labelOffset;
					labelRef?.current?.style.setProperty(
						"--av-text-area-label",
						`${labelOffset}px`,
					);
				}

				/* v8 ignore next 7 */
				if (helperTextOffset) {
					helperTextOffsetRef.current = helperTextOffset;
					helperTextRef?.current?.style.setProperty(
						"--av-text-area-helper-text",
						`${helperTextOffset}px`,
					);
				}

				textAreaHeightRef.current = scrollHeight || textAreaHeightRef.current;
			}
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

TextArea.displayName = "TextArea";
