import * as axios from 'axios';
let url = "https://api-iddog.idwall.co/"

export function get(endpoint, token, params) {
	return new Promise((resolve, reject) => {
		axios.get(`${url}${endpoint}${params ? params : ""}`, {
			"headers": {
				"Authorization": token,
				"Content-Type": "application/json"
			}
		})
			.then(response => resolve(response.data))
			.catch(error => reject(error.response.data))
	})
}


export function post(endpoint, options) {
	return new Promise((resolve, reject) => {
		axios.post(`${url}${endpoint}`, options)
			.then(response => resolve(response.data))
			.catch(error => reject(error.response.data))
	})
}