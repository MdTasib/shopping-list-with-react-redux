import { ADDED } from "./actionTypes";

// INITIAL STATE
const initialState = {
	items: ["Keyboard", "Mouse", "Monitor"],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDED:
			return {
				...state,
				items: [...state.items, action.payload],
			};

		default:
			return state;
	}
};

export default reducer;
