import {
	EXTRACT_IMAGE,
	SHOW_IN_PAGE,
	LEAVE_PAGE
} from "../actions/actionTypes";

const initialState = {
	id: 0,
	url: "",
	show: false
}

export const image = (state = initialState, {
	type,
	payload
}) => {
	switch (type) {
		case EXTRACT_IMAGE:
			return payload.images.list.find((im) => {
				return im.id === payload.image.id;
			})
		case SHOW_IN_PAGE:
			return {
				id: payload.id,
				url: payload.url,
				show: !payload.show
			}
		case LEAVE_PAGE:
			return {
				image: initialState
			}
		default:
			return state;
	}
}