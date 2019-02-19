import { SELECT_CATEGORY } from "./actionTypes";

export const selectCategory = (data) => {
	return ({
		type: SELECT_CATEGORY,
		payload: data
	})
}