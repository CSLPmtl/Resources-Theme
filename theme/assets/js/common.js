(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

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
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jb21tb24vY29tbW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQyxhQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFDQSxXQUFTLElBQVQsQ0FBYyxVQUFVLFNBQXhCLEtBQXNDLENBQUMsU0FBUyxJQUFoRCxJQUF3RCxXQUFXLFlBQVk7QUFDN0UsUUFBSSxDQUFDLFdBQUwsRUFBa0IsT0FBTyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ25CLEdBRnVELEVBRXJELElBRnFELENBQXhEOztBQUlBO0FBQ0E7O0FBRUE7QUFDQyxNQUFJLE9BQU8sUUFBUCxDQUFnQixJQUFoQixDQUFxQixPQUFyQixDQUE2QiwwQkFBN0IsSUFBMkQsQ0FBQyxDQUFoRSxFQUFtRTtBQUNsRTtBQUNBO0FBQ0YsQ0FoQkEsR0FBRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvLyBWaWEgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDExNzM3Ny9cblx0Ly8gPSByZW1vdmUgdGhlIGJyb3dzZXIgVVJMIGJhciBvbiBtb2JpbGUgZGV2aWNlc1xuXHQvTW9iaWxlLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICFsb2NhdGlvbi5oYXNoICYmIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCFwYWdlWU9mZnNldCkgd2luZG93LnNjcm9sbFRvKDAsIDEpO1xuXHR9LCAxMDAwKTtcblxuXHQvLyBTbW9vdGhzY3JvbGwgcGx1Z2luXG5cdC8vY29uc3Qgc2Nyb2xsID0gbmV3IFNtb290aFNjcm9sbCgnYVtocmVmKj1cIiNcIl0nLCB7aGVhZGVyOiAnLnNpdGUtaGVhZGVyJywgc3BlZWQ6IDEwMDB9KTtcblxuXHQvLyBmaXhlcyA0MDRzIHdpdGggcHVzaHN0YXRlIG9uIHNvbWUgcGFnZXMuIFZlcnkgaGFjay15LCBidXQgdGVjaG5pY2FsIGRlYnQuXG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCd0ZWFjaGVyL2FicmEvYWN0aXZpdGllcy8nKSA+IC0xKSB7XG4gIFx0Ly8gcmVkaXJlY3QgdG8gYWN0aXZpdGllcyBwYWdlIGFzIGFwcHJvcHJpYXRlIGFuZCByb3V0ZSBmcm9tIHRoZXJlLlxuICB9XG59ICgpKTtcbiJdfQ==
