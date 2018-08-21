import axios from 'axios' // Axios, our AJAX lib

const defaults = {
	paths: {
		namespace: 'abra_ac', // localstorage namespace
		cachemiss: 'activity_cat/', // path for axios item retrieval on miss
		axiosBURL: 'https://doe.concordia.ca/cslp/wp-json/wp/v2/'
	}
}

const cache = {
	config: {
		prefix: defaults.paths.namespace,
		base: defaults.paths.cachemiss
	},

	exists: function (ID) {
		return localStorage.getItem(this.config.prefix + ID) ? true : false
	},

	validate: function (ID) {
		let pfx = this.config.prefix
		if (this.exists(ID)) {
			let item = JSON.parse(localStorage.getItem(pfx + ID))

			// set cache to expire in two weeks
			if (item.timestamp + 1.21e+9 > Date.now()) {
				return item
			} else {
				console.log('Cached item exists, but is older than 2 weeks')
				return false
			}
		} else {
			return false
		}
	},

	retrieve: function (ID) {
		return new Promise ((resolve, reject) => {
			if (this.validate(ID)) {
				console.log('Retrieved cached data: ID #' + ID)
				resolve(JSON.parse(localStorage.getItem(this.config.prefix + ID)))
			} else {
				api.get(this.config.base + ID).then( response => {
					this.set(this.config.prefix + ID, response.data)
					console.log(`Retrieved live data with ID #${ID} and cached it`)
					resolve(response.data)
				}).catch('error', error => reject(error))
			}
		})
	},

	get: function (ID) {
		return new Promise((resolve, reject) => {
			this.retrieve(ID).then(data => resolve(data))
		})
	},

	set: function (key, data) {
		let item = data
		data.timestamp = Date.now()
		localStorage.setItem(key, JSON.stringify(data))
	}
}

const api = axios.create({
	baseURL: defaults.paths.axiosBURL
})


export { api, cache, defaults }


// TODO: everything ->
// 1. [done] make this an object I can import everywhere with all my instances
// 2. hold immutable values
// 3. hold the state object
