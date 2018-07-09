'use strict';

import theme from './util/theme.js'
import story from './util/stories.js'
import categ from './util/cat.js'

const a = axios.create({
	baseURL: window._burl // set in HTML via wordpress
	//baseURL: 'http://10.106.133.138/~mheming/resources/wp-json/wp/v2/' // development
})

const toggle = document.getElementById('a')
let themesToggled = !toggle.checked

// app state
const state = {}
state.drillLevel = 0
state.active = 'none'
state.levelstring = ''
state.themeID = null // for further caching. Implement later!
state.backone = function () {
	this.drillLevel -= 1
	console.log('state.drillLevel: ', state.drillLevel)
}
state.hidemeta = function () {
	document.querySelectorAll('.stories-meta')[0].className = 'stories-meta hidden'
}

const themesContainer = document.getElementById('stories__by-theme')
const categsContainer = document.getElementById('stories__by-cat')
const themeItems = themesContainer.querySelectorAll('.theme-card')
const categItems = categsContainer.querySelectorAll('.category-card')
document.getElementById('cat-meta').className = 'hidden'
document.getElementById('theme-meta').className = 'hidden'

const d = document.getElementById('drilldown');

// Add toggle evntlist
toggle.addEventListener('click', function () {
	themesToggled = !toggle.checked;
	if (!themesToggled) {
		themesContainer.className = 'selected';
		categsContainer.className = '';
	} else {
		themesContainer.className = '';
		categsContainer.className = 'selected';
	}

	document.getElementById('cat-meta').className = 'hidden'
	document.getElementById('theme-meta').className = 'hidden'
	document.getElementById('story').className = 'hidden'
})

if (!themesToggled) {
	themesContainer.className = 'selected'
	categsContainer.className = ''
} else {
	themesContainer.className = ''
	categsContainer.className = 'selected'
}

// implement the logic on each Theme item
themeItems.forEach(function (item) {
	item.addEventListener('click', function(e) {
		e.preventDefault()
		let ID = item.getAttribute('data-theme')

		if (!theme.isCached(ID)) { // if not cached, check online
			theme.get(ID, a, data => {
				console.log('retrieved live data: ID #' + ID)
				theme.setDOM(data, state, story, a)
			})
		} else {
			let data = JSON.parse(localStorage.getItem('t'+ID))
			console.log('retrieved cached data: ID #' + ID)
			theme.setDOM(data, state, story, a)
		}

		themesContainer.className = ''; // hide theme list
		d.setAttribute('data-active', 'theme')

	})
})

// implement the logic on each Category Item
categItems.forEach(function (item) {
	item.addEventListener('click', function(e) {
		e.preventDefault()
		let ID = item.getAttribute('data-cat')


		if (!categ.isCached(ID)) {
			categ.get(ID, a, function (data) {
				console.log('retrieved live data: ID #' + ID)
				state.levelstring = 'By category > ' + data.name
				categ.setDOM(data, state, story, a)
			})
		} else {
			let data = JSON.parse(localStorage.getItem('c'+ID))
			console.log('retrieved cached data: ID #' + ID)
			state.levelstring = 'By category > ' + data.name
			categ.setDOM(data, state, story, a)
		}
		categsContainer.className = '';
		d.setAttribute('data-active', 'cat')
	})
})