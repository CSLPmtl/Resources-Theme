(function () {
	'use strict';

	const containers = document.querySelectorAll('.homepage__block-inner');

	if (typeof containers === 'undefined') {
		return;
	}

	// console.log(Array.from(containers, container => container)) // babel transpilation needs rollup: fix later

	_.each(containers, function (container, index) {
		const btn = container.getElementsByTagName('button')[0];
		btn.addEventListener('click', function () {
			if (containers[index].classList.contains('open')) {
				containers[index].classList.remove('open')
			} else {
				if (index === 0) {
					containers[1].classList.remove('open')
					containers[1].classList.toggle('other-open')
				}
				else {
					containers[0].classList.remove('open')
					containers[0].classList.toggle('other-open')
				}
				containers[index].classList.add('open')
			}
		})
	})
}());
