import { ROLES } from "./constants";

export type ClearAnnouncementProps = {
	liveRegionRef: React.RefObject<HTMLElement | undefined>;
	onAnnouncementClear?: () => void;
};

export type announceProps = {
	children: React.ReactNode;
	liveRegionRef: React.RefObject<HTMLElement | undefined>;
	clearAnnouncementDelay?: number;
	clearAnnouncementTimeoutRef: React.MutableRefObject<
		NodeJS.Timeout | number | null | undefined
	>;
	onAnnouncementClear?: () => void;
};

export type conditionallyDelayAnnouncementProps = {
	children: React.ReactNode;
	liveRegionRef: React.RefObject<HTMLElement | undefined>;
	announcementTimeoutRef: React.MutableRefObject<
		NodeJS.Timeout | null | undefined
	>;
	announcementDelay?: number;
	clearAnnouncementDelay?: number;
	clearAnnouncementTimeoutRef: React.MutableRefObject<
		NodeJS.Timeout | number | null | undefined
	>;
	onAnnouncementClear?: () => void;
};

export type LiveRegionProps = {
	/**
	 * The content to be announced by the live region.
	 */
	children: React.ReactNode;
	/**
	 * The `className` to apply to the live region.
	 */
	className?: string;
	/**
	 * The `aria-live` politeness level to apply to the live region.
	 */
	politeness?: "polite" | "assertive" | "off" | null | undefined;
	/**
	 * The `role` to apply to the live region.
	 */
	role?: typeof ROLES.ALERT | "status" | null | undefined;
	/**
	 * Whether or not the live region should be visible.
	 */
	visible?: boolean;
	/**
	 * The number of milliseconds to wait before announcing the content.
	 */
	announcementDelay?: number;
	/**
	 * The number of milliseconds to wait before clearing the announcement.
	 */
	clearAnnouncementDelay?: number;
	/**
	 * A callback to be invoked when the announcement is cleared.
	 */
	onAnnouncementClear?: () => void;
};
