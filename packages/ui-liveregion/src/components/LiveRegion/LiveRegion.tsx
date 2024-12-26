import clsx from "clsx";
import { useEffect, useReducer, useRef } from "react";

import type { LiveRegionTypes } from "@versini/ui-types";
import { DEFAULT_POLITENESS_BY_ROLE } from "./constants";
import { reducer } from "./reducer";
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
}: LiveRegionTypes.Props) {
	const announcementTimeoutRef = useRef<LiveRegionTypes.SetTimeoutResult>(null);
	const clearAnnouncementTimeoutRef =
		useRef<LiveRegionTypes.SetTimeoutResult>(null);

	const [state, dispatch] = useReducer(reducer, {
		announcement: null,
	});

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
			clearAnnouncementDelay,
			clearAnnouncementTimeoutRef,
			onAnnouncementClear,
			dispatch,
		});
	}, [
		children,
		announcementDelay,
		clearAnnouncementDelay,
		onAnnouncementClear,
	]);

	const generatedClassName = clsx(className, {
		"sr-only": !visible,
	});

	return (
		<div
			aria-live={politeness as "polite" | "assertive" | "off" | undefined}
			{...(role && { role: role })}
			className={generatedClassName}
			{...otherProps}
		>
			{state.announcement}
		</div>
	);
}
