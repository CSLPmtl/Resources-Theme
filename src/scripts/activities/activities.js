// 'use strict';

import story from './util/stories.js'
import categ from './util/cat.js'


const a = axios.create({
	// baseURL: window._burl // set in HTML via wordpress
	// baseURL: 'http://doe.concordia.ca/cslp/wp-json/wp/v2/' // development
	baseURL: 'http://10.106.133.138/~mheming/resources/wp-json/wp/v2/'
})

// app state
const state = {}
state.drillLevel = 0
state.active = 'none'
state.levelstring = ''
state.themeID = null // for further caching. Implement later!
state.backone = function () {
	this.drillLevel -= 1
	console.log('state.drillLevel: ', state.drillLevel)
	if (this.drillLevel <= 0) {
		document.getElementById('drilldown').setAttribute('data-active', 'none')
		document.getElementById('stories__by-cat').className = 'selected'
	}
	if (this.drillLevel == 1) {
		document.getElementById('cat-meta').className = ''
		document.getElementById('story').className = 'hidden'
	}

}
state.hidemeta = function () {
	document.querySelectorAll('.stories-meta')[0].className = 'stories-meta hidden'
}

const categsContainer = document.getElementById('stories__by-cat')
const categItems = categsContainer.querySelectorAll('.category-card')
document.getElementById('cat-meta').className = 'hidden'

const d = document.getElementById('drilldown');

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
			let data = JSON.parse(localStorage.getItem('abra_ac'+ID))
			console.log('retrieved cached data: ID #' + ID)
			state.levelstring = 'By category > ' + data.name
			categ.setDOM(data, state, story, a)
		}
		categsContainer.className = '';
		d.setAttribute('data-active', 'cat')
	})
})

document.getElementById('back-button').addEventListener('click', function () {
	state.backone();
})