import { useRef, useState } from "react";

import { ButtonIcon, IconHide, IconShow, TextInput } from "..";
import { LiveRegion } from "../private/LiveRegion/LiveRegion";
import type { TextInputMaskProps } from "./TextInputTypes";

const CLEAR_ANNOUNCEMENT_TIMEOUT = 500;
const AUTO_HIDE_CLEAR_ANNOUNCEMENT_TIMEOUT = 5000;
const AUTO_HIDE_TIMEOUT = 20000;

type LiveRegionStatusProps = {
	message: null | string;
	politeness: null | "polite" | "assertive";
	announcementTimeout?: undefined | number;
};

export const TextInputMask = ({
	name,
	disabled,
	label,
	onMaskChange,

	onChange,
	onBlur,
	onFocus,
	onTextInputMaskBlur,

	...otherProps
}: TextInputMaskProps) => {
	const [masked, setMasked] = useState(true);
	const [liveRegionStatus, setLiveRegionStatus] =
		useState<LiveRegionStatusProps>({
			message: null,
			politeness: null,
		});
	const isMaskedRef = useRef(true);
	const automaskTimerRef = useRef<number>();
	const inputRef = useRef<HTMLInputElement>(null);

	const buttonLabel = masked ? "Show" : "Hide";

	const restartAutoMaskTimer = () => {
		clearTimeout(automaskTimerRef.current);
		if (!isMaskedRef.current) {
			automaskTimerRef.current = window.setTimeout(() => {
				isMaskedRef.current = true;
				setMasked(true);
				setLiveRegionStatus({
					announcementTimeout: AUTO_HIDE_CLEAR_ANNOUNCEMENT_TIMEOUT,
					politeness: "polite",
					message: `${label} hiding characters`,
				});
			}, AUTO_HIDE_TIMEOUT);
		}
	};

	const handleShowMaskButtonClick = (e: any) => {
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
		 * Callback that can be used to generate show/hide analytics.
		 */
		onMaskChange && onMaskChange({ event: e, masked: newHiddenState });
	};

	const handleTextInputMaskBlur = (e: any) => {
		const { relatedTarget } = e;
		/**
		 * If the related target is not a child of the input,
		 * then the blur is leaving the input
		 * and not going to a child of the input.
		 * This is the case when the user clicks on the show/hide button.
		 * In this case, we want to call the onTextInputMaskBlur callback.
		 * If the related target is a child of the input, then the blur is
		 * going to a child of the input and we do not want to call the
		 * onTextInputMaskBlur callback.
		 */
		const parent = inputRef.current?.parentElement;
		if (!parent?.contains(relatedTarget)) {
			onTextInputMaskBlur && onTextInputMaskBlur();
		}
	};

	const handleFieldBlur = (e: any) => {
		restartAutoMaskTimer();
		onBlur && onBlur(e);
	};

	const handleFieldFocus = (e: any) => {
		restartAutoMaskTimer();
		onFocus && onFocus(e);
	};

	const handleChange = (e: any) => {
		restartAutoMaskTimer();
		onChange && onChange(e);
	};

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
				{...otherProps}
				name={name}
				label={label}
				type={masked ? "password" : "text"}
				disabled={disabled}
				onBlur={handleFieldBlur}
				onFocus={handleFieldFocus}
				onChange={handleChange}
				rightElement={
					<ButtonIcon
						label={buttonLabel}
						onClick={handleShowMaskButtonClick}
						onBlur={handleTextInputMaskBlur}
						disabled={disabled}
					>
						{masked ? <IconShow /> : <IconHide />}
					</ButtonIcon>
				}
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
};
