
// theme functions
module.exports = {

	isCached: function (ID) {
		return localStorage.getItem('t'+ID) ? true : false
	},

	cache: function (data) {
		localStorage.setItem('t' + data.id, JSON.stringify(data))
	},

	get: function (themeID, axios, callback) {
		axios.get('tags/' + themeID).then( (response) => {
			this.cache(response.data)
			callback(response.data)
		}).catch('error', function (error) {
			console.warn(error)
			return null
		})
	},

	setDOM: function (theme, state, story, axios) {
		// set the element to visible
		const t = document.getElementById('theme-meta')
		state.drillLevel = 1 // not implemented
		document.getElementById('cat-meta').className = 'hidden'
		document.getElementById('theme-meta').className = ''
		document.getElementById('story').className = 'hidden'

		// set meta description
		t.querySelectorAll('#theme-meta__header h2')[0].innerHTML = theme.name
		t.querySelectorAll('#theme-meta__header span')[0].innerHTML = state.levelstring
		document.getElementById('theme-meta__content').innerHTML = theme.description

		// set async
		setTimeout( //  + '&fields=id,title,stories_description' :(
			story.getRelatedStories('story?tags=' + theme.id, function (stories) {
				var list = document.getElementById('theme-meta__list')
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

					document.getElementById('theme-meta__list').appendChild(el)

					el.addEventListener('click', () => {
						story.showStory(s, state)
					})
				}
				list.className = ''
			}, axios
		), 0)
	}
}