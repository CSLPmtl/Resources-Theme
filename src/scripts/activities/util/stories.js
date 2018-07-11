// Should technically be 'activity'

module.exports = {
	// Story Functions
	getRelatedStories: function (query, callback, axios) {
		axios.get(query).then(function(res) {
			callback(res.data)
		}).catch('error', function (e) {console.warn(e)})
	},

	showStory: function (a, state) {
		document.getElementById('cat-meta').className = 'hidden'

		const s = document.getElementById('story')
		s.className = ''
		document.getElementById('story-title').innerHTML = a.title.rendered
		s.querySelectorAll('header span')[0].innerHTML = state.levelstring + ' > ' + a.title.rendered

		document.getElementById('a-overview-c').innerHTML = '<h4>Overview</h4>' + a.activity_description_activity_objective
		document.getElementById('a-gfa-c').innerHTML = '<h4>Group Facilitation Tips</h4>' + a.activity_description_activity_gfa
		if (a.activity_description_activity_has_insights) {

		}

		document.getElementById('a-level-c').innerHTML = '<h4>Levels</h4>' + a.activity_description_activity_level

		document.getElementById('activity-video-container').innerHTML = this.makeEmbedLink(a.activity_video)

		console.log('activity: ', a);
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
	},

	makeTabContainer(data) {
	},

	getActivityIcon (query, axios) {
		axios.get('media?parent=' + query).then((res) => {
			document.getElementById('activity-icon').innerHTML = '<img src="'
			+ res.data[0].media_details.sizes.thumbnail.source_url
			+ '" alt="'
			+ res.data[0].alt_text
			+ '">'
		}).catch('error', e => console.warn(e))
	},

	getStoriesInCat (query, callback, axios) {
		axios.get(query).then(function(res) {
			callback(res.data)
		}).catch('error', function (e) {console.warn(e)})
	},

	makeEmbedLink(link) {
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = link.match(regExp);

    if (match && match[2].length != 11) {
      return 'error';
    }

		let embed = '<iframe width="560" height="315" src="//www.youtube.com/embed/'
		return embed + match[2] + '" frameborder="0" allowfullscreen></iframe>'
	}
}