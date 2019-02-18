import { POPULATE_IMAGES } from "./actionTypes";

export const populateImages = (data) => {
	return ({
		type: POPULATE_IMAGES,
		payload: { data }
	})
}