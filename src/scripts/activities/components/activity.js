import $ from 'balajs'
import { api as axios, cache } from '../util/config.js'
import { makeEmbedLink } from '../util/helpers.js'

const activity = {

	// Story Functions
	getRelatedStories: function (query, callback) {
		axios.get(query).then(function(res) {
			callback(res.data)
		}).catch('error', function (e) {console.warn(e)})
	},

	showActivity: function (data, state) {
		state.get('activityData').name = data.title.rendered

		$('#activity-title')[0].innerHTML = data.title.rendered
		$('#activity header span')[0].innerHTML = state.getBreadcrumb()

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
		let rescontent = $('#a-resources-c')[0]
		if (data.activity_resources != '') {
			rescontent.innerHTML = '<h4>Resources</h4>' + data.activity_resources
		} else {
			rescontent.innerHTML = 'This activity currently does not have any additional resources.'
		}

		$('#activity-video-container')[0].innerHTML = makeEmbedLink(data.activity_video)
	},

	makeTabContainer: function () {
		const tabs = $('.activity__nav.tabs li') // Get all tabs

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

	setActivityIcon: function (query) {
		axios.get('media?parent=' + query).then((res) => {
			$('#activity-icon')[0].innerHTML = '' // clear old image elems
			const icon = document.createElement('img')
				icon.style.opacity = 0
				icon.onload = () => { $('#activity-icon img')[0].style.opacity = 1 }
				icon.src = res.data[0].media_details.sizes.thumbnail.source_url
				icon.alt = res.data[0].alt_text
			$('#activity-icon')[0].appendChild(icon)
		}).catch('error', e => console.warn(e))
	},

	setActivityListIcon: function (query, element) {
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

	getStoriesInCat: function (stories) {
		let query = 'story?per_page=100&'
		// let query = 'story?per_page=100&include[]='

		for (let i = stories.length - 1; i >= 0; i--) {
			query += 'include[]=' + stories[i] + '&'
			// query += stories[i] + ','
		}
		query = query.slice(0, -1) // remove last ampersand or comma

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
			+ 'Each link points to additional information and a pdf download to each story'
			+ retval
		}).catch('error', e => { console.warn(e) })
	}
}

export default activity
