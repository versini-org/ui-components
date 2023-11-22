import clsx from "clsx";
import { useEffect, useRef } from "react";

import { VISUALLY_HIDDEN_CLASSNAME } from "../../../common/constants";
import { DEFAULT_POLITENESS_BY_ROLE } from "./constants";
import type { LiveRegionProps } from "./LiveRegionTypes";
import { conditionallyDelayAnnouncement } from "./utilities";

/**
 * The `LiveRegion` component abstracts the logic for
 * rendering live region content that consistently announces
 * across assistive technologies (e.g. JAWS, VoiceOver,
 * NVDA).
 */
export function LiveRegion({
	children,
	className,
	politeness: politenessProp,
	role = null,
	announcementDelay,
	clearAnnouncementDelay,
	onAnnouncementClear,
	visible,

	...otherProps
}: LiveRegionProps) {
	const liveRegionRef = useRef<HTMLDivElement>(null);
	const announcementTimeoutRef = useRef();
	const clearAnnouncementTimeoutRef = useRef();

	let politeness = politenessProp;
	/**
	 * We check `undefined` since it is our default,
	 * and we want to honor when the user supplies `null`.
	 */
	if (typeof politeness === "undefined") {
		politeness = role ? DEFAULT_POLITENESS_BY_ROLE[role] : "assertive";
	}

	useEffect(() => {
		conditionallyDelayAnnouncement({
			announcementTimeoutRef,
			announcementDelay,
			children,
			liveRegionRef,
			clearAnnouncementDelay,
			clearAnnouncementTimeoutRef,
			onAnnouncementClear,
		});
	}, [
		children,
		announcementDelay,
		clearAnnouncementDelay,
		onAnnouncementClear,
	]);

	const generatedClassName = clsx(className, {
		[VISUALLY_HIDDEN_CLASSNAME]: !visible,
	});

	return (
		<div
			ref={liveRegionRef}
			aria-live={politeness as "polite" | "assertive" | "off" | undefined}
			{...(role && { role: role })}
			className={generatedClassName}
			{...otherProps}
		/>
	);
}
