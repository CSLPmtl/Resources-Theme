
(function () {
	'use strict';

	function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
	}

	// Update for future CSS / Functionality degredation stuff.
	document.body.className = document.body.className.replace('no-js', 'js');

	// Cool material circular thing I up and lifted from locomotive <3

	var ripple = document.querySelector('.ripple');

	// wait to seconds or show the page anyway
	setTimeout(function () { ripple.style.transform = 'scale(0)' }, 2000)
	window.addEventListener('load', function () {
		var lv = localStorage.getItem('lastvisit')
		if (lv) {
			var now = new Date().getTime()
			// only place the riple if the user has recently browsed the site
			if (now - lv < 10000) {
				ripple.style.top = localStorage.getItem('rippleY')
				ripple.style.left = localStorage.getItem('rippleX')
			} else {
				localStorage.clear()
			}
		}
		ripple.style.transform = 'scale(0)'
	})

	window.addEventListener('beforeunload', function () {
		localStorage.setItem('lastvisit', new Date().getTime())
		ripple.style.transform = 'scale(1.0)'
	});

	document.querySelectorAll('a').forEach(function(link) {
		link.addEventListener('mouseover', function (e) {
			ripple.style.top = e.clientY + 'px'
			ripple.style.left = e.clientX + 'px'

			localStorage.setItem('rippleY', e.clientY + 'px');
			localStorage.setItem('rippleX', e.clientX + 'px');
		})
	})

	document.addEventListener('DOMContentLoaded', function () {
		// Adds Flex Video to YouTube and Vimeo Embeds
		var embeds = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]');

		embeds.forEach( function (el) {
			var w = document.createElement('div')
			w.className = 'video-container'
			wrap(el, w);
		})
	})

	var animateHTML = function () {
	var elems, windowHeight
	var init = function () {
		elems = document.getElementsByClassName('h')
		windowHeight = window.innerHeight
		_addEventHandlers()
	}
	var _addEventHandlers = function () {
		window.addEventListener('scroll', _checkPosition)
		window.addEventListener('resize', init)
	}
	var _checkPosition = function () {
		for (var i = 0; i < elems.length; i++) {
			var posFromTop = elems[i].getBoundingClientRect().top
			if (posFromTop - windowHeight <= 0) {
				elems[i].className = elems[i].className.replace('h', 'animate-up')
			}
		}
	}
	return {
		init: init
	}
}
animateHTML().init()

}());