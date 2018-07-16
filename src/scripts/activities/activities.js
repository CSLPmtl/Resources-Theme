'use strict';

import story from './util/activity.js'
import categ from './util/cat.js'

const $ = require('zest') // dom selector engine
const anime = require('animejs')

// DOM
const container = $('#activities__by-cat')[0]
const cards = $('.category-card')
const drilldown = $('#drilldown')[0]
const activity = $('#activity')[0]
const catMeta = $('#cat-meta')[0]

const ajax = axios.create({ // axios, our AJAX lib
	baseURL: 'https://doe.concordia.ca/cslp/wp-json/wp/v2/'
})

const state = {
	drillLevel: 0,
	active: 'none',
	categoryData: {},
	activityData: {},

	setLevel: (level, options) => {
		state.drillLevel = level

		let opts = options || {direction: ''}

		switch(level) {
			// intro screen, category selection
			case 0:
				drilldown.setAttribute('data-active', 'none')
				container.className = 'selected'
				catMeta.className = 'hidden'
				anime({
					targets: '.activities-meta p',
					opacity: [0, 1],
					duration: 500,
					easing: 'easeOutExpo',
					reverse: opts.direction,
					complete: () => {
						anime({
							targets: container,
							opacity: [0, 1],
							duration: 300,
							reverse: opts.direction
						})

					}
				})
				break;

			// Activity list
			case 1:
				if (opts.direction == 'reverse') {
					anime({
						targets: activity,
						opacity: [1,0],
						duration: 400,
						translateY: { value: 40, duration: 400 },
						easing: 'easeOutExpo',
						complete: () => {
							activity.className = 'hidden'
							anime({
								targets: '#activities__by-cat',
								delay: 100,
								opacity: [1, 0],
								duration: 600,
								reverse: opts.direction,
								easing: 'easeOutExpo',
								complete: () => {
									drilldown.setAttribute('data-active', 'cat')
									container.className = ''
									catMeta.className = ''
									activity.className = 'hidden'
								}
	  					})
  					}
					})
				} else {
					anime({
			targets: '.activities-meta p',
			opacity: [1, 0],
			duration: 400,
			reverse: opts.direction,
			easing: 'easeOutExpo',
			complete: () => {
	      anime({
					targets: '#activities__by-cat',
					delay: 100,
					opacity: [1, 0],
					duration: 500,
					reverse: opts.direction,
					easing: 'easeOutExpo',
					complete: () => {
						drilldown.setAttribute('data-active', 'cat')
						container.className = ''
						catMeta.className = ''
						activity.className = 'hidden'
					}
				})
	  	}
		})
				}
				break;

			// Activity
			case 2:
				activity.className = ''
				catMeta.className = 'hidden'
				anime({
					targets: activity,
					opacity: [0, 1],
					duration: 400,
					translateY: { value: -40, duration: 800 },
					easing: 'easeInExpo'
				})
				break;
		}
	},

	getBreadcrumb: () => {
		let base = ''
		let cat = ''

		// breaks intentionally ommited for smart follow-through
		// depending on level, the string will update relevant parts
		switch(state.drillLevel) {
			case 0:
				return null
				break;
			case 2:
				cat = ' > ' + state.activityData.name
			case 1:
				base = 'By category > ' + state.categoryData.name
				break;
		}
		return base + cat
	},

	backone: () => state.setLevel(state.drillLevel - 1, {direction: 'reverse'}),
	hidemeta: () => ('.activity-meta')[0].className = 'stories-meta hidden'

}


function init () {
	state.setLevel(0) // resets classes just in case
	cards.forEach(item => {
		on('click', item, event => {

			event.preventDefault()

			let ID = item.getAttribute('data-cat')

			if (!categ.isCached(ID)) {
				categ.get(ID, ajax, data => {
					console.log('Retrieved live data: ID #' + ID)
					state.categoryData = data
					categ.setDOM(data, state, story, ajax)
				})
			} else {
				let data = JSON.parse(localStorage.getItem('abra_ac'+ID))
				console.log('Retrieved cached data: ID #' + ID)
				state.categoryData = data
				categ.setDOM(data, state, story, ajax)
			}
			state.setLevel(1)
		})
	})

	on('click', '#back-button', () => state.backone() )
}
on('DOMContentLoaded', window, init())


function on(event, element, cb, passive) {
	var el = $(element)[0] || element
	el.addEventListener(event, cb, passive)
}