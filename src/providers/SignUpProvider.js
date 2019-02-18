import * as api from './Api';

export function signup(email) {
	return new Promise((resolve, reject) => {
		api.post('signup', { "email": email })
			.then(resp => resolve(resp.user))
			.catch(err => reject(err.error.message))
	})
}