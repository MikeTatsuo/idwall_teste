import { POPULATE_IMAGES } from "../actions/actionTypes";

const initialState = {
	list: []
}

export const images = (state = initialState, { type, payload }) => {
	switch (type) {
		case POPULATE_IMAGES:
			return {
				list: payload.data.list.map((item, index) => {
					return {
						id: index + 1,
						url: item,
						category: payload.data.category,
						show: false
					}
				}),
				imagesCategory: payload.data.category
			};
		default:
			return state;
	}
}