import type { ActionProps, StateProps } from "./LiveRegionTypes";
import {
	ACTION_CLEAR_ANNOUNCEMENT,
	ACTION_SET_ANNOUNCEMENT,
} from "./constants";

export const reducer = (state: StateProps, action: ActionProps) => {
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
