import type {
	ClearAnnouncementProps,
	announceProps,
	conditionallyDelayAnnouncementProps,
} from "./LiveRegionTypes";
import {
	ACTION_CLEAR_ANNOUNCEMENT,
	ACTION_SET_ANNOUNCEMENT,
} from "./constants";

/**
 * Removes the content from the live region.
 */
const clearAnnouncement = ({
	onAnnouncementClear,
	dispatch,
}: ClearAnnouncementProps) => {
	dispatch({
		type: ACTION_CLEAR_ANNOUNCEMENT,
	});

	if (typeof onAnnouncementClear === "function") {
		onAnnouncementClear();
	}
};

/**
 * Announce the content of "children".
 */
export const announce = ({
	children,
	clearAnnouncementDelay,
	clearAnnouncementTimeoutRef,
	onAnnouncementClear,
	dispatch,
}: announceProps) => {
	clearTimeout(clearAnnouncementTimeoutRef.current as unknown as number);

	if (children !== null) {
		dispatch({
			type: ACTION_SET_ANNOUNCEMENT,
			payload: children,
		});
	}

	if (clearAnnouncementDelay) {
		clearAnnouncementTimeoutRef.current = setTimeout(
			() =>
				clearAnnouncement({
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
			clearAnnouncementDelay,
			clearAnnouncementTimeoutRef,
			onAnnouncementClear,
			dispatch,
		});
	} else {
		announce({
			children,
			clearAnnouncementDelay,
			clearAnnouncementTimeoutRef,
			onAnnouncementClear,
			dispatch,
		});
	}
};
