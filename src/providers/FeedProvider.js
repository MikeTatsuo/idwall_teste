import * as api from './Api';

export function getFeed(token, category) {
	return new Promise((resolve, reject) => {
		api.get('feed', token, category && `?category=${category}`)
			.then(resp => resolve(resp))
			.catch(err => reject(err))
	})
}