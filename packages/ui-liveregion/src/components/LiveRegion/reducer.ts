import type { LiveRegionTypes } from "@versini/ui-liveregion-types";
import {
	ACTION_CLEAR_ANNOUNCEMENT,
	ACTION_SET_ANNOUNCEMENT,
} from "./constants";

export const reducer = (
	state: LiveRegionTypes.State,
	action: LiveRegionTypes.Action,
) => {
	switch (action?.type) {
		case ACTION_SET_ANNOUNCEMENT:
			return {
				...state,
				announcement: action.payload,
			};
		case ACTION_CLEAR_ANNOUNCEMENT:
			return {
				...state,
				announcement: null,
			};
		default:
			return state;
	}
};
