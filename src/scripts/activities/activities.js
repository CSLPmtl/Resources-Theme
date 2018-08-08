/**
 * Activities module
 * @author Michael Hemingway
 */

'use strict';


import { h, mount, patch } from 'petit-dom' // Virtual DOM
import $ from 'balajs' // DOM selector engine
import axios from 'axios' // Axios, our AJAX lib

axios.create({
	baseURL: 'https://doe.concordia.ca/cslp/wp-json/wp/v2/'
})

// App state and routing
import State from './state.js'
const state = new State()

// Helpers
import { on } from './util/helpers.js'

// App components
import story from './util/activity.js'
import categ from './util/cat.js'

// DOM
const container = $.one('#activities__by-cat')
const cards = $('.category-card')
const drilldown = $.one('#drilldown')
const activity = $.one('#activity')
const catMeta = $.one('#cat-meta')


	//hidemeta: () => ('.activity-meta')[0].className = 'stories-meta hidden',

	// NEW
	// testURL: () => {
	// 	console.groupCollapsed('%c History state', 'color: #35B5FF')
	// 	console.info(window.history)

	// 	// TODO: return if URL is valid, and set state accordingly
	// 	if (window.location.href) {}
	// 	console.groupEnd()
	// }

	// pushState: (data) => {
	// 	if (history.pushState) {
	// 		if (state.drillLevel == 0)
	// 			history.pushState(state.history, '', data.slug)
	// 		else /*if (state.drillLevel == 1)*/
	// 			history.pushState(state.history, '', state.categoryData.slug + '/' + data.slug)
	// 		// else if (state.drillLevel == 2)
	// 		// 	history.pushState(state.history, '', state.categoryData.slug + '/' + data.slug)
	// 	}
	// }
// }

function init () {
	// state.testURL()
	state.setDrillLevel(0) // resets classes just in case

	cards.forEach(item => {
		on('click', $.one(item), event => {

			event.preventDefault()

			let ID = item.getAttribute('data-cat')

			if (!categ.isCached(ID)) {
				categ.get(ID, ajax, data => {
					console.log('Retrieved live data: ID #' + ID)
					setSelectedCategory(data)
				})
			} else {
				let data = JSON.parse(localStorage.getItem('abra_ac'+ID))
				console.log('Retrieved cached data: ID #' + ID)
				setSelectedCategory(data)
			}
			state.setLevel(1)
		})
	})

	on('click', $.one('#back-button'), () => state.backone() )
}
on('DOMContentLoaded', window, init())

// select
function setSelectedCategory(data) {
	state.pushState(data)
	state.categoryData = data
	categ.setDOM(data, state, story, ajax)
}