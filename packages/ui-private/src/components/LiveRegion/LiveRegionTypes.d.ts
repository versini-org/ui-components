import {
	ACTION_CLEAR_ANNOUNCEMENT,
	ACTION_SET_ANNOUNCEMENT,
	ROLES,
} from "./constants";

export type ActionProps =
	| Record<string, never>
	| {
			type: typeof ACTION_SET_ANNOUNCEMENT | typeof ACTION_CLEAR_ANNOUNCEMENT;
			payload?: string | React.ReactNode;
	  };

export type StateProps = {
	announcement: string | React.ReactNode;
};

export type PolitenessByRole = {
	[key: string]: any;
};

export type ClearAnnouncementProps = {
	dispatch: React.Dispatch<ActionProps>;
	onAnnouncementClear?: () => void;
};

export type announceProps = {
	children: React.ReactNode;
	clearAnnouncementTimeoutRef: React.MutableRefObject<
		NodeJS.Timeout | number | null | undefined
	>;
	dispatch: React.Dispatch<ActionProps>;
	clearAnnouncementDelay?: number;
	onAnnouncementClear?: () => void;
};

export type conditionallyDelayAnnouncementProps = {
	announcementTimeoutRef: React.MutableRefObject<
		NodeJS.Timeout | null | undefined
	>;
	children: React.ReactNode;
	clearAnnouncementTimeoutRef: React.MutableRefObject<
		NodeJS.Timeout | number | null | undefined
	>;
	dispatch: React.Dispatch<ActionProps>;
	announcementDelay?: number;
	clearAnnouncementDelay?: number;
	onAnnouncementClear?: () => void;
};

export type LiveRegionProps = {
	/**
	 * The content to be announced by the live region.
	 */
	children: React.ReactNode;
	/**
	 * The number of milliseconds to wait before announcing the content.
	 */
	announcementDelay?: number;
	/**
	 * The `className` to apply to the live region.
	 */
	className?: string;
	/**
	 * The number of milliseconds to wait before clearing the announcement.
	 */
	clearAnnouncementDelay?: number;
	/**
	 * A callback to be invoked when the announcement is cleared.
	 */
	onAnnouncementClear?: () => void;
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
};
