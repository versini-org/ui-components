import { expectTypeOf, test } from "vitest";

import type { LiveRegionTypes } from "../liveregion";

const requiredProps: LiveRegionTypes.Props = {
	children: "test",
};

const allProps: LiveRegionTypes.Props = {
	children: "test",
	announcementDelay: 666,
	className: "test",
	clearAnnouncementDelay: 666,
	onAnnouncementClear: () => {},
	politeness: "polite",
	role: "alert",
	visible: true,
};

const setTimeoutResult: LiveRegionTypes.SetTimeoutResult = null;
const action: LiveRegionTypes.Action = {
	type: "SET_ANNOUNCEMENT",
	payload: "test",
};
const announceProps: LiveRegionTypes.AnnounceProps = {
	children: "test",
	clearAnnouncementTimeoutRef: { current: setTimeoutResult },
	dispatch: () => {},
	clearAnnouncementDelay: 666,
	onAnnouncementClear: () => {},
};
const conditionallyDelayAnnouncementProps: LiveRegionTypes.ConditionallyDelayAnnouncementProps =
	{
		announcementTimeoutRef: { current: setTimeoutResult },
		children: "test",
		clearAnnouncementTimeoutRef: { current: setTimeoutResult },
		dispatch: () => {},
		announcementDelay: 666,
		clearAnnouncementDelay: 666,
		onAnnouncementClear: () => {},
	};

test("LiveRegion base types", () => {
	expectTypeOf(requiredProps).toMatchTypeOf<LiveRegionTypes.Props>();
	expectTypeOf(allProps).toEqualTypeOf<LiveRegionTypes.Props>();

	expectTypeOf({ roles: "test" }).not.toMatchTypeOf<LiveRegionTypes.Props>();
	expectTypeOf({ role: "test" }).not.toMatchTypeOf<LiveRegionTypes.Props>();
	expectTypeOf({ role: true }).not.toMatchTypeOf<LiveRegionTypes.Props>();
	expectTypeOf({ role: 666 }).not.toMatchTypeOf<LiveRegionTypes.Props>();
});

test("LiveRegion extra types", () => {
	expectTypeOf(
		setTimeoutResult,
	).toMatchTypeOf<LiveRegionTypes.SetTimeoutResult>();
	expectTypeOf(action).toMatchTypeOf<LiveRegionTypes.Action>();
	expectTypeOf(announceProps).toMatchTypeOf<LiveRegionTypes.AnnounceProps>();
	expectTypeOf(
		conditionallyDelayAnnouncementProps,
	).toMatchTypeOf<LiveRegionTypes.ConditionallyDelayAnnouncementProps>();

	expectTypeOf({
		types: "test",
	}).not.toMatchTypeOf<LiveRegionTypes.AnnounceProps>();
	expectTypeOf({
		type: "test",
	}).not.toMatchTypeOf<LiveRegionTypes.AnnounceProps>();
	expectTypeOf({
		type: true,
	}).not.toMatchTypeOf<LiveRegionTypes.AnnounceProps>();
	expectTypeOf({
		type: 666,
	}).not.toMatchTypeOf<LiveRegionTypes.AnnounceProps>();
	expectTypeOf({
		types: "test",
	}).not.toMatchTypeOf<LiveRegionTypes.ConditionallyDelayAnnouncementProps>();
	expectTypeOf({
		type: "test",
	}).not.toMatchTypeOf<LiveRegionTypes.ConditionallyDelayAnnouncementProps>();
	expectTypeOf({
		type: true,
	}).not.toMatchTypeOf<LiveRegionTypes.ConditionallyDelayAnnouncementProps>();
	expectTypeOf({
		type: 666,
	}).not.toMatchTypeOf<LiveRegionTypes.ConditionallyDelayAnnouncementProps>();
});
