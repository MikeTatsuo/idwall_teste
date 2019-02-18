import { POPULATE_IMAGES, GET_IMAGE_BY_ID, GET_IMAGES_PER_CATEGORY } from "../actions/actionTypes";

let initialState = {
	list: [],
	lastId: 0
}

export const images = (state = initialState, { type, payload }) => {
	switch (type) {
		case POPULATE_IMAGES:
			return {
				list: state.list.concat(payload.data.list.map(item => {
					return {
						id: state.lastId++,
						url: item,
						category: payload.data.category
					}
				})),
				lastId: state.lastId
			};
		case GET_IMAGES_PER_CATEGORY:
			return
		case GET_IMAGE_BY_ID:
			return
		default:
			return state;
	}
}