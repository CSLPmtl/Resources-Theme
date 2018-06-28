module.exports = {
	// Story Functions
	getRelatedStories: function (query, callback, axios) {
		axios.get(query).then(function(res) {
			callback(res.data)
		}).catch('error', function (e) {console.warn(e)})
	},

	showStory: function (story, state) {
		const s = document.getElementById('story')
		document.getElementById('story-title').innerHTML = story.title.rendered
		s.querySelectorAll('header span')[0].innerHTML = '<button id="backtwo">by ' + state.active + '</button> > ' +

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