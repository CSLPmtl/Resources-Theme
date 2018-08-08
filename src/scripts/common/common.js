(function () {
	'use strict';

	// Via https://stackoverflow.com/questions/4117377/
	// = remove the browser URL bar on mobile devices
	/Mobile/.test(navigator.userAgent) && !location.hash && setTimeout(function () {
			if (!pageYOffset) window.scrollTo(0, 1);
	}, 1000);

	// Smoothscroll plugin
	//const scroll = new SmoothScroll('a[href*="#"]', {header: '.site-header', speed: 1000});

	// fixes 404s with pushstate on some pages. Very hack-y, but technical debt.
  if (window.location.href.indexOf('teacher/abra/activities/') > -1) {
  	// redirect to activities page as appropriate and route from there.
  }
} ());
