const $ = require('zest')
const anime = require('animejs')

module.exports = {
	// Story Functions
	getRelatedStories: function (query, callback, axios) {
		axios.get(query).then(function(res) {
			callback(res.data)
		}).catch('error', function (e) {console.warn(e)})
	},

	showStory: function (data, state, axios) {
		$('#cat-meta')[0].className = 'hidden'
		$('#activity')[0].className = ''
		anime({
			targets: '#activity',
			opacity: [0, 1],
			duration: 400,
			translateY: { value: -40, duration: 800 },
			easing: 'easeOutExpo',
		})


		$('#activity-title')[0].innerHTML = data.title.rendered

		$('#activity header span')[0].innerHTML =
			state.levelstring + ' > ' + data.title.rendered

		// Overview, tab 1, contains: objective, gfa tips, levels
		$('#a-desc-c')[0].innerHTML = '<h4>Overview</h4>'
			+ data.activity_description_activity_objective

		$('#a-gfa-c')[0].innerHTML = '<h4>Group Facilitation Tips</h4>'
			+ data.activity_description_activity_gfa

		$('#a-level-c')[0].innerHTML = '<h4>Levels</h4>'
			+ data.activity_description_activity_level

		// Activity Insights
		// check if has insights, display insights?
		$('#a-insights-c')[0].innerHTML = '<h4>Activity Insights</h4>'
			+ data.activity_insights

		// Linked Stories, tab 3
		this.getStoriesInCat(data.activity_linked_stories, axios)

		// Resources, tab 4
		$('#a-resources-c')[0].innerHTML = '<h4>Resources</h4>'
			+ data.activity_resources

		$('#activity-video-container')[0].innerHTML = this.makeEmbedLink(data.activity_video)
	},

	makeTabContainer() {
		const tabs = $('.activity__nav.tabs li') // Get all tabs

		tabs.forEach(tab => {
			let link = tab.firstChild

			link.addEventListener('click', e => {
				e.preventDefault()

				// Get location of tab's content (href => id)
				let contentTab = link.getAttribute('href')

				// Set other tabs & nav labes as inactive
				$('.tabs-content div').forEach(t => { t.className = '' })
				$('.tabs li').forEach(l => { l.className = '' })

				// Set selected tab & nav item active
				tab.className = 'active'
				$(contentTab)[0].className = 'active'
			});
		})
	},

	getActivityIcon (query, axios) {
		axios.get('media?parent=' + query).then((res) => {
			const icon = document.createElement('img')
			icon.style.opacity = 0
			icon.onload = () => { $('#activity-icon img')[0].style.opacity = 1 }
			icon.src = res.data[0].media_details.sizes.thumbnail.source_url
			icon.alt = res.data[0].alt_text
			$('#activity-icon')[0].appendChild(icon)
		}).catch('error', e => console.warn(e))
	},

	getStoriesInCat (stories, axios) {
		let query = 'story?'

		// inneficient, yet WP api is so far incapable of dealing with something better.
		for (let i = stories.length - 1; i >= 0; i--) {
			query += 'include[]=' + stories[i] + '&'
		}
		query = query.slice(0, -1) // remove last ampersand

		axios.get(query).then( res => {
			let retval = '<ul>'
			for (var i = res.data.length - 1; i >= 0; i--) {
				retval += '<li><a href="'
					+ res.data[i].link
					+ '">'
					+ res.data[i].title.rendered
					+ '</a></li>'
			}
			retval + '</ul>'

			$('#a-related-c')[0].innerHTML =  '<h4>Linked Stories</h4>'
			+ '<p>Each link points to additional information and a pdf download to each story</p>'
			+ retval
		}).catch('error', e => { console.warn(e) })
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