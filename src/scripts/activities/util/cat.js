import $ from 'balajs' // jquery-like syntax with maybe a tenth of the size

// Note the Node-style export
module.exports = {

	/**
	 * Returns whether the provided ID has been cached in localStorage
	 * @param {Number} ID ID to be tested
	 */
	isCached: function (ID) {
		return localStorage.getItem('abra_ac' + ID) ? true : false
	},

	/**
	 * Encodes JSON data (which must have an ID as a key) into a localstorage string
	 * @param {JSON} data JSON data, must include am 'id' field
	 */
	cache: function (data) {
		localStorage.setItem('abra_ac' + data.id, JSON.stringify(data))
	},

	/**
	 * Caches the requested data and calls a callback on it
	 * @param {Number} catID The ID of the requested data
	 * @param {Object} axios The shared axios instance
	 * @param {Any} callback Callback to be excecuted on success
	 */
	get: function (catID, axios, callback) {
		axios.get('activity_cat/' + catID).then( response => {
			this.cache(response.data)
			callback(response.data)
		}).catch('error', function (error) {
			console.warn(error)
			return null
		})
	},

	/**
	 * Fetches and animates in the Story DOM
	 * @param {Number} cat Selected Category
	 * @param {Object} state The shared State object
	 * @param {Number} story The requested story to display
	 * @param {Object} axios The shared axios instance
	 */
	setDOM: function (cat, state, story, axios) {
		const cm = '#cat-meta'
		const c = $(cm)[0]

		// set meta description
		$(cm + '__header h2')[0].innerHTML = cat.name
		$(cm + '__header span')[0].innerHTML = state.getBreadcrumb()
		$(cm + '__content')[0].innerHTML = cat.description

		// set async
		setTimeout(
			story.getRelatedStories('activity?per_page=100&activity_cat=' + cat.id, stories => {
				console.group('%c Related Stories for ID #' + cat.id, 'color: #F75C03')
				console.info('Stories: ', stories)

				const list = $('#cat-meta__list')[0]
				list.className = 'isRefreshing'
				list.innerHTML = ''

				// create story previews
				for (let i = stories.length - 1; i >= 0; i--) {
					let s = stories[i]

					let el = document.createElement('div')
					el.className = 'activity-item'
					el.setAttribute('data-story', s.id)
					el.innerHTML = '<h3>' + s.title.rendered + '</h3>'
					story.setActivityListIcon(s.id, axios, el)

					list.appendChild(el)

					el.addEventListener('click', () => {
						state.setLevel(2)

						state.pushState(s)

						story.makeTabContainer()
						story.showStory(s, state, axios)
						story.setActivityIcon(s.id, axios)
					})
				}

				console.groupEnd()

				list.className = ''
			}, axios
		), 0)
	}
}
