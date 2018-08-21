/**
 * Activities module
 * @author Michael Hemingway
 */

'use strict';

import { h, mount, patch } from 'petit-dom' // Virtual DOM
import $ from 'balajs' // DOM selector engine

import { api as axios, cache } from './util/config.js'

import state from './util/state.js' // App state and routing
import { on } from './util/helpers.js' // Helpers
import categ from './components/cat.js' // App components

// DOM
const container = $.one('#activities__by-cat')
const cards = $('.category-card')
const drilldown = $.one('#drilldown')
const activity = $.one('#activity')
const catMeta = $.one('#cat-meta')


	//hidemeta: () => ('.activity-meta')[0].className = 'stories-meta hidden',

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
	cards.forEach(item => {
		on('click', $.one(item), event => {
			event.preventDefault()

			let ID = item.getAttribute('data-cat')
			cache.get(ID).then(data => setSelectedCategory(data))
		})
	})

	on('click', $.one('#back-button'), () => {
		state.drillTo(state.get('drill').level - 1)
	})
}
on('DOMContentLoaded', window, init())

// select
function setSelectedCategory(data) {
	state.drillTo(1)
	$.one('.activities-meta').style = 'visibility: hidden'
	state.mutate({categoryData: data})
	categ(state)
}
