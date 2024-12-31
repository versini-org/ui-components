import {
	useMergeRefs,
	useResizeObserver,
	useUncontrolled,
	useUniqueId,
} from "@versini/ui-hooks";
import { LiveRegion } from "@versini/ui-liveregion";
import React, { useLayoutEffect, useRef, useState } from "react";

import { TEXT_AREA_CLASSNAME } from "../../common/constants";
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
			mode = "system",
			focusMode = "system",
			value,
			defaultValue,

			disabled = false,
			noBorder = false,

			labelId,

			helperText = "",
			helperTextOnFocus = false,

			rightElement,
			leftElement,
			onChange,
			onFocus,
			onBlur,

			...extraProps
		},
		ref,
	) => {
		const textAreaRef = useRef<HTMLTextAreaElement>(null);
		const mergedTextAreaRef = useMergeRefs([ref, textAreaRef]);
		const [rightElementRef, rect] = useResizeObserver<HTMLDivElement>();
		const [leftElementRef, lRect] = useResizeObserver<HTMLDivElement>();
		const textAreaHeightRef = useRef<number>(80);
		const labelOffsetRef = useRef<number>(-25);
		const labelRef = useRef<HTMLLabelElement>(null);
		const helperTextOffsetRef = useRef<number>(30);
		const helperTextRef = useRef<HTMLDivElement>(null);

		const textAreaId = useUniqueId({ id, prefix: `${TEXT_AREA_CLASSNAME}-` });

		const [textAreaPaddingRight, setTextAreaPaddingRight] = useState(0);
		const [textAreaPaddingLeft, setTextAreaPaddingLeft] = useState(0);
		const [showHelperText, setShowHelperText] = useState(
			Boolean(!helperTextOnFocus && helperText),
		);

		const liveErrorMessage = `${name} error, ${helperText}`;
		const textTextAreaClassName = getTextAreaClasses({
			className,
			textAreaClassName,
			error,
			raw,
			focusMode,
			disabled,
			noBorder,
			mode,
			rightElement: Boolean(rightElement),
			leftElement: Boolean(leftElement),
		});

		/**
		 * useUncontrolled hook is used to make the textarea
		 * both controlled and uncontrolled.
		 */
		const [userInput, setUserInput] = useUncontrolled({
			value,
			initialControlledDelay: 20,
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
			setUserInput(e.target.value);
		};

		const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
			if (helperTextOnFocus && helperText) {
				setShowHelperText(true);
			}
			onFocus && onFocus(e);
		};

		const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
			if (helperTextOnFocus && helperText && !userInput) {
				setShowHelperText(false);
			}
			onBlur && onBlur(e);
		};

		/**
		 * This effect is used to add padding to the rightElement so
		 * that the input text in the textarea does not overlap with the
		 * rightElement.
		 */
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

				setTextAreaPaddingRight(rect.width + 18 + 10);
			}
		}, [rect]);
		/* c8 ignore end */

		/**
		 * This effect is used to add padding to the leftElement so
		 * that the input text in the textarea does not overlap with the
		 * leftElement.
		 */
		/* c8 ignore start - ResizeObserver is tough to test... */
		useLayoutEffect(() => {
			if (lRect && lRect.width) {
				console.info(`==> [${Date.now()}] left el width: `, lRect.width);

				/**
				 * - rect.width is the width of the right element (Button, Icon, etc.)
				 * - The main input field has default left/right paddings of
				 *   16px (px-4) + 2px border (border-2) = 18px
				 * - We add 10px to the left padding to give some space between the left
				 *   element and the input field.
				 */
				setTextAreaPaddingLeft(lRect.width + 18 + 10);
			}
		}, [lRect]);
		/* c8 ignore end */

		/**
		 * This effect is used to resize the textarea based
		 * on the content, so that the user can see all the
		 * content they have typed.
		 */
		useLayoutEffect(() => {
			if (raw) {
				return;
			}

			if (textAreaRef && textAreaRef.current && userInput !== undefined) {
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

			if (textAreaRef && textAreaRef.current && userInput !== undefined) {
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

		/**
		 * If there is a left element, we need to translate the label on the x-axis
		 * to the right so that it does not overlap with the left element.
		 * NOTE: 12px is the default translate if there are no left elements.
		 */
		if (lRect.width > 0) {
			labelRef?.current?.style.setProperty(
				"--tw-translate-x",
				`${12 + lRect.width + 4}px`,
			);
		}

		return (
			<div className={textTextAreaClassName.wrapper}>
				<label
					htmlFor={textAreaId}
					id={labelId}
					className={textTextAreaClassName.accessibleLabel}
				>
					{label}
				</label>
				{leftElement && (
					<div
						ref={leftElementRef}
						className={textTextAreaClassName.leftElement}
					>
						{leftElement}
					</div>
				)}
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
						!leftElement &&
						!raw && { style: { paddingRight: textAreaPaddingRight } })}
					{...(leftElement &&
						!rightElement &&
						!raw && { style: { paddingLeft: textAreaPaddingLeft } })}
					{...(rightElement &&
						leftElement &&
						!raw && {
							style: {
								paddingRight: textAreaPaddingRight,
								paddingLeft: textAreaPaddingLeft,
							},
						})}
					value={userInput}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					{...extraProps}
				/>

				{!raw && (
					<label
						ref={labelRef}
						aria-hidden={true}
						htmlFor={textAreaId}
						className={`${textTextAreaClassName.visibleLabel}`}
					>
						{label}
					</label>
				)}

				{showHelperText && (
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
