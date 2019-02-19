import { EXTRACT_IMAGE, SHOW_IN_PAGE, LEAVE_PAGE } from "./actionTypes";

export const extractImage = (data) => {
	return ({
		type: EXTRACT_IMAGE,
		payload: data
	})
}

export const showInPage = (data) => {
	return ({
		type: SHOW_IN_PAGE,
		payload: data
	})
}

export const leavePage = () => {
	return ({
		type: LEAVE_PAGE,
		payload: {}
	})
}