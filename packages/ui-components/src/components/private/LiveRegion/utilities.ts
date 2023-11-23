import {
	ACTION_CLEAR_ANNOUNCEMENT,
	ACTION_SET_ANNOUNCEMENT,
} from "./constants";
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
	dispatch,
}: ClearAnnouncementProps) => {
	if (liveRegionRef.current) {
		dispatch({
			type: ACTION_CLEAR_ANNOUNCEMENT,
		});
	}

	if (typeof onAnnouncementClear === "function") {
		onAnnouncementClear();
	}
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
	dispatch,
}: announceProps) => {
	if (clearAnnouncementTimeoutRef?.current !== null) {
		clearTimeout(clearAnnouncementTimeoutRef.current as unknown as number);
	}

	if (children !== null && liveRegionRef.current) {
		dispatch({
			type: ACTION_SET_ANNOUNCEMENT,
			payload: children,
		});
	}

	if (clearAnnouncementDelay) {
		clearAnnouncementTimeoutRef.current = setTimeout(
			() =>
				clearAnnouncement({
					liveRegionRef,
					onAnnouncementClear,
					dispatch,
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
	dispatch,
}: conditionallyDelayAnnouncementProps) => {
	clearTimeout(announcementTimeoutRef.current as unknown as number);

	if (announcementDelay) {
		announcementTimeoutRef.current = setTimeout(announce, announcementDelay, {
			children,
			liveRegionRef,
			clearAnnouncementDelay,
			clearAnnouncementTimeoutRef,
			onAnnouncementClear,
			dispatch,
		});
	} else {
		announce({
			children,
			liveRegionRef,
			clearAnnouncementDelay,
			clearAnnouncementTimeoutRef,
			onAnnouncementClear,
			dispatch,
		});
	}
};
