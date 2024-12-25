declare namespace LiveRegionTypes {
	export type SetTimeoutResult = ReturnType<typeof setTimeout> | null;
	export type Action =
		| Record<string, never>
		| {
				type: "SET_ANNOUNCEMENT" | "CLEAR_ANNOUNCEMENT";
				payload?: string | React.ReactNode;
		  };

	export type State = {
		announcement: string | React.ReactNode;
	};

	export type PolitenessByRole = {
		[key: string]: any;
	};

	export type ClearAnnouncementProps = {
		dispatch: React.Dispatch<Action>;
		onAnnouncementClear?: () => void;
	};

	export type AnnounceProps = {
		children: React.ReactNode;
		clearAnnouncementTimeoutRef: React.MutableRefObject<SetTimeoutResult>;
		dispatch: React.Dispatch<Action>;
		clearAnnouncementDelay?: number;
		onAnnouncementClear?: () => void;
	};

	export type ConditionallyDelayAnnouncementProps = {
		announcementTimeoutRef: React.MutableRefObject<SetTimeoutResult>;
		children: React.ReactNode;
		clearAnnouncementTimeoutRef: React.MutableRefObject<SetTimeoutResult>;
		dispatch: React.Dispatch<Action>;
		announcementDelay?: number;
		clearAnnouncementDelay?: number;
		onAnnouncementClear?: () => void;
	};

	export type Props = {
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
		role?: "alert" | "status" | null | undefined;
		/**
		 * Whether or not the live region should be visible.
		 */
		visible?: boolean;
	};
}

export { LiveRegionTypes };
