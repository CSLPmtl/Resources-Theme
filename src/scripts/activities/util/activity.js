module.exports = {

	// Story Functions
	getRelatedStories: function (query, callback, axios) {
		axios.get(query).then(function(res) {
			callback(res.data)
		}).catch('error', function (e) {console.warn(e)})
	},

	showStory: function (data, state, axios) {
		state.activityData.name = data.title.rendered

		document.getElementById('activity-title').innerHTML = data.title.rendered
		document.querySelector('#activity header span').innerHTML = state.getBreadcrumb()

		// Overview, tab 1, contains: objective, gfa tips, levels
		document.getElementById('a-desc-c').innerHTML = '<h4>Overview</h4>'
			+ data.activity_description_activity_objective
		document.getElementById('a-gfa-c').innerHTML = '<h4>Group Facilitation Tips</h4>'
			+ data.activity_description_activity_gfa
		document.getElementById('a-level-c').innerHTML = '<h4>Levels</h4>'
			+ data.activity_description_activity_level

		// Activity Insights
		// check if has insights, display insights?
		document.getElementById('a-insights-c').innerHTML = '<h4>Activity Insights</h4>'
			+ data.activity_insights

		// Linked Stories, tab 3
		this.getStoriesInCat(data.activity_linked_stories, axios)

		// Resources, tab 4
		let rescontent = document.getElementById('a-resources-c')[0]
		if (data.activity_resources != '') {
			rescontent.innerHTML = '<h4>Resources</h4>' + data.activity_resources
		} else {
			rescontent.innerHTML = 'This activity currently does not have any additional resources.'
		}

		$('#activity-video-container')[0].innerHTML = this.makeEmbedLink(data.activity_video)
	},

	makeTabContainer() {
		const tabs = document.querySelectorAll('.activity__nav.tabs li') // Get all tabs

		tabs.forEach(tab => {
			let link = tab.firstChild

			link.addEventListener('click', e => {
				e.preventDefault()

				// Get location of tab's content (href => id)
				let contentTab = link.getAttribute('href')

				// Set other tabs & nav labes as inactive
				$('.tabs-content div').forEach( t => t.className = '' )
				$('.tabs li').forEach( l => l.className = '' )

				// Set selected tab & nav item active
				tab.className = 'active'
				$(contentTab)[0].className = 'active'
			});
		})
	},

	setActivityIcon (query, axios) {
		axios.get('media?parent=' + query).then((res) => {
			document.getElementById('activity-icon').innerHTML = '' // clear old image elems
			const icon = document.createElement('img')
				icon.style.opacity = 0
			icon.onload = () => { document.getElementById('activity-icon img').style.opacity = 1 }
				icon.src = res.data[0].media_details.sizes.thumbnail.source_url
				icon.alt = res.data[0].alt_text
			document.getElementById('activity-icon').appendChild(icon)
		}).catch('error', e => console.warn(e))
	},

	setActivityListIcon (query, axios, element) {
		axios.get('media?parent=' + query).then((res) => {
			const icon = document.createElement('img')
				icon.style.opacity = 0
				icon.className = 'limage'
				icon.onload = () => icon.style.opacity = 1
				icon.src = res.data[0].media_details.sizes.thumbnail.source_url
				icon.alt = res.data[0].alt_text
			element.appendChild(icon)
		}).catch('error', e => console.warn(e))
	},

	getStoriesInCat (stories, axios) {
		// let query = 'story?'
		let query = 'story?per_page=100&include[]='

		for (let i = stories.length - 1; i >= 0; i--) {
			// query += 'include[]=' + stories[i] + '&'
			query += stories[i] + ','
		}
		query = query.slice(0, -1) // remove last ampersand
		console.log(query)

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

			document.getElementById('a-related-c').innerHTML =  '<h4>Linked Stories</h4>'
			+ 'Each link points to additional information and a pdf download to each story'
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
