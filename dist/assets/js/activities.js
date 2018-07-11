(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _stories = require('./util/stories.js');

var _stories2 = _interopRequireDefault(_stories);

var _cat = require('./util/cat.js');

var _cat2 = _interopRequireDefault(_cat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 'use strict';

var a = axios.create({
	// baseURL: window._burl // set in HTML via wordpress
	// baseURL: 'http://doe.concordia.ca/cslp/wp-json/wp/v2/' // development
	baseURL: 'http://10.106.133.138/~mheming/resources/wp-json/wp/v2/'
});

// app state
var state = {};
state.drillLevel = 0;
state.active = 'none';
state.levelstring = '';
state.themeID = null; // for further caching. Implement later!
state.backone = function () {
	this.drillLevel -= 1;
	console.log('state.drillLevel: ', state.drillLevel);
	if (this.drillLevel <= 0) {
		document.getElementById('drilldown').setAttribute('data-active', 'none');
		document.getElementById('stories__by-cat').className = 'selected';
	}
	if (this.drillLevel == 1) {
		document.getElementById('cat-meta').className = '';
		document.getElementById('story').className = 'hidden';
	}
};
state.hidemeta = function () {
	document.querySelectorAll('.stories-meta')[0].className = 'stories-meta hidden';
};

var categsContainer = document.getElementById('stories__by-cat');
var categItems = categsContainer.querySelectorAll('.category-card');
document.getElementById('cat-meta').className = 'hidden';

var d = document.getElementById('drilldown');

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
			var data = JSON.parse(localStorage.getItem('abra_ac' + ID));
			console.log('retrieved cached data: ID #' + ID);
			state.levelstring = 'By category > ' + data.name;
			_cat2.default.setDOM(data, state, _stories2.default, a);
		}
		categsContainer.className = '';
		d.setAttribute('data-active', 'cat');
	});
});

document.getElementById('back-button').addEventListener('click', function () {
	state.backone();
});

},{"./util/cat.js":2,"./util/stories.js":3}],2:[function(require,module,exports){
'use strict';

module.exports = {
	isCached: function isCached(ID) {
		return localStorage.getItem('abra_ac' + ID) ? true : false;
	},

	cache: function cache(data) {
		localStorage.setItem('abra_ac' + data.id, JSON.stringify(data));
	},

	get: function get(catID, axios, callback) {
		var _this = this;

		axios.get('activity_cat/' + catID).then(function (response) {
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
		document.getElementById('story').className = 'hidden';

		console.log('cat: ', cat);

		// set meta description
		c.querySelectorAll('#cat-meta__header h2')[0].innerHTML = cat.name;
		c.querySelectorAll('#cat-meta__header span')[0].innerHTML = state.levelstring;
		document.getElementById('cat-meta__content').innerHTML = cat.description;

		// set async
		setTimeout( //  + '&fields=id,title,stories_description' :(
		story.getRelatedStories('activity?activity_cat=' + cat.id, function (stories) {
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
					state.drillLevel += 1;
					story.showStory(s, state);
					story.getActivityIcon(s.id, axios);
					story.getStoriesInCat('', function (data) {}, axios);
				});
			};

			for (var i = stories.length - 1; i >= 0; i--) {
				_loop();
			}
			list.className = '';
		}, axios), 0);
	}
};

},{}],3:[function(require,module,exports){
'use strict';

// Should technically be 'activity'

module.exports = {
	// Story Functions
	getRelatedStories: function getRelatedStories(query, callback, axios) {
		axios.get(query).then(function (res) {
			callback(res.data);
		}).catch('error', function (e) {
			console.warn(e);
		});
	},

	showStory: function showStory(a, state) {
		document.getElementById('cat-meta').className = 'hidden';

		var s = document.getElementById('story');
		s.className = '';
		document.getElementById('story-title').innerHTML = a.title.rendered;
		s.querySelectorAll('header span')[0].innerHTML = state.levelstring + ' > ' + a.title.rendered;

		document.getElementById('a-overview-c').innerHTML = '<h4>Overview</h4>' + a.activity_description_activity_objective;
		document.getElementById('a-gfa-c').innerHTML = '<h4>Group Facilitation Tips</h4>' + a.activity_description_activity_gfa;
		if (a.activity_description_activity_has_insights) {}

		document.getElementById('a-level-c').innerHTML = '<h4>Levels</h4>' + a.activity_description_activity_level;

		document.getElementById('activity-video-container').innerHTML = this.makeEmbedLink(a.activity_video);

		console.log('activity: ', a);
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
	},
	makeTabContainer: function makeTabContainer(data) {},
	getActivityIcon: function getActivityIcon(query, axios) {
		axios.get('media?parent=' + query).then(function (res) {
			document.getElementById('activity-icon').innerHTML = '<img src="' + res.data[0].media_details.sizes.thumbnail.source_url + '" alt="' + res.data[0].alt_text + '">';
		}).catch('error', function (e) {
			return console.warn(e);
		});
	},
	getStoriesInCat: function getStoriesInCat(query, callback, axios) {
		axios.get(query).then(function (res) {
			callback(res.data);
		}).catch('error', function (e) {
			console.warn(e);
		});
	},
	makeEmbedLink: function makeEmbedLink(link) {
		var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		var match = link.match(regExp);

		if (match && match[2].length != 11) {
			return 'error';
		}

		var embed = '<iframe width="560" height="315" src="//www.youtube.com/embed/';
		return embed + match[2] + '" frameborder="0" allowfullscreen></iframe>';
	}
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hY3Rpdml0aWVzL2FjdGl2aXRpZXMuanMiLCJzcmMvc2NyaXB0cy9hY3Rpdml0aWVzL3V0aWwvY2F0LmpzIiwic3JjL3NjcmlwdHMvYWN0aXZpdGllcy91dGlsL3N0b3JpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBOzs7O0FBQ0E7Ozs7OztBQUhBOztBQU1BLElBQU0sSUFBSSxNQUFNLE1BQU4sQ0FBYTtBQUN0QjtBQUNBO0FBQ0EsVUFBUztBQUhhLENBQWIsQ0FBVjs7QUFNQTtBQUNBLElBQU0sUUFBUSxFQUFkO0FBQ0EsTUFBTSxVQUFOLEdBQW1CLENBQW5CO0FBQ0EsTUFBTSxNQUFOLEdBQWUsTUFBZjtBQUNBLE1BQU0sV0FBTixHQUFvQixFQUFwQjtBQUNBLE1BQU0sT0FBTixHQUFnQixJQUFoQixDLENBQXFCO0FBQ3JCLE1BQU0sT0FBTixHQUFnQixZQUFZO0FBQzNCLE1BQUssVUFBTCxJQUFtQixDQUFuQjtBQUNBLFNBQVEsR0FBUixDQUFZLG9CQUFaLEVBQWtDLE1BQU0sVUFBeEM7QUFDQSxLQUFJLEtBQUssVUFBTCxJQUFtQixDQUF2QixFQUEwQjtBQUN6QixXQUFTLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUMsWUFBckMsQ0FBa0QsYUFBbEQsRUFBaUUsTUFBakU7QUFDQSxXQUFTLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDLFNBQTNDLEdBQXVELFVBQXZEO0FBQ0E7QUFDRCxLQUFJLEtBQUssVUFBTCxJQUFtQixDQUF2QixFQUEwQjtBQUN6QixXQUFTLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0MsU0FBcEMsR0FBZ0QsRUFBaEQ7QUFDQSxXQUFTLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUMsU0FBakMsR0FBNkMsUUFBN0M7QUFDQTtBQUVELENBWkQ7QUFhQSxNQUFNLFFBQU4sR0FBaUIsWUFBWTtBQUM1QixVQUFTLGdCQUFULENB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MEMsVUFEUyxHQUVuRCxTQUZtRCxHQUduRCxJQUFJLElBQUosQ0FBUyxDQUFULEVBQVksUUFIdUMsR0FJbkQsSUFKRjtBQUtBLEdBTkQsRUFNRyxLQU5ILENBTVMsT0FOVCxFQU1rQjtBQUFBLFVBQUssUUFBUSxJQUFSLENBQWEsQ0FBYixDQUFMO0FBQUEsR0FObEI7QUFPQSxFQXhEZTtBQTBEaEIsZ0JBMURnQiwyQkEwREMsS0ExREQsRUEwRFEsUUExRFIsRUEwRGtCLEtBMURsQixFQTBEeUI7QUFDeEMsUUFBTSxHQUFOLENBQVUsS0FBVixFQUFpQixJQUFqQixDQUFzQixVQUFTLEdBQVQsRUFBYztBQUNuQyxZQUFTLElBQUksSUFBYjtBQUNBLEdBRkQsRUFFRyxLQUZILENBRVMsT0FGVCxFQUVrQixVQUFVLENBQVYsRUFBYTtBQUFDLFdBQVEsSUFBUixDQUFhLENBQWI7QUFBZ0IsR0FGaEQ7QUFHQSxFQTlEZTtBQWdFaEIsY0FoRWdCLHlCQWdFRixJQWhFRSxFQWdFSTtBQUNqQixNQUFJLFNBQVMsaUVBQWI7QUFDQSxNQUFJLFFBQVEsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFaOztBQUVBLE1BQUksU0FBUyxNQUFNLENBQU4sRUFBUyxNQUFULElBQW1CLEVBQWhDLEVBQW9DO0FBQ2xDLFVBQU8sT0FBUDtBQUNEOztBQUVILE1BQUksUUFBUSxnRUFBWjtBQUNBLFNBQU8sUUFBUSxNQUFNLENBQU4sQ0FBUixHQUFtQiw2Q0FBMUI7QUFDQTtBQTFFZSxDQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vICd1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHN0b3J5IGZyb20gJy4vdXRpbC9zdG9yaWVzLmpzJ1xuaW1wb3J0IGNhdGVnIGZyb20gJy4vdXRpbC9jYXQuanMnXG5cblxuY29uc3QgYSA9IGF4aW9zLmNyZWF0ZSh7XG5cdC8vIGJhc2VVUkw6IHdpbmRvdy5fYnVybCAvLyBzZXQgaW4gSFRNTCB2aWEgd29yZHByZXNzXG5cdC8vIGJhc2VVUkw6ICdodHRwOi8vZG9lLmNvbmNvcmRpYS5jYS9jc2xwL3dwLWpzb24vd3AvdjIvJyAvLyBkZXZlbG9wbWVudFxuXHRiYXNlVVJMOiAnaHR0cDovLzEwLjEwNi4xMzMuMTM4L35taGVtaW5nL3Jlc291cmNlcy93cC1qc29uL3dwL3YyLydcbn0pXG5cbi8vIGFwcCBzdGF0ZVxuY29uc3Qgc3RhdGUgPSB7fVxuc3RhdGUuZHJpbGxMZXZlbCA9IDBcbnN0YXRlLmFjdGl2ZSA9ICdub25lJ1xuc3RhdGUubGV2ZWxzdHJpbmcgPSAnJ1xuc3RhdGUudGhlbWVJRCA9IG51bGwgLy8gZm9yIGZ1cnRoZXIgY2FjaGluZy4gSW1wbGVtZW50IGxhdGVyIVxuc3RhdGUuYmFja29uZSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5kcmlsbExldmVsIC09IDFcblx0Y29uc29sZS5sb2coJ3N0YXRlLmRyaWxsTGV2ZWw6ICcsIHN0YXRlLmRyaWxsTGV2ZWwpXG5cdGlmICh0aGlzLmRyaWxsTGV2ZWwgPD0gMCkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmlsbGRvd24nKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ25vbmUnKVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9yaWVzX19ieS1jYXQnKS5jbGFzc05hbWUgPSAnc2VsZWN0ZWQnXG5cdH1cblx0aWYgKHRoaXMuZHJpbGxMZXZlbCA9PSAxKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdC1tZXRhJykuY2xhc3NOYW1lID0gJydcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcnknKS5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuXHR9XG5cbn1cbnN0YXRlLmhpZGVtZXRhID0gZnVuY3Rpb24gKCkge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3Rvcmllcy1tZXRhJylbMF0uY2xhc3NOYW1lID0gJ3N0b3JpZXMtbWV0YSBoaWRkZW4nXG59XG5cbmNvbnN0IGNhdGVnc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9yaWVzX19ieS1jYXQnKVxuY29uc3QgY2F0ZWdJdGVtcyA9IGNhdGVnc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktY2FyZCcpXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0LW1ldGEnKS5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuXG5jb25zdCBkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyaWxsZG93bicpO1xuXG4vLyBpbXBsZW1lbnQgdGhlIGxvZ2ljIG9uIGVhY2ggQ2F0ZWdvcnkgSXRlbVxuY2F0ZWdJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG5cdGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0bGV0IElEID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0JylcblxuXG5cdFx0aWYgKCFjYXRlZy5pc0NhY2hlZChJRCkpIHtcblx0XHRcdGNhdGVnLmdldChJRCwgYSwgZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3JldHJpZXZlZCBsaXZlIGRhdGE6IElEICMnICsgSUQpXG5cdFx0XHRcdHN0YXRlLmxldmVsc3RyaW5nID0gJ0J5IGNhdGVnb3J5ID4gJyArIGRhdGEubmFtZVxuXHRcdFx0XHRjYXRlZy5zZXRET00oZGF0YSwgc3RhdGUsIHN0b3J5LCBhKVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhYnJhX2FjJytJRCkpXG5cdFx0XHRjb25zb2xlLmxvZygncmV0cmlldmVkIGNhY2hlZCBkYXRhOiBJRCAjJyArIElEKVxuXHRcdFx0c3RhdGUubGV2ZWxzdHJpbmcgPSAnQnkgY2F0ZWdvcnkgPiAnICsgZGF0YS5uYW1lXG5cdFx0XHRjYXRlZy5zZXRET00oZGF0YSwgc3RhdGUsIHN0b3J5LCBhKVxuXHRcdH1cblx0XHRjYXRlZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJyc7XG5cdFx0ZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ2NhdCcpXG5cdH0pXG59KVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFjay1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0c3RhdGUuYmFja29uZSgpO1xufSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0aXNDYWNoZWQ6IGZ1bmN0aW9uIChJRCkge1xuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWJyYV9hYycgKyBJRCkgPyB0cnVlIDogZmFsc2Vcblx0fSxcblxuXHRjYWNoZTogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWJyYV9hYycgKyBkYXRhLmlkLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcblx0fSxcblxuXHRnZXQ6IGZ1bmN0aW9uIChjYXRJRCwgYXhpb3MsIGNhbGxiYWNrKSB7XG5cdFx0YXhpb3MuZ2V0KCdhY3Rpdml0eV9jYXQvJyArIGNhdElEKS50aGVuKCByZXNwb25zZSA9PiB7XG5cdFx0XHR0aGlzLmNhY2hlKHJlc3BvbnNlLmRhdGEpXG5cdFx0XHRjYWxsYmFjayhyZXNwb25zZS5kYXRhKVxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS53YXJuKGVycm9yKVxuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9KVxuXHR9LFxuXG5cdHNldERPTTogZnVuY3Rpb24gKGNhdCwgc3RhdGUsIHN0b3J5LCBheGlvcykge1xuXHRcdC8vIHNldCB0aGUgZWxlbWVudCB0byB2aXNpYmxlXG5cdFx0Ly9cblx0XHRjb25zdCBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdC1tZXRhJylcblx0XHRzdGF0ZS5kcmlsbExldmVsID0gMSAvLyBub3QgaW1wbGVtZW50ZWRcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0LW1ldGEnKS5jbGFzc05hbWUgPSAnJ1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9yeScpLmNsYXNzTmFtZSA9ICdoaWRkZW4nXG5cblx0XHRjb25zb2xlLmxvZygnY2F0OiAnLCBjYXQpO1xuXG5cdFx0Ly8gc2V0IG1ldGEgZGVzY3JpcHRpb25cblx0XHRjLnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXQtbWV0YV9faGVhZGVyIGgyJylbMF0uaW5uZXJIVE1MID0gY2F0Lm5hbWVcblx0XHRjLnF1ZXJ5U2VsZWN0b3JBbGwoJyNjYXQtbWV0YV9faGVhZGVyIHNwYW4nKVswXS5pbm5lckhUTUwgPSBzdGF0ZS5sZXZlbHN0cmluZ1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXQtbWV0YV9fY29udGVudCcpLmlubmVySFRNTCA9IGNhdC5kZXNjcmlwdGlvblxuXG5cdFx0Ly8gc2V0IGFzeW5jXG5cdFx0c2V0VGltZW91dCggLy8gICsgJyZmaWVsZHM9aWQsdGl0bGUsc3Rvcmllc19kZXNjcmlwdGlvbicgOihcblx0XHRcdHN0b3J5LmdldFJlbGF0ZWRTdG9yaWVzKCdhY3Rpdml0eT9hY3Rpdml0eV9jYXQ9JyArIGNhdC5pZCwgZnVuY3Rpb24gKHN0b3JpZXMpIHtcblx0XHRcdFx0dmFyIGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0LW1ldGFfX2xpc3QnKVxuXHRcdFx0XHRsaXN0LmNsYXNzTmFtZSA9ICdpc1JlZnJlc2hpbmcnXG5cdFx0XHRcdGxpc3QuaW5uZXJIVE1MID0gJydcblxuXHRcdFx0XHQvLyBjcmVhdGUgc3RvcnkgcHJldmlld3Ncblx0XHRcdFx0Zm9yICh2YXIgaSA9IHN0b3JpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRsZXQgcyA9IHN0b3JpZXNbaV1cblxuXHRcdFx0XHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRcdFx0ZWwuY2xhc3NOYW1lID0gJ3N0b3J5J1xuXHRcdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zdG9yeScsIHMuaWQpXG5cdFx0XHRcdFx0ZWwuaW5uZXJIVE1MID0gJzxoMz4nICsgcy50aXRsZS5yZW5kZXJlZCArICc8L2gzPidcblx0XHRcdFx0XHQrICc8cD4nICsgcy5zdG9yaWVzX2Rlc2NyaXB0aW9uICsgJzwvcD4nXG5cdFx0XHRcdFx0KyAnPHAgY2xhc3M9XCJtZXRhXCI+PGI+TGV2ZWw6PC9iPiAnICsgc3RvcnkubGV2ZWwocy5zdG9yeV9sZXZlbCkgKyAnPC9wPic7XG5cblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0LW1ldGFfX2xpc3QnKS5hcHBlbmRDaGlsZChlbClcblxuXHRcdFx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c3RhdGUuZHJpbGxMZXZlbCArPSAxXG5cdFx0XHRcdFx0XHRzdG9yeS5zaG93U3Rvcnkocywgc3RhdGUpXG5cdFx0XHRcdFx0XHRzdG9yeS5nZXRBY3Rpdml0eUljb24ocy5pZCwgYXhpb3MpXG5cdFx0XHRcdFx0XHRzdG9yeS5nZXRTdG9yaWVzSW5DYXQoJycsIChkYXRhKSA9PiB7XG5cblx0XHRcdFx0XHRcdH0sIGF4aW9zKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5jbGFzc05hbWUgPSAnJ1xuXHRcdFx0fSwgYXhpb3Ncblx0XHQpLCAwKVxuXG5cdH1cbn0iLCIvLyBTaG91bGQgdGVjaG5pY2FsbHkgYmUgJ2FjdGl2aXR5J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Ly8gU3RvcnkgRnVuY3Rpb25zXG5cdGdldFJlbGF0ZWRTdG9yaWVzOiBmdW5jdGlvbiAocXVlcnksIGNhbGxiYWNrLCBheGlvcykge1xuXHRcdGF4aW9zLmdldChxdWVyeSkudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdGNhbGxiYWNrKHJlcy5kYXRhKVxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7Y29uc29sZS53YXJuKGUpfSlcblx0fSxcblxuXHRzaG93U3Rvcnk6IGZ1bmN0aW9uIChhLCBzdGF0ZSkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXQtbWV0YScpLmNsYXNzTmFtZSA9ICdoaWRkZW4nXG5cblx0XHRjb25zdCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3J5Jylcblx0XHRzLmNsYXNzTmFtZSA9ICcnXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3J5LXRpdGxlJykuaW5uZXJIVE1MID0gYS50aXRsZS5yZW5kZXJlZFxuXHRcdHMucXVlcnlTZWxlY3RvckFsbCgnaGVhZGVyIHNwYW4nKVswXS5pbm5lckhUTUwgPSBzdGF0ZS5sZXZlbHN0cmluZyArICcgPiAnICsgYS50aXRsZS5yZW5kZXJlZFxuXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Etb3ZlcnZpZXctYycpLmlubmVySFRNTCA9ICc8aDQ+T3ZlcnZpZXc8L2g0PicgKyBhLmFjdGl2aXR5X2Rlc2NyaXB0aW9uX2FjdGl2aXR5X29iamVjdGl2ZVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhLWdmYS1jJykuaW5uZXJIVE1MID0gJzxoND5Hcm91cCBGYWNpbGl0YXRpb24gVGlwczwvaDQ+JyArIGEuYWN0aXZpdHlfZGVzY3JpcHRpb25fYWN0aXZpdHlfZ2ZhXG5cdFx0aWYgKGEuYWN0aXZpdHlfZGVzY3JpcHRpb25fYWN0aXZpdHlfaGFzX2luc2lnaHRzKSB7XG5cblx0XHR9XG5cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYS1sZXZlbC1jJykuaW5uZXJIVE1MID0gJzxoND5MZXZlbHM8L2g0PicgKyBhLmFjdGl2aXR5X2Rlc2NyaXB0aW9uX2FjdGl2aXR5X2xldmVsXG5cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZpdHktdmlkZW8tY29udGFpbmVyJykuaW5uZXJIVE1MID0gdGhpcy5tYWtlRW1iZWRMaW5rKGEuYWN0aXZpdHlfdmlkZW8pXG5cblx0XHRjb25zb2xlLmxvZygnYWN0aXZpdHk6ICcsIGEpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBzdHJpZyBhc3NvY2lhdGVkIHdpdGggZWFjaCBsZXZlbFxuXHQgKiBAcGFyYW0gIHtpbnR9IGludCBbdGhlIHN0b3J5J3MgbGV2ZWxdXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gIFtjb3JyZXNwb25kaW5nIGxldmVsXVxuXHQgKi9cblx0bGV2ZWwoaW50KSB7XG5cdFx0bGV0IGkgPSBwYXJzZUludChpbnQpXG5cdFx0c3dpdGNoKGkpIHtcblx0XHRcdGNhc2UgMTogcmV0dXJuICdCZWdpbm5lcidcblx0XHRcdGNhc2UgMjogcmV0dXJuICdFYXN5J1xuXHRcdFx0Y2FzZSAzOiByZXR1cm4gJ0F2ZXJhZ2UnXG5cdFx0XHRjYXNlIDQ6IHJldHVybiAnQWR2YW5jZWQnXG5cdFx0XHRjYXNlIDU6IHJldHVybiAnRXhwZXJ0J1xuXHRcdH1cblx0fSxcblxuXHRtYWtlVGFiQ29udGFpbmVyKGRhdGEpIHtcblx0fSxcblxuXHRnZXRBY3Rpdml0eUljb24gKHF1ZXJ5LCBheGlvcykge1xuXHRcdGF4aW9zLmdldCgnbWVkaWE/cGFyZW50PScgKyBxdWVyeSkudGhlbigocmVzKSA9PiB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZpdHktaWNvbicpLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIidcblx0XHRcdCsgcmVzLmRhdGFbMF0ubWVkaWFfZGV0YWlscy5zaXplcy50aHVtYm5haWwuc291cmNlX3VybFxuXHRcdFx0KyAnXCIgYWx0PVwiJ1xuXHRcdFx0KyByZXMuZGF0YVswXS5hbHRfdGV4dFxuXHRcdFx0KyAnXCI+J1xuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGUgPT4gY29uc29sZS53YXJuKGUpKVxuXHR9LFxuXG5cdGdldFN0b3JpZXNJbkNhdCAocXVlcnksIGNhbGxiYWNrLCBheGlvcykge1xuXHRcdGF4aW9zLmdldChxdWVyeSkudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdGNhbGxiYWNrKHJlcy5kYXRhKVxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7Y29uc29sZS53YXJuKGUpfSlcblx0fSxcblxuXHRtYWtlRW1iZWRMaW5rKGxpbmspIHtcbiAgICBsZXQgcmVnRXhwID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovO1xuICAgIGxldCBtYXRjaCA9IGxpbmsubWF0Y2gocmVnRXhwKTtcblxuICAgIGlmIChtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggIT0gMTEpIHtcbiAgICAgIHJldHVybiAnZXJyb3InO1xuICAgIH1cblxuXHRcdGxldCBlbWJlZCA9ICc8aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiLy93d3cueW91dHViZS5jb20vZW1iZWQvJ1xuXHRcdHJldHVybiBlbWJlZCArIG1hdGNoWzJdICsgJ1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXG5cdH1cbn0iXX0=