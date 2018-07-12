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
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jb21tb24vY29tbW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQyxhQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFDQSxVQUFTLElBQVQsQ0FBYyxVQUFVLFNBQXhCLEtBQXNDLENBQUMsU0FBUyxJQUFoRCxJQUF3RCxXQUFXLFlBQVk7QUFDN0UsTUFBSSxDQUFDLFdBQUwsRUFBa0IsT0FBTyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ25CLEVBRnVELEVBRXJELElBRnFELENBQXhEOztBQUlBO0FBQ0E7QUFDQSxDQVhBLEdBQUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0Ly8gVmlhIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQxMTczNzcvXG5cdC8vID0gcmVtb3ZlIHRoZSBicm93c2VyIFVSTCBiYXIgb24gbW9iaWxlIGRldmljZXNcblx0L01vYmlsZS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhbG9jYXRpb24uaGFzaCAmJiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICghcGFnZVlPZmZzZXQpIHdpbmRvdy5zY3JvbGxUbygwLCAxKTtcblx0fSwgMTAwMCk7XG5cblx0Ly8gU21vb3Roc2Nyb2xsIHBsdWdpblxuXHQvL2NvbnN0IHNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoJ2FbaHJlZio9XCIjXCJdJywge2hlYWRlcjogJy5zaXRlLWhlYWRlcicsIHNwZWVkOiAxMDAwfSk7XG59ICgpKTtcbiJdfQ==
