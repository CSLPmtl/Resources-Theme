import $ from 'balajs'

module.exports = {
	isCached: function (ID) {
		return localStorage.getItem('abra_ac' + ID) ? true : false
	},

	cache: function (data) {
		localStorage.setItem('abra_ac' + data.id, JSON.stringify(data))
	},

	get: function (catID, axios, callback) {
		axios.get('activity_cat/' + catID).then( response => {
			this.cache(response.data)
			callback(response.data)
		}).catch('error', function (error) {
			console.warn(error)
			return null
		})
	},

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