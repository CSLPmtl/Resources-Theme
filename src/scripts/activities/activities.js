'use strict';

import story from './util/activity.js'
import categ from './util/cat.js'

const $ = require('zest') // dom selector engine
const anime = require('animejs')

// DOM
const container = $('#activities__by-cat')
const cards = $('.category-card')
const drilldown = $('#drilldown')

const ajax = axios.create({ // axios, our AJAX lib
	baseURL: 'http://doe.concordia.ca/cslp/wp-json/wp/v2/'
})

const state = {
	drillLevel: 0,
	active: 'none',
	levelstring: '',
	themeID: null, // for further caching. Implement later!

	backone: () => {
		state.drillLevel -= 1

		console.log('state.drillLevel: ', state.drillLevel)

		if (state.drillLevel <= 0) {
			$('#drilldown')[0].setAttribute('data-active', 'none')
			$('#activities__by-cat')[0].className = 'selected'
			anime({
				targets: '.activities-meta p',
				// delay: 1000,
				opacity: [0, 1],
				duration: 400,
				easing: 'easeOutExpo',
				complete: () => {
					anime({
						targets: '#activities__by-cat',
						opacity: [0,1],
						duration: 700
					})
				}
			})
			state.drillLevel = 0
		}
		if (state.drillLevel == 1) {
			$('#cat-meta')[0].className = ''
			$('#activity')[0].className = 'hidden'
			$('#activities__by-cat')[0].className = '' // hidden
		}
	},

	hidemeta: () => {
		$('.activity-meta')[0].className = 'stories-meta hidden'
	}
}


function init () {
	$('#cat-meta').className = 'hidden'

	cards.forEach(item => {
		on('click', item, event => {

			event.preventDefault()

			let ID = item.getAttribute('data-cat')

			if (!categ.isCached(ID)) {
				categ.get(ID, ajax, data => {
					console.log('Retrieved live data: ID #' + ID)
					state.levelstring = 'By category > ' + data.name
					categ.setDOM(data, state, story, ajax)
				})
			} else {
				let data = JSON.parse(localStorage.getItem('abra_ac'+ID))
				console.log('Retrieved cached data: ID #' + ID)
				state.levelstring = 'By category > ' + data.name
				categ.setDOM(data, state, story, ajax)
			}

			container.className = '';
			drilldown[0].setAttribute('data-active', 'cat')
		})
	})

	on('click', '#back-button', () => { state.backone() })
}
on('DOMContentLoaded', window, init())


function on(event, element, cb, passive) {
	var el = $(element)[0] || element
	el.addEventListener(event, cb, passive)
}