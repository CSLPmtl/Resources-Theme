(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
	var container, button, menu, links, i, len;

	container = document.getElementById('masthead');
	if (!container) {
		return;
	}

	button = document.querySelectorAll('.menu-toggle')[0];
	if ('undefined' === typeof button) {
		return;
	}

	menu = container.getElementsByTagName('ul')[0];

	// Hide menu toggle button if menu is empty and return early.
	if ('undefined' === typeof menu) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute('aria-expanded', 'false');
	if (-1 === menu.className.indexOf('nav-menu')) {
		menu.className += ' nav-menu';
	}

	button.onclick = function () {
		if (-1 !== container.className.indexOf('toggled')) {
			container.className = container.className.replace(' toggled', '');
			button.setAttribute('aria-expanded', 'false');
			menu.setAttribute('aria-expanded', 'false');
		} else {
			container.className += ' toggled';
			button.setAttribute('aria-expanded', 'true');
			menu.setAttribute('aria-expanded', 'true');
		}
	};

	// Get all the link elements within the menu.
	links = menu.getElementsByTagName('a');

	// Each time a menu link is focused or blurred, toggle focus.
	for (i = 0, len = links.length; i < len; i++) {
		links[i].addEventListener('focus', toggleFocus, true);
		links[i].addEventListener('blur', toggleFocus, true);
	}

	/**
  * Sets or removes .focus class on an element.
  */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while (-1 === self.className.indexOf('nav-menu')) {

			// On li elements toggle the class .focus.
			if ('li' === self.tagName.toLowerCase()) {
				if (-1 !== self.className.indexOf('focus')) {
					self.className = self.className.replace(' focus', '');
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	// @ http://jsfiddle.net/mariusc23/s6mLJ/31/

	// hides the nav on scroll
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = container.getBoundingClientRect().height;
	window.addEventListener('scroll', function () {
		didScroll = true;
	});

	//  exec on an interval to keep logic perfomant
	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = window.pageYOffset;

		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta) return;

		if (st > lastScrollTop && st > navbarHeight) {
			// Scroll Down
			container.classList.remove('nav-down');
			container.classList.add('nav-up');
		} else {
			// Scroll Up
			if (st + window.innerHeight < document.documentElement.offsetHeight) {
				container.classList.add('nav-down');
				container.classList.remove('nav-up');
			}
		}
		lastScrollTop = st;
	}

	/**
  * Toggles `focus` class to allow submenu access on tablets.
  */
	(function (container) {
		var touchStartFn,
		    i,
		    parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

		if ('ontouchstart' in window) {
			touchStartFn = function touchStartFn(e) {
				var menuItem = this.parentNode,
				    i;

				if (!menuItem.classList.contains('focus')) {
					e.preventDefault();
					for (i = 0; i < menuItem.parentNode.children.length; ++i) {
						if (menuItem === menuItem.parentNode.children[i]) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove('focus');
					}
					menuItem.classList.add('focus');
				} else {
					menuItem.classList.remove('focus');
				}
			};

			for (i = 0; i < parentLink.length; ++i) {
				parentLink[i].addEventListener('touchstart', touchStartFn, false);
			}
		}
	})(container);

	// toggle between nav states
	var navswitcher = container.querySelectorAll('.site-navigation__m-switcher')[0];
	if ('undefined' === typeof navswitcher) {
		return;
	} else {
		var d = navswitcher.getElementsByTagName('div');
		for (i = 0, len = d.length; i < len; i++) {
			d[i].addEventListener('click', function () {
				var a = this.attributes['data-nav'].nodeValue;
				container.querySelectorAll('.selected')[0].classList.remove('selected');
				var c = container.querySelectorAll('.site-navigation__inner[data-nav="' + a + '"]')[0];
				c.classList.add('selected');
			});
		}
	}
})();

},{}]},{},[1])

