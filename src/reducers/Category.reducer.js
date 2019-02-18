import { SELECT_CATEGORY } from "../actions/actionTypes";

const initialState = {
	selectedCategory: ""
}

export const category = (state = initialState, {type, payload}) => {
	switch (type) {
		case SELECT_CATEGORY:
			return {
				selectedCategory: payload.selectedCategory
			}
		default:
			return state;
	}
}