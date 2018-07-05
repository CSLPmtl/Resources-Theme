'use strict';

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
	setTimeout(function () {
		ripple.style.transform = 'scale(0)';
	}, 2000);
	window.addEventListener('load', function () {
		var lv = localStorage.getItem('lastvisit');
		if (lv) {
			var now = new Date().getTime();
			// only place the riple if the user has recently browsed the site
			if (now - lv < 10000) {
				ripple.style.top = localStorage.getItem('rippleY');
				ripple.style.left = localStorage.getItem('rippleX');
			} else {
				localStorage.clear();
			}
		}
		ripple.style.transform = 'scale(0)';
	});

	window.addEventListener('beforeunload', function () {
		localStorage.setItem('lastvisit', new Date().getTime());
		ripple.style.transform = 'scale(1.0)';
	});

	document.querySelectorAll('a').forEach(function (link) {
		link.addEventListener('mouseover', function (e) {
			ripple.style.top = e.clientY + 'px';
			ripple.style.left = e.clientX + 'px';

			localStorage.setItem('rippleY', e.clientY + 'px');
			localStorage.setItem('rippleX', e.clientX + 'px');
		});
	});

	document.addEventListener('DOMContentLoaded', function () {
		// Adds Flex Video to YouTube and Vimeo Embeds
		var embeds = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="vimeo.com"]');

		embeds.forEach(function (el) {
			var w = document.createElement('div');
			w.className = 'video-container';
			wrap(el, w);
		});
	});

	var animateHTML = function animateHTML() {
		var elems, windowHeight;
		var init = function init() {
			elems = document.getElementsByClassName('h');
			windowHeight = window.innerHeight;
			_addEventHandlers();
		};
		var _addEventHandlers = function _addEventHandlers() {
			window.addEventListener('scroll', _checkPosition);
			window.addEventListener('resize', init);
		};
		var _checkPosition = function _checkPosition() {
			for (var i = 0; i < elems.length; i++) {
				var posFromTop = elems[i].getBoundingClientRect().top;
				if (posFromTop - windowHeight <= 0) {
					elems[i].className = elems[i].className.replace('h', 'animate-up');
				}
			}
		};
		return {
			init: init
		};
	};
	animateHTML().init();
})();
(function () {
	'use strict';

	// Via https://stackoverflow.com/questions/4117377/
	// = remove the browser URL bar on mobile devices

	/Mobile/.test(navigator.userAgent) && !location.hash && setTimeout(function () {
		if (!pageYOffset) window.scrollTo(0, 1);
	}, 1000);

	// Smoothscroll plugin
	var scroll = new SmoothScroll('a[href*="#"]', { header: '.site-header', speed: 1000 });
})();

(function () {
	'use strict';

	var containers = document.querySelectorAll('.homepage__block-inner');

	if (typeof containers === 'undefined') {
		return;
	}

	// console.log(Array.from(containers, container => container)) // babel transpilation needs rollup: fix later

	_.each(containers, function (container, index) {
		var btn = container.getElementsByTagName('button')[0];
		btn.addEventListener('click', function () {
			if (containers[index].classList.contains('open')) {
				containers[index].classList.remove('open');
			} else {
				if (index === 0) {
					containers[1].classList.remove('open');
					containers[1].classList.toggle('other-open');
				} else {
					containers[0].classList.remove('open');
					containers[0].classList.toggle('other-open');
				}
				containers[index].classList.add('open');
			}
		});
	});
})();
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

/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
	var isIe = /(trident|msie)/i.test(navigator.userAgent);

	if (isIe && document.getElementById && window.addEventListener) {
		window.addEventListener('hashchange', function () {
			var id = location.hash.substring(1),
			    element;

			if (!/^[A-z0-9_-]+$/.test(id)) {
				return;
			}

			element = document.getElementById(id);

			if (element) {
				if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false);
	}
})();

/*! outline.js v1.2.0 - https://github.com/lindsayevans/outline.js/ */
(function (d) {

	var style_element = d.createElement('STYLE'),
	    dom_events = 'addEventListener' in d,
	    add_event_listener = function add_event_listener(type, callback) {
		// Basic cross-browser event handling
		if (dom_events) {
			d.addEventListener(type, callback);
		} else {
			d.attachEvent('on' + type, callback);
		}
	},
	    set_css = function set_css(css_text) {
		// Handle setting of <style> element contents in IE8
		!!style_element.styleSheet ? style_element.styleSheet.cssText = css_text : style_element.innerHTML = css_text;
	};

	d.getElementsByTagName('HEAD')[0].appendChild(style_element);

	// Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
	add_event_listener('mousedown', function () {
		set_css(':focus{outline:0}::-moz-focus-inner{border:0;}');
	});

	add_event_listener('keydown', function () {
		set_css('');
	});
})(document);

(function () {
	'use strict';

	if ('querySelector' in document && 'addEventListener' in window && document.body.classList.contains('dropdown-hover')) {
		var navLinks = document.querySelectorAll('nav ul a'),
		    parentElements = document.querySelectorAll('.sf-menu .menu-item-has-children');

		/**
   * Make menu items tab accessible when using the hover dropdown type
   */
		var toggleFocus = function toggleFocus() {
			if (this.closest('nav').classList.contains('toggled') || this.closest('nav').classList.contains('slideout-navigation')) {
				return;
			}

			var self = this;

			while (-1 === self.className.indexOf('main-nav')) {

				if ('li' === self.tagName.toLowerCase()) {
					if (-1 !== self.className.indexOf('sfHover')) {
						self.className = self.className.replace(' sfHover', '');
					} else {
						self.className += ' sfHover';
					}
				}

				self = self.parentElement;
			}
		};

		for (var i = 0; i < navLinks.length; i++) {
			navLinks[i].addEventListener('focus', toggleFocus);
			navLinks[i].addEventListener('blur', toggleFocus);
		}
	}

	/**
  * Make hover dropdown touch-friendly.
  */
	if ('touchend' in document.documentElement) {
		for (var i = 0; i < parentElements.length; i++) {
			parentElements[i].addEventListener('touchend', function (e) {
				// Bail on mobile
				if (parentElements[i].closest('nav').classList.contains('toggled')) {
					return;
				}

				if (e.touches.length === 1) {
					// Prevent touch events within dropdown bubbling down to document
					e.stopPropagation();

					// Toggle hover
					if (!this.classList.contains('sfHover')) {
						// Prevent link on first touch
						if (e.target === this || e.target.parentNode === this) {
							e.preventDefault();
						}

						// Close other sub-menus
						var openedSubMenus = parentElements[i].closest('nav').querySelectorAll('ul.toggled-on');
						if (openedSubMenus && !this.closest('ul').classList.contains('toggled-on') && !this.closest('li').classList.contains('sfHover')) {
							for (var o = 0; o < openedSubMenus.length; o++) {
								openedSubMenus[o].classList.remove('toggled-on');
								openedSubMenus[o].closest('li').classList.remove('sfHover');
							}
						}

						this.classList.add('sfHover');

						// Hide dropdown on touch outside
						document.addEventListener('touchend', closeDropdown = function (_closeDropdown) {
							function closeDropdown(_x) {
								return _closeDropdown.apply(this, arguments);
							}

							closeDropdown.toString = function () {
								return _closeDropdown.toString();
							};

							return closeDropdown;
						}(function (e) {
							e.stopPropagation();

							this.classList.remove('sfHover');
							document.removeEventListener('touchend', closeDropdown);
						}));
					}
				}
			}, true);
		}
	}
})();

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in self) {

	// Full polyfill for browsers with no classList support
	// Including IE < Edge missing SVGElement.classList
	if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {

		(function (view) {

			"use strict";

			if (!('Element' in view)) return;

			var classListProp = "classList",
			    protoProp = "prototype",
			    elemCtrProto = view.Element[protoProp],
			    objCtr = Object,
			    strTrim = String[protoProp].trim || function () {
				return this.replace(/^\s+|\s+$/g, "");
			},
			    arrIndexOf = Array[protoProp].indexOf || function (item) {
				var i = 0,
				    len = this.length;
				for (; i < len; i++) {
					if (i in this && this[i] === item) {
						return i;
					}
				}
				return -1;
			}
			// Vendors: please allow content code to instantiate DOMExceptions
			,
			    DOMEx = function DOMEx(type, message) {
				this.name = type;
				this.code = DOMException[type];
				this.message = message;
			},
			    checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
				if (token === "") {
					throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
				}
				if (/\s/.test(token)) {
					throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
				}
				return arrIndexOf.call(classList, token);
			},
			    ClassList = function ClassList(elem) {
				var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
				    classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
				    i = 0,
				    len = classes.length;
				for (; i < len; i++) {
					this.push(classes[i]);
				}
				this._updateClassName = function () {
					elem.setAttribute("class", this.toString());
				};
			},
			    classListProto = ClassList[protoProp] = [],
			    classListGetter = function classListGetter() {
				return new ClassList(this);
			};
			// Most DOMException implementations don't allow calling DOMException's toString()
			// on non-DOMExceptions. Error's toString() is sufficient here.
			DOMEx[protoProp] = Error[protoProp];
			classListProto.item = function (i) {
				return this[i] || null;
			};
			classListProto.contains = function (token) {
				token += "";
				return checkTokenAndGetIndex(this, token) !== -1;
			};
			classListProto.add = function () {
				var tokens = arguments,
				    i = 0,
				    l = tokens.length,
				    token,
				    updated = false;
				do {
					token = tokens[i] + "";
					if (checkTokenAndGetIndex(this, token) === -1) {
						this.push(token);
						updated = true;
					}
				} while (++i < l);

				if (updated) {
					this._updateClassName();
				}
			};
			classListProto.remove = function () {
				var tokens = arguments,
				    i = 0,
				    l = tokens.length,
				    token,
				    updated = false,
				    index;
				do {
					token = tokens[i] + "";
					index = checkTokenAndGetIndex(this, token);
					while (index !== -1) {
						this.splice(index, 1);
						updated = true;
						index = checkTokenAndGetIndex(this, token);
					}
				} while (++i < l);

				if (updated) {
					this._updateClassName();
				}
			};
			classListProto.toggle = function (token, force) {
				token += "";

				var result = this.contains(token),
				    method = result ? force !== true && "remove" : force !== false && "add";

				if (method) {
					this[method](token);
				}

				if (force === true || force === false) {
					return force;
				} else {
					return !result;
				}
			};
			classListProto.toString = function () {
				return this.join(" ");
			};

			if (objCtr.defineProperty) {
				var classListPropDesc = {
					get: classListGetter,
					enumerable: true,
					configurable: true
				};
				try {
					objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
				} catch (ex) {
					// IE 8 doesn't support enumerable:true
					// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
					// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
					if (ex.number === undefined || ex.number === -0x7FF5EC54) {
						classListPropDesc.enumerable = false;
						objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
					}
				}
			} else if (objCtr[protoProp].__defineGetter__) {
				elemCtrProto.__defineGetter__(classListProp, classListGetter);
			}
		})(self);
	}

	// There is full or partial native classList support, so just check if we need
	// to normalize the add/remove and toggle APIs.

	(function () {
		"use strict";

		var testElement = document.createElement("_");

		testElement.classList.add("c1", "c2");

		// Polyfill for IE 10/11 and Firefox <26, where classList.add and
		// classList.remove exist but support only one argument at a time.
		if (!testElement.classList.contains("c2")) {
			var createMethod = function createMethod(method) {
				var original = DOMTokenList.prototype[method];

				DOMTokenList.prototype[method] = function (token) {
					var i,
					    len = arguments.length;

					for (i = 0; i < len; i++) {
						token = arguments[i];
						original.call(this, token);
					}
				};
			};
			createMethod('add');
			createMethod('remove');
		}

		testElement.classList.toggle("c3", false);

		// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
		// support the second argument.
		if (testElement.classList.contains("c3")) {
			var _toggle = DOMTokenList.prototype.toggle;

			DOMTokenList.prototype.toggle = function (token, force) {
				if (1 in arguments && !this.contains(token) === !force) {
					return force;
				} else {
					return _toggle.call(this, token);
				}
			};
		}

		testElement = null;
	})();
}

(function () {
	'use strict';

	if ('querySelector' in document && 'addEventListener' in window) {
		var body = document.body;
		/**
   * Dropdown click
   *
   * @param e The event.
   * @param _this The clicked item.
   */
		var dropdownClick = function dropdownClick(e, _this) {
			e.preventDefault();
			e.stopPropagation();

			if (!_this) {
				var _this = this;
			}

			var closestLi = _this.closest('li');

			// Close other sub-menus
			var openedSubMenus = _this.closest('nav').querySelectorAll('ul.toggled-on');
			if (openedSubMenus && !_this.closest('ul').classList.contains('toggled-on') && !_this.closest('li').classList.contains('sfHover')) {
				for (var o = 0; o < openedSubMenus.length; o++) {
					openedSubMenus[o].classList.remove('toggled-on');
					openedSubMenus[o].closest('li').classList.remove('sfHover');
				}
			}

			// Add sfHover class to parent li
			closestLi.classList.toggle('sfHover');

			// Set aria-expanded on arrow
			var dropdownToggle = closestLi.querySelector('.dropdown-menu-toggle');
			if ('false' == dropdownToggle.getAttribute('aria-expanded')) {
				dropdownToggle.setAttribute('aria-expanded', 'true');
			} else {
				dropdownToggle.setAttribute('aria-expanded', 'false');
			}

			// Open the sub-menu
			if (body.classList.contains('dropdown-click-menu-item')) {
				_this.parentNode.querySelector('.sub-menu').classList.toggle('toggled-on');
			} else if (body.classList.contains('dropdown-click-arrow')) {
				closestLi.querySelector('.sub-menu').classList.toggle('toggled-on');
			}
		};

		// Do stuff if click dropdown if enabled
		var parentElementLinks = document.querySelectorAll('.main-nav .menu-item-has-children > a');

		// Open the sub-menu by clicking on the entire link element
		if (body.classList.contains('dropdown-click-menu-item')) {
			for (var i = 0; i < parentElementLinks.length; i++) {
				parentElementLinks[i].addEventListener('click', dropdownClick, true);
			}
		}

		// Open the sub-menu by clicking on a dropdown arrow
		if (body.classList.contains('dropdown-click-arrow')) {
			// Add a class to sub-menu items that are set to #
			for (var i = 0; i < document.querySelectorAll('.main-nav .menu-item-has-children > a').length; i++) {
				if ('#' == document.querySelectorAll('.main-nav .menu-item-has-children > a')[i].getAttribute('href')) {
					document.querySelectorAll('.main-nav .menu-item-has-children > a')[i].classList.add('menu-item-dropdown-click');
				}
			}

			var dropdownToggleLinks = document.querySelectorAll('.main-nav .menu-item-has-children > a .dropdown-menu-toggle');
			for (var i = 0; i < dropdownToggleLinks.length; i++) {
				dropdownToggleLinks[i].addEventListener('click', dropdownClick, false);

				dropdownToggleLinks[i].addEventListener('keydown', function (e) {
					var _this = this;
					var key = e.which || e.keyCode;
					if (key === 13) {
						// 13 is enter
						dropdownClick(e, _this);
					}
				}, false);
			}

			for (var i = 0; i < document.querySelectorAll('.main-nav .menu-item-has-children > a.menu-item-dropdown-click').length; i++) {
				document.querySelectorAll('.main-nav .menu-item-has-children > a.menu-item-dropdown-click')[i].addEventListener('click', dropdownClick, false);
			}
		}

		var closeSubMenus = function closeSubMenus() {
			if (document.querySelector('nav ul .toggled-on')) {
				var activeSubMenus = document.querySelectorAll('nav ul .toggled-on');
				for (var i = 0; i < activeSubMenus.length; i++) {
					activeSubMenus[i].classList.remove('toggled-on');
					activeSubMenus[i].closest('.sfHover').classList.remove('sfHover');
				}
			}
		};

		// Close sub-menus when clicking elsewhere
		document.addEventListener('click', function (event) {
			if (!event.target.closest('.sfHover')) {
				closeSubMenus();
			}
		}, false);

		// Close sub-menus on escape key
		document.addEventListener('keydown', function (e) {
			var key = e.which || e.keyCode;
			if (key === 27) {
				// 27 is esc
				closeSubMenus();
			}
		}, false);
	}
})();
/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
	var isIe = /(trident|msie)/i.test(navigator.userAgent);

	if (isIe && document.getElementById && window.addEventListener) {
		window.addEventListener('hashchange', function () {
			var id = location.hash.substring(1),
			    element;

			if (!/^[A-z0-9_-]+$/.test(id)) {
				return;
			}

			element = document.getElementById(id);

			if (element) {
				if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false);
	}
})();