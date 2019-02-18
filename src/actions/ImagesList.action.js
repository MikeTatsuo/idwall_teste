import { POPULATE_IMAGES, GET_IMAGES_PER_CATEGORY, GET_IMAGE_BY_ID } from "./actionTypes";

export const populateImages = (data) => {
	return ({
		type: POPULATE_IMAGES,
		payload: { data }
	})
}

export const getImagesPerCategory = (data) => {
	return ({
		type: GET_IMAGES_PER_CATEGORY,
		payload: {}
	})
}

export const getImageById = (data) => {
	return ({
		type: GET_IMAGE_BY_ID,
		payload: {}
	})
}