import { UPDATE_USER } from "./actionTypes";

export const updateUser = (data) => {
	return ({
		type: UPDATE_USER,
		payload: {
			user: {
				email: data.email,
				token: data.token,
				error: data.error
			}
		}
	})
}