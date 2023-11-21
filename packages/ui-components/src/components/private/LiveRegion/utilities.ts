import React from "react";
import { renderToString } from "react-dom/server";

import type {
	announceProps,
	ClearAnnouncementProps,
	conditionallyDelayAnnouncementProps,
} from "./LiveRegionTypes";

/**
 * Removes the content from the live region.
 */
const clearAnnouncement = ({
	liveRegionRef,
	onAnnouncementClear,
}: ClearAnnouncementProps) => {
	if (liveRegionRef.current) {
		liveRegionRef.current.innerHTML = "";
	}
	onAnnouncementClear && onAnnouncementClear();
};

/**
 * Announce the content of "children".
 */
export const announce = ({
	children,
	liveRegionRef,
	clearAnnouncementDelay,
	clearAnnouncementTimeoutRef,
	onAnnouncementClear,
}: announceProps) => {
	if (clearAnnouncementTimeoutRef?.current !== null) {
		clearTimeout(clearAnnouncementTimeoutRef.current as unknown as number);
	}

	if (children !== null && liveRegionRef.current) {
		liveRegionRef.current.innerHTML = renderToString(
			children as React.ReactElement,
		);
	}

	if (clearAnnouncementDelay) {
		clearAnnouncementTimeoutRef.current = setTimeout(
			() =>
				clearAnnouncement({
					liveRegionRef,
					onAnnouncementClear,
				}),
			clearAnnouncementDelay,
		);
	}
};

/**
 * Inserts the content into the live region with some
 * delay if the announcementDelay prop is supplied.
 * Otherwise inserts the content immediately.
 */
export const conditionallyDelayAnnouncement = ({
	children,
	liveRegionRef,
	announcementTimeoutRef,
	announcementDelay,
	clearAnnouncementDelay,
	clearAnnouncementTimeoutRef,
	onAnnouncementClear,
}: conditionallyDelayAnnouncementProps) => {
	clearTimeout(announcementTimeoutRef.current as unknown as number);

	if (announcementDelay) {
		announcementTimeoutRef.current = setTimeout(announce, announcementDelay, {
			children,
			liveRegionRef,
			clearAnnouncementDelay,
			clearAnnouncementTimeoutRef,
			onAnnouncementClear,
		});
	} else {
		announce({
			children,
			liveRegionRef,
			clearAnnouncementDelay,
			clearAnnouncementTimeoutRef,
			onAnnouncementClear,
		});
	}
};
