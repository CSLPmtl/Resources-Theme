(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":2}],2:[function(require,module,exports){
var core = require('../../modules/_core');
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

},{"../../modules/_core":3}],3:[function(require,module,exports){
var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],4:[function(require,module,exports){
'use strict';

var _theme = require('./util/theme.js');

var _theme2 = _interopRequireDefault(_theme);

var _stories = require('./util/stories.js');

var _stories2 = _interopRequireDefault(_stories);

var _cat = require('./util/cat.js');

var _cat2 = _interopRequireDefault(_cat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = axios.create({
	// baseURL: window._burl // set in HTML via wordpress
	baseURL: 'http://10.106.133.138/~mheming/resources/wp-json/wp/v2/' // development
});

var toggle = document.getElementById('a');
var themesToggled = !toggle.checked;

// app state
var state = {};
state.drillLevel = 0;
state.active = 'none';
state.levelstring = '';
state.themeID = null; // for further caching. Implement later!
state.backone = function () {
	this.drillLevel -= 1;
	console.log('state.drillLevel: ', state.drillLevel);
};
state.hidemeta = function () {
	document.querySelectorAll('.stories-meta')[0].className = 'stories-meta hidden';
};

var themesContainer = document.getElementById('stories__by-theme');
var categsContainer = document.getElementById('stories__by-cat');
var themeItems = themesContainer.querySelectorAll('.theme-card');
var categItems = categsContainer.querySelectorAll('.category-card');
document.getElementById('cat-meta').className = 'hidden';
document.getElementById('theme-meta').className = 'hidden';

var d = document.getElementById('drilldown');

// Add toggle evntlis
toggle.addEventListener('click', function () {
	themesToggled = !toggle.checked;
	if (!themesToggled) {
		themesContainer.className = 'selected';
		categsContainer.className = '';
	} else {
		themesContainer.className = '';
		categsContainer.className = 'selected';
	}

	document.getElementById('cat-meta').className = 'hidden';
	document.getElementById('theme-meta').className = 'hidden';
	document.getElementById('story').className = 'hidden';
});

if (!themesToggled) {
	themesContainer.className = 'selected';
	categsContainer.className = '';
} else {
	themesContainer.className = '';
	categsContainer.className = 'selected';
}

// implement the logic on each Theme item
themeItems.forEach(function (item) {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		var ID = item.getAttribute('data-theme');

		if (!_theme2.default.isCached(ID)) {
			// if not cached, check online
			_theme2.default.get(ID, a, function (data) {
				console.log('retrieved live data: ID #' + ID);
				_theme2.default.setDOM(data, state, _stories2.default, a);
			});
		} else {
			var data = JSON.parse(localStorage.getItem('t' + ID));
			console.log('retrieved cached data: ID #' + ID);
			_theme2.default.setDOM(data, state, _stories2.default, a);
		}

		themesContainer.className = ''; // hide theme list
		d.setAttribute('data-active', 'theme');
	});
});

// implement the logic on each Category Item
categItems.forEach(function (item) {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		var ID = item.getAttribute('data-cat');

		if (!_cat2.default.isCached(ID)) {
			_cat2.default.get(ID, a, function (data) {
				console.log('retrieved live data: ID #' + ID);
				state.levelstring = 'By category > ' + data.name;
				_cat2.default.setDOM(data, state, _stories2.default, a);
			});
		} else {
			var data = JSON.parse(localStorage.getItem('c' + ID));
			console.log('retrieved cached data: ID #' + ID);
			state.levelstring = 'By category > ' + data.name;
			_cat2.default.setDOM(data, state, _stories2.default, a);
		}
		categsContainer.className = '';
		d.setAttribute('data-active', 'cat');
	});
});

},{"./util/cat.js":5,"./util/stories.js":6,"./util/theme.js":7}],5:[function(require,module,exports){
'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	isCached: function isCached(ID) {
		return localStorage.getItem('c' + ID) ? true : false;
	},

	cache: function cache(data) {
		localStorage.setItem('c' + data.id, (0, _stringify2.default)(data));
	},

	get: function get(catID, axios, callback) {
		var _this = this;

		axios.get('categories/' + catID).then(function (response) {
			_this.cache(response.data);
			callback(response.data);
		}).catch('error', function (error) {
			console.warn(error);
			return null;
		});
	},

	setDOM: function setDOM(cat, state, story, axios) {
		// set the element to visible
		//
		var c = document.getElementById('cat-meta');
		state.drillLevel = 1; // not implemented
		document.getElementById('cat-meta').className = '';
		document.getElementById('theme-meta').className = 'hidden';
		document.getElementById('story').className = 'hidden';

		console.log('state: ', state);

		// set meta description
		c.querySelectorAll('#cat-meta__header h2')[0].innerHTML = cat.name;
		c.querySelectorAll('#cat-meta__header span')[0].innerHTML = state.levelstring;
		document.getElementById('cat-meta__content').innerHTML = cat.description;

		// set async
		setTimeout( //  + '&fields=id,title,stories_description' :(
		story.getRelatedStories('story?categories=' + cat.id, function (stories) {
			var list = document.getElementById('cat-meta__list');
			list.className = 'isRefreshing';
			list.innerHTML = '';

			// create story previews

			var _loop = function _loop() {
				var s = stories[i];

				var el = document.createElement('div');
				el.className = 'story';
				el.setAttribute('data-story', s.id);
				el.innerHTML = '<h3>' + s.title.rendered + '</h3>' + '<p>' + s.stories_description + '</p>' + '<p class="meta"><b>Level:</b> ' + story.level(s.story_level) + '</p>';

				document.getElementById('cat-meta__list').appendChild(el);

				el.addEventListener('click', function () {
					story.showStory(s, state);
				});
			};

			for (var i = stories.length - 1; i >= 0; i--) {
				_loop();
			}
			list.className = '';
		}, axios), 0);
	}
};

},{"babel-runtime/core-js/json/stringify":1}],6:[function(require,module,exports){
'use strict';

module.exports = {
	// Story Functions
	getRelatedStories: function getRelatedStories(query, callback, axios) {
		axios.get(query).then(function (res) {
			callback(res.data);
		}).catch('error', function (e) {
			console.warn(e);
		});
	},

	showStory: function showStory(story, state) {
		document.getElementById('cat-meta').className = 'hidden';
		document.getElementById('theme-meta').className = 'hidden';

		var s = document.getElementById('story');
		s.className = '';
		document.getElementById('story-title').innerHTML = story.title.rendered;
		s.querySelectorAll('header span')[0].innerHTML = state.levelstring + ' > ' + story.title.rendered;

		document.getElementById('story__body-desc').innerHTML = story.stories_description;
		document.getElementById('story__body-res').innerHTML = story.stories_resources;

		// let res = []
		// let resHTML = '<ul>'
		// document.getElementById('story__body-links').innerHTML = story.resHTML

		console.log('story: ', story);
	},

	/**
  * Returns the strig associated with each level
  * @param  {int} int [the story's level]
  * @return {string}  [corresponding level]
  */
	level: function level(int) {
		var i = parseInt(int);
		switch (i) {
			case 1:
				return 'Beginner';
			case 2:
				return 'Easy';
			case 3:
				return 'Average';
			case 4:
				return 'Advanced';
			case 5:
				return 'Expert';
		}
	}
};

},{}],7:[function(require,module,exports){
'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// theme functions
module.exports = {

	isCached: function isCached(ID) {
		return localStorage.getItem('t' + ID) ? true : false;
	},

	cache: function cache(data) {
		localStorage.setItem('t' + data.id, (0, _stringify2.default)(data));
	},

	get: function get(themeID, axios, callback) {
		var _this = this;

		axios.get('tags/' + themeID).then(function (response) {
			_this.cache(response.data);
			callback(response.data);
		}).catch('error', function (error) {
			console.warn(error);
			return null;
		});
	},

	setDOM: function setDOM(theme, state, story, axios) {
		// set the element to visible
		var t = document.getElementById('theme-meta');
		state.drillLevel = 1; // not implemented
		document.getElementById('cat-meta').className = 'hidden';
		document.getElementById('theme-meta').className = '';
		document.getElementById('story').className = 'hidden';

		// set meta description
		t.querySelectorAll('#theme-meta__header h2')[0].innerHTML = theme.name;
		t.querySelectorAll('#theme-meta__header span')[0].innerHTML = state.levelstring;
		document.getElementById('theme-meta__content').innerHTML = theme.description;

		// set async
		setTimeout( //  + '&fields=id,title,stories_description' :(
		story.getRelatedStories('story?tags=' + theme.id, function (stories) {
			var list = document.getElementById('theme-meta__list');
			list.className = 'isRefreshing';
			list.innerHTML = '';

			// create story previews

			var _loop = function _loop() {
				var s = stories[i];

				var el = document.createElement('div');
				el.className = 'story';
				el.setAttribute('data-story', s.id);
				el.innerHTML = '<h3>' + s.title.rendered + '</h3>' + '<p>' + s.stories_description + '</p>' + '<p class="meta"><b>Level:</b> ' + story.level(s.story_level) + '</p>';

				document.getElementById('theme-meta__list').appendChild(el);

				el.addEventListener('click', function () {
					story.showStory(s, state);
				});
			};

			for (var i = stories.length - 1; i >= 0; i--) {
				_loop();
			}
			list.className = '';
		}, axios), 0);
	}
};

},{"babel-runtime/core-js/json/stringify":1}]},{},[4])

