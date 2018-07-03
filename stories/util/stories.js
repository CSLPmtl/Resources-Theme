module.exports = {
	// Story Functions
	getRelatedStories: function (query, callback, axios) {
		axios.get(query).then(function(res) {
			callback(res.data)
		}).catch('error', function (e) {console.warn(e)})
	},

	showStory: function (story, state) {
		document.getElementById('cat-meta').className = 'hidden'
		document.getElementById('theme-meta').className = 'hidden'

		const s = document.getElementById('story')
		s.className = ''
		document.getElementById('story-title').innerHTML = story.title.rendered
		s.querySelectorAll('header span')[0].innerHTML = state.levelstring + ' > ' + story.title.rendered



		document.getElementById('story__body-desc').innerHTML = story.stories_description
		document.getElementById('story__body-res').innerHTML = story.stories_resources


		// let res = []
		// let resHTML = '<ul>'
		// document.getElementById('story__body-links').innerHTML = story.resHTML

		console.log('story: ', story);
	},

	/**
	 * Returns the strig associated with each level
	 * @param  {int} int [the story's level]
	 * @return {string}  [corresponding level]
	 */
	level(int) {
		let i = parseInt(int)
		switch(i) {
			case 1: return 'Beginner'
			case 2: return 'Easy'
			case 3: return 'Average'
			case 4: return 'Advanced'
			case 5: return 'Expert'
		}
	}
}