(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9ob21lL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FDLGFBQVk7QUFDWjs7QUFFQSxLQUFNLGFBQWEsU0FBUyxnQkFBVCxDQUEwQix3QkFBMUIsQ0FBbkI7O0FBRUEsS0FBSSxPQUFPLFVBQVAsS0FBc0IsV0FBMUIsRUFBdUM7QUFDdEM7QUFDQTs7QUFFRDs7QUFFQSxHQUFFLElBQUYsQ0FBTyxVQUFQLEVBQW1CLFVBQVUsU0FBVixFQUFxQixLQUFyQixFQUE0QjtBQUM5QyxNQUFNLE1BQU0sVUFBVSxvQkFBVixDQUErQixRQUEvQixFQUF5QyxDQUF6QyxDQUFaO0FBQ0EsTUFBSSxnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFZO0FBQ3pDLE9BQUksV0FBVyxLQUFYLEVBQWtCLFNBQWxCLENBQTRCLFFBQTVCLENBQXFDLE1BQXJDLENBQUosRUFBa0Q7QUFDakQsZUFBVyxLQUFYLEVBQWtCLFNBQWxCLENBQTRCLE1BQTVCLENBQW1DLE1BQW5DO0FBQ0EsSUFGRCxNQUVPO0FBQ04sUUFBSSxVQUFVLENBQWQsRUFBaUI7QUFDaEIsZ0JBQVcsQ0FBWCxFQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsTUFBL0I7QUFDQSxnQkFBVyxDQUFYLEVBQWMsU0FBZCxDQUF3QixNQUF4QixDQUErQixZQUEvQjtBQUNBLEtBSEQsTUFJSztBQUNKLGdCQUFXLENBQVgsRUFBYyxTQUFkLENBQXdCLE1BQXhCLENBQStCLE1BQS9CO0FBQ0EsZ0JBQVcsQ0FBWCxFQUFjLFNBQWQsQ0FBd0IsTUFBeEIsQ0FBK0IsWUFBL0I7QUFDQTtBQUNELGVBQVcsS0FBWCxFQUFrQixTQUFsQixDQUE0QixHQUE1QixDQUFnQyxNQUFoQztBQUNBO0FBQ0QsR0FkRDtBQWVBLEVBakJEO0FBa0JBLENBN0JBLEdBQUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0Y29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lcGFnZV9fYmxvY2staW5uZXInKTtcblxuXHRpZiAodHlwZW9mIGNvbnRhaW5lcnMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coQXJyYXkuZnJvbShjb250YWluZXJzLCBjb250YWluZXIgPT4gY29udGFpbmVyKSkgLy8gYmFiZWwgdHJhbnNwaWxhdGlvbiBuZWVkcyByb2xsdXA6IGZpeCBsYXRlclxuXG5cdF8uZWFjaChjb250YWluZXJzLCBmdW5jdGlvbiAoY29udGFpbmVyLCBpbmRleCkge1xuXHRcdGNvbnN0IGJ0biA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJylbMF07XG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGNvbnRhaW5lcnNbaW5kZXhdLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XG5cdFx0XHRcdGNvbnRhaW5lcnNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGFpbmVyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcblx0XHRcdFx0XHRjb250YWluZXJzWzFdLmNsYXNzTGlzdC50b2dnbGUoJ290aGVyLW9wZW4nKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRhaW5lcnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXG5cdFx0XHRcdFx0Y29udGFpbmVyc1swXS5jbGFzc0xpc3QudG9nZ2xlKCdvdGhlci1vcGVuJylcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250YWluZXJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdvcGVuJylcblx0XHRcdH1cblx0XHR9KVxuXHR9KVxufSgpKTtcbiJdfQ==
