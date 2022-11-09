import { ADDED } from "./actionTypes";

export const addToList = item => {
	return {
		type: ADDED,
		payload: item,
	};
};
