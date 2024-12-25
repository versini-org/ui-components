import { useMergeRefs } from "@versini/ui-hooks";
import { LiveRegion } from "@versini/ui-liveregion";
import React, { useEffect, useRef, useState } from "react";

import { TextInput } from "./TextInput";
import type { SetTimeoutResult, TextInputMaskProps } from "./TextInputTypes";

const CLEAR_ANNOUNCEMENT_TIMEOUT = 500;
const AUTO_HIDE_CLEAR_ANNOUNCEMENT_TIMEOUT = 5000;
const AUTO_HIDE_TIMEOUT = 20000;

type LiveRegionStatusProps = {
	message: null | string;
	politeness: null | "polite" | "assertive";
	announcementTimeout?: undefined | number;
};

export const TextInputMask = React.forwardRef<
	HTMLInputElement,
	TextInputMaskProps
>(
	(
		{
			name,
			disabled,
			label,
			labelHidden,
			onMaskChange,

			onChange,
			onBlur,
			onFocus,
			onTextInputMaskBlur,

			rightElement,

			spacing,

			...otherProps
		},
		ref,
	) => {
		const [masked, setMasked] = useState(true);
		const [liveRegionStatus, setLiveRegionStatus] =
			useState<LiveRegionStatusProps>({
				message: null,
				politeness: null,
			});
		const isMaskedRef = useRef(true);
		const automaskTimerRef = useRef<SetTimeoutResult>(null);
		const inputRef = useRef<HTMLInputElement>(null);
		const mergedInputRef = useMergeRefs([ref, inputRef]);

		const buttonLabel = masked ? "Show" : "Hide";

		const restartAutoMaskTimer = () => {
			automaskTimerRef.current && clearTimeout(automaskTimerRef.current);
			if (!isMaskedRef.current) {
				automaskTimerRef.current = setTimeout(() => {
					isMaskedRef.current = true;
					setMasked(true);
					setLiveRegionStatus({
						announcementTimeout: AUTO_HIDE_CLEAR_ANNOUNCEMENT_TIMEOUT,
						politeness: "polite",
						message: `${label} hiding characters`,
					});
					/**
					 * Callback that can be used to generate
					 * show/hide analytics.
					 */
					onMaskChange && onMaskChange(true);
				}, AUTO_HIDE_TIMEOUT);
			}
		};

		const handleShowMaskButtonClick = (
			e: React.SyntheticEvent<Element, Event>,
		) => {
			e.preventDefault();
			const newHiddenState = !isMaskedRef.current;
			isMaskedRef.current = newHiddenState;

			restartAutoMaskTimer();
			setMasked(newHiddenState);
			setLiveRegionStatus({
				announcementTimeout: CLEAR_ANNOUNCEMENT_TIMEOUT,
				politeness: "assertive",
				message: newHiddenState ? "Characters hidden" : "Characters showing",
			});

			/**
			 * Callback that can be used to generate
			 * show/hide analytics.
			 */
			onMaskChange && onMaskChange(newHiddenState);
		};

		const handleTextInputMaskBlur = (
			e: React.FocusEvent<HTMLInputElement | HTMLButtonElement, Element>,
		) => {
			const { relatedTarget } = e;
			/**
			 * If the related target is not a child of the input,
			 * then the blur is leaving the input
			 * and not going to a child of the input.
			 * This is the case when the user blurs from the show/hide button.
			 * In this case, we want to call the onTextInputMaskBlur callback.
			 */
			const parent = inputRef.current?.parentElement;
			if (!parent?.contains(relatedTarget)) {
				onTextInputMaskBlur && onTextInputMaskBlur();
			}
		};

		const handleFieldBlur = (
			e: React.FocusEvent<HTMLInputElement, Element>,
		) => {
			restartAutoMaskTimer();
			onBlur && onBlur(e);
			handleTextInputMaskBlur(e);
		};

		const handleFieldFocus = (
			e: React.FocusEvent<HTMLInputElement, Element>,
		) => {
			restartAutoMaskTimer();
			onFocus && onFocus(e);
		};

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			restartAutoMaskTimer();
			onChange && onChange(e);
		};

		useEffect(() => {
			return () => {
				automaskTimerRef.current && clearTimeout(automaskTimerRef.current);
			};
		}, []);

		/**
		 * TextInputMask rules.
		 *
		 *  If button label is "Show", then characters must be masked.
		 *    - Type is set to password e.g. <input type="password">.
		 *    - Once button is clicked, toggle the input text to show characters
		 *      (type="text") and live region (aria-live="assertive") should
		 *      announce, "showing characters" or similar.
		 *  If button label is "Hide", then characters must be unmasked.
		 *     Type is set to password e.g. <input type="text">.
		 *    - Once button is clicked, toggle the input text to hide characters
		 *      (type="password") and live region (aria-live="assertive") should
		 *      announce, "hiding characters" or similar.
		 *  If 20 seconds have passed and text input mask field has no focus-in nor
		 *  keystrokes while text input mask characters are shown, then hide characters,
		 *  toggle control label back to "Show", and use aria-live="polite" to announce
		 *  "[text input mask label] hiding characters" or similar.
		 */

		return (
			<>
				<TextInput
					ref={mergedInputRef}
					name={name}
					label={label}
					labelHidden={labelHidden}
					type={masked ? "password" : "text"}
					disabled={disabled}
					spacing={spacing}
					onBlur={handleFieldBlur}
					onFocus={handleFieldFocus}
					onChange={handleChange}
					rightElement={React.cloneElement(rightElement, {
						ref,
						label: buttonLabel,
						onClick: handleShowMaskButtonClick,
						onBlur: handleTextInputMaskBlur,

						disabled: disabled,
					} as React.HTMLAttributes<HTMLElement>)}
					{...otherProps}
				/>

				<LiveRegion
					role="status"
					politeness={liveRegionStatus.politeness}
					clearAnnouncementDelay={liveRegionStatus.announcementTimeout}
				>
					{liveRegionStatus.message}
				</LiveRegion>
			</>
		);
	},
);

TextInputMask.displayName = "TextInputMask";
