import { POPULATE_IMAGES } from "../actions/actionTypes";

let initialState = {
	list: []
}

export const images = (state = initialState, { type, payload }) => {
	switch (type) {
		case POPULATE_IMAGES:
			return {
				list: payload.data.list.map((item, index) => {
					return {
						id: index,
						url: item,
						category: payload.data.category
					}
				}),
				imagesCategory: payload.data.category
			};		
		default:
			return state;
	}
}