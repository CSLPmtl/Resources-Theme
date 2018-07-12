const $ = require('zest')
const anime = require('animejs')

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
		// set the element to visible
		const c = $('#cat-meta')[0]

		state.drillLevel = 1
		$('#cat-meta')[0].className = ''
		$('#activity')[0].className = 'hidden'

		anime({
			targets: '.activities-meta p',
			// delay: 1000,
			opacity: [1, 0],
			duration: 400,
			easing: 'easeOutExpo',
			complete: function() {
        anime({
					targets: '#activities__by-cat',
					delay: 100,
					opacity: [1, 0],
					duration: 500,
					easing: 'easeOutExpo',
					complete: () => {
						$('#activities__by-cat')[0].className = ''
					}
        })
    	}
		})

		// set meta description
		$('#cat-meta__header h2')[0].innerHTML = cat.name
		$('#cat-meta__header span')[0].innerHTML = state.levelstring
		$('#cat-meta__content').innerHTML = cat.description

		// set async
		setTimeout(
			story.getRelatedStories('activity?activity_cat=' + cat.id, stories => {
				const list = $('#cat-meta__list')
				list.className = 'isRefreshing'
				list.innerHTML = ''

				// create story previews
				for (var i = stories.length - 1; i >= 0; i--) {
					let s = stories[i]

					let el = document.createElement('div')
					el.className = 'story'
					el.setAttribute('data-story', s.id)
					el.innerHTML = '<h3>' + s.title.rendered + '</h3>'

					$('#cat-meta__list')[0].appendChild(el)

					el.addEventListener('click', () => {
						state.drillLevel += 1
						story.makeTabContainer()
						story.showStory(s, state, axios)
						story.getActivityIcon(s.id, axios)
					})
				}
				list.className = ''
			}, axios
		), 0)

	}
}