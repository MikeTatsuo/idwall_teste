import { UPDATE_USER } from "../actions/actionTypes";

const initialState = {
	email: "",
	token: "",
	error: ""
};

export const user = (state = initialState, { type, payload }) => {
	switch (type) {
		case UPDATE_USER:
			return payload.user;
		default:
			return state;
	}
}