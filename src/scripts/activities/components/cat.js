import $ from 'balajs'
import activity from './activity.js'
import { api as axios, cache } from '../util/config.js'

export default function setDOM (state) {
	const cm = '#cat-meta'
	const c = $(cm)[0]

	const cat = state.get('categoryData')

	// set meta description
	$(cm + '__header h2')[0].innerHTML = cat.name
	$(cm + '__header span')[0].innerHTML = state.getBreadcrumb()
	$(cm + '__content')[0].innerHTML = cat.description

	// set async
	setTimeout(
		activity.getRelatedStories('activity?per_page=100&activity_cat=' + cat.id, stories => {
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
				activity.setActivityListIcon(s.id, el)

				list.appendChild(el)

				el.addEventListener('click', () => {
					state.drillTo(2)

					state.mutate({activityData: s})

					activity.makeTabContainer()
					activity.showActivity(s, state)
					activity.setActivityIcon(s.id)
				})
			}

			console.groupEnd()

			list.className = ''
		}
	), 0)
}

