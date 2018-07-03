module.exports = {
	isCached: function (ID) {
		return localStorage.getItem('c'+ID) ? true : false
	},

	cache: function (data) {
		localStorage.setItem('c' + data.id, JSON.stringify(data))
	},

	get: function (catID, axios, callback) {
		axios.get('categories/' + catID).then( response => {
			this.cache(response.data)
			callback(response.data)
		}).catch('error', function (error) {
			console.warn(error)
			return null
		})
	},

	setDOM: function (cat, state, story, axios) {
		// set the element to visible
		//
		const c = document.getElementById('cat-meta')
		state.drillLevel = 1 // not implemented
		document.getElementById('cat-meta').className = ''
		document.getElementById('theme-meta').className = 'hidden'
		document.getElementById('story').className = 'hidden'

		console.log('state: ', state);

		// set meta description
		c.querySelectorAll('#cat-meta__header h2')[0].innerHTML = cat.name
		c.querySelectorAll('#cat-meta__header span')[0].innerHTML = state.levelstring
		document.getElementById('cat-meta__content').innerHTML = cat.description

		// set async
		setTimeout( //  + '&fields=id,title,stories_description' :(
			story.getRelatedStories('story?categories=' + cat.id, function (stories) {
				var list = document.getElementById('cat-meta__list')
				list.className = 'isRefreshing'
				list.innerHTML = ''

				// create story previews
				for (var i = stories.length - 1; i >= 0; i--) {
					let s = stories[i]

					let el = document.createElement('div')
					el.className = 'story'
					el.setAttribute('data-story', s.id)
					el.innerHTML = '<h3>' + s.title.rendered + '</h3>'
					+ '<p>' + s.stories_description + '</p>'
					+ '<p class="meta"><b>Level:</b> ' + story.level(s.story_level) + '</p>';

					document.getElementById('cat-meta__list').appendChild(el)

					el.addEventListener('click', () => {
						story.showStory(s, state)
					})
				}
				list.className = ''
			}, axios
		), 0)

	}
}