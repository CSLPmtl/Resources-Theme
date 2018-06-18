(function () {
	'use strict';

	// Via https://stackoverflow.com/questions/4117377/
	// = remove the browser URL bar on mobile devices
	/Mobile/.test(navigator.userAgent) && !location.hash && setTimeout(function () {
	    if (!pageYOffset) window.scrollTo(0, 1);
	}, 1000);

// todo: reenable and integrate with GA

	// Test for DNT
	// var dnt =
	// 	navigator.doNotTrack == "yes" ||
	// 	navigator.doNotTrack == "1"   ||
	// 	navigator.msDoNotTrack == "1";

	// console.log('DNT header was ' + (dnt?'':'not ') + 'detected');
	// if (dnt) {
	// 	console.log('Tracking has been disabled :)')
	// }

	// Smoothscroll plugin
	const scroll = new SmoothScroll('a[href*="#"]', {header: '.site-header', speed: 1000});
} ());
